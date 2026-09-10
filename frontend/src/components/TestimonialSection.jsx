const testimonials = [
  {
    quote:
      'The food was absolutely delicious. Everything tasted fresh, flavorful, and perfectly prepared.',
    name: 'Zubair Nasim',
    role: 'Happy Customer'
  },
  {
    quote:
      'TastyBites has quickly become one of my favorite places to order from. Great food and great service.',
    name: 'Riya Mehta',
    role: 'Regular Customer'
  },
  {
    quote:
      'From the presentation to the taste, everything felt carefully made. Definitely coming back again.',
    name: 'Kabir Khan',
    role: 'Food Lover'
  }
]

function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="bg-yellow-300 text-black border-b-4 border-black"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

        {/* Top heading */}
        <div className="flex items-center justify-between mb-16">

          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            Testimonials
          </span>

          <span className="text-xs sm:text-sm uppercase tracking-[0.15em]">
            What People Say
          </span>

        </div>


        {/* Main testimonial */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">

          {/* Quote */}
          <div>

            <span className="text-7xl lg:text-9xl font-black leading-none">
              “
            </span>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-7xl
                uppercase
                font-black
                tracking-[-0.06em]
                leading-[0.85]
                max-w-5xl
              "
            >
              {testimonials[0].quote}
            </h2>

          </div>


          {/* Customer */}
          <div className="lg:w-64 border-t-2 border-black pt-5">

            <p className="text-lg font-black uppercase">
              {testimonials[0].name}
            </p>

            <p className="text-xs uppercase tracking-[0.15em] opacity-60 mt-1">
              {testimonials[0].role}
            </p>

          </div>

        </div>


        {/* Bottom navigation */}
        <div className="flex items-center justify-between mt-16 pt-6 border-t-2 border-black">

          <div className="flex items-center gap-3">

            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`
                  block
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === 0
                      ? 'w-10 bg-black'
                      : 'w-2 bg-black/30'
                  }
                `}
              />
            ))}

          </div>


          <span className="text-xs uppercase tracking-[0.15em] font-bold">
            01 / 03
          </span>

        </div>

      </div>

    </section>
  )
}

export default TestimonialSection