const express = require("express");
const router = express.Router();
const User = require("../models/User");
const ensureAuthenticated = require("../middlewares/Auth");

router.get("/", ensureAuthenticated, async (req, res) => {
  try {
    const worker = await User.aggregate([
      {
        $addFields: {
          attendanceCount: { $size: { $ifNull: ["$attendance", []] } },
        },
      },
      {
        $sort: { attendanceCount: -1 },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          attendanceCount: 0,
        },
      },
    ]);

    var attendancePercentage;

    if (worker.length > 0 && worker[0].attendance.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todayAttendance = worker[0].attendance.filter((att) => {
        const attendanceDate = new Date(att.date);
        attendanceDate.setHours(0, 0, 0, 0);
        return attendanceDate.getTime() === today.getTime();
      });

      attendancePercentage =
        (todayAttendance.length / worker[0].attendance.length) * 100;
    } else {
      console.log("No attendance records found for the worker.");
    }

    res.status(200).json({ worker, attendancePercentage });
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/location", ensureAuthenticated, async (req, res) => {
  try {
    const workers = await User.find();

    const lastLocations = workers.map((user) => {
      if (user.attendance && user.attendance.length > 0) {
        const lastAttendance = user.attendance[user.attendance.length - 1];
        return {
          name: user.name,
          location: lastAttendance.location,
        };
      } else {
        return {
          name: user.name,
          location: null,
        };
      }
    });

    res.status(200).json(lastLocations);
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
