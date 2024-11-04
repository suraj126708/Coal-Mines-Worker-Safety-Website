import Aditya from "../assets/images/Aditya.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Suraj Gitte ",
      position: "Developer",
      description:
        "Add your detail description here. Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQGdvKNChcnspw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727688634417?e=1733961600&v=beta&t=P5nG5fnGNkjY9YWSrpedDDCnQPhUraEj9J_vbGaB3gI",
    },
    {
      name: "Dev Jangam",
      position: "Database Engineer",
      description:
        "Add your detail description here. Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQHTsPPwpV-P2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703833995680?e=1733961600&v=beta&t=gjYYCK1DgkMrCMWc3ul9ASRvUuIHmoaAMnIcv3xWNWc",
    },
    {
      name: "Aditya Inamdar ",
      position: "Database Designer",
      description:
        "Add your detail description here. Lorem ipsum dolor sit amet.",
      imageUrl: Aditya,
    },
    {
      name: "Rohan Humbe",
      position: "Founder",
      description: "A student from VIT Pune",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQG7oVv4VbgygQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715880963714?e=1733961600&v=beta&t=qsN8AI0rn61c4ZKUyGQRB5E3S2gj5n4sTneTEHvJfFk",
    },
  ];

  return (
    <>
      {" "}
      <div className="max-w-7xl mt-14 mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-center  text-6xl font-extrabold text-black mb-20">
          Meet Our Team
        </h2>
        <div className="flex justify-between items-center space-x-9">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <img
                className="w-40 h-40 rounded-full object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="text-center">
                <h3 className="text-xl font-medium text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-800">{member.position}</p>
                <p className="mt-2 text-sm text-slate-800">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
