import { TrendingUp, PhoneCall } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #f7f7f7, transparent)",
        }}
      >
        <div className="mx-auto py-14 max-w-7xl px-4 sm:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Why <span className="text-emerald-500">Choose Us</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-8 text-center md:text-left">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-2 sm:pt-5">
                <div className="flex items-center justify-center gap-2 sm:gap-4 rounded-lg">
                  <div className="bg-gray-100 rounded-xl p-2">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h2 className="text-sm sm:text-lg text-gray-800 font-bold mt-4 text-center sm:text-left">
                    Business Growth
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-4 rounded-lg">
                  <div className="bg-gray-100 rounded-xl p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-emerald-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l9 9-9 9-9-9 9-9z" />
                    </svg>
                  </div>
                  <h2 className="text-sm sm:text-lg text-gray-800 font-bold mt-4 text-center sm:text-left">
                    Technology Consultancy
                  </h2>
                </div>
              </div>

              <hr className="my-1 sm:my-2" />

              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-2 sm:pt-5">
                <div className="flex items-center justify-center gap-2 sm:gap-4 rounded-lg">
                  <div className="w-11">
                    <img
                      className="rounded-full w-11"
                      src="https://jthemes.net/themes/html/growim/assets/images/resources/why-choose-three-author.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="text-sm sm:text-lg text-gray-800 font-semibold mt-4 text-center sm:text-left">
                    Muhammad Haseeb <br />
                    <span className="font-medium text-gray-500 text-xs sm:text-sm">
                      Founder
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 rounded-lg">
                  <div className="bg-emerald-600 rounded-xl p-3">
                    <PhoneCall className="text-white w-6 h-6" />
                  </div>
                  <h2 className="text-sm sm:text-lg text-gray-500 font-semibold  text-center sm:text-left">
                    Call us now <br />
                    <span className="font-medium text-base sm:text-xl text-gray-800">
                      +208-555-0112
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Section (Image + Girl Animation) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative pl-0 md:pl-28">
              <img src={'images/bg_1.jpeg'} className=" md:w-10/12 w-2/3" alt="Background" />
              <div>
                <img
                  src={'images/why_choose_girl.png'}
                  alt="Why Choose Us"
                  className="md:w-10/12 w-2/3 bottom-0 left-20 md:left-12 absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
