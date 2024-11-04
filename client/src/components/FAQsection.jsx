import { useState } from "react";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "How do I become a member?",
      answer:
        "Joining our gym is easy! Just sign up online or visit our location to complete your membership registration. No long-term contracts are required!",
    },
    {
      question: "What fitness programs do you offer?",
      answer:
        "We offer a wide range of fitness programs including strength training, cardio, yoga, Zumba, and personal training sessions tailored to your fitness goals.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes! Our certified trainers are available for personal training sessions to help you achieve your fitness goals with customized plans and guidance.",
    },
    {
      question: "Can I cancel my membership anytime?",
      answer:
        "Absolutely. You can cancel your membership at any time with no cancellation fees. We want your gym experience to be as flexible as possible.",
    },
  ];

  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-900">
            Get answers to common questions about memberships, fitness programs,
            and more!
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-slate-300 border rounded-lg  border-gray-200 shadow-lg cursor-pointer hover:bg-slate-200"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-4 sm:p-6"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-xl font-semibold ">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                    activeQuestion === index ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-200 ${
                  activeQuestion === index ? "block" : "hidden"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:underline">
            Contact our team
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
