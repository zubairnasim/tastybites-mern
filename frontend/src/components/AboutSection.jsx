function AboutSection() {
  return (
    <section
      id="about"
      className="bg-yellow-300 text-black border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Top label */}
        <div className="flex items-center justify-between mb-14 px-12 lg:px-12">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            About TastyBites
          </span>

          <span className="text-xs sm:text-sm uppercase tracking-[0.15em]">
            Est. 2026
          </span>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left — Editorial heading */}
          <div>
            <h2
              className="
                text-6xl
                sm:text-7xl
                lg:text-[7.5rem]
                uppercase
                font-black
                tracking-[-0.07em]
                leading-[0.78]
                -translate-y-8
                lg:-translate-y-12
                "
            >
              Good
              <br />
              Food.
              <br />
              Good
              <br />
              Mood.
            </h2>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-8">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90"
                alt="TastyBites food"
                className="
                  w-full
                  h-[300px]
                  sm:h-[400px]
                  object-cover
                  rounded-[40%]
                  border-4
                  border-white
                  transition-transform
                  duration-500
                  hover:rotate-6
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* Description */}
            <div className="max-w-xl">
              <p className="text-lg sm:text-xl leading-relaxed">
                At TastyBites, we believe great food should be fresh, flavorful
                and made with care. From comforting classics to delicious
                favorites, every dish is prepared to bring something special to
                your table.
              </p>
            </div>

            {/* Small information row */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <p className="text-2xl font-black">100%</p>
                <p className="text-xs uppercase tracking-wider opacity-60">
                  Fresh Ingredients
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">5★</p>
                <p className="text-xs uppercase tracking-wider opacity-60">
                  Taste Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">24/7</p>
                <p className="text-xs uppercase tracking-wider opacity-60">
                  Food Love
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
