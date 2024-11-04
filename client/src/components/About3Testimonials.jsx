import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample testimonials data with photos
const testimonials = [
  {
    name: "John Doe",
    position: "Coal Mine Worker",
    quote:
      "This platform has completely transformed how we approach safety. Now I feel much safer and more informed when I’m on site.",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Jane Smith",
    position: "Safety Manager",
    quote:
      "Real-time alerts have been a game-changer for our operations. Worker safety has significantly improved!",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Michael Johnson",
    position: "Mining Supervisor",
    quote:
      "The attendance tracking system is so efficient. I can easily monitor my team’s performance and safety compliance.",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Emily Williams",
    position: "Operations Director",
    quote:
      "Implementing this platform has been the best decision for our mining operations. It's reliable, efficient, and worker-friendly.",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="py-12">
      <div className="w-4/6 mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          What Our Workers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="flex flex-col items-center md:flex-row md:items-start bg-transparent rounded-lg">
                {/* Testimonial Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                />
                {/* Testimonial Content */}
                <div className="text-center md:text-left">
                  <p className="text-xl italic text-gray-700 mb-4">
                    {testimonial.quote}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
