function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-yellow-300">

      {/* Background decorative band */}
      <div className="absolute left-[-5%] right-[-5%] top-[44%] h-32 bg-yellow-400 -rotate-2" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-10 pt-28 sm:pt-36 pb-20 flex items-center">

        <div className="relative w-full">

          {/* Main heading */}
          <h1
            className="
              relative z-30
              text-center
              uppercase
              font-black
              tracking-[-0.075em]
              leading-[0.76]
              text-black
              select-none
            "
          >
            <span className="block text-[17vw] sm:text-[16vw] lg:text-[13rem]">
              Taste
            </span>

            <span className="block text-[17vw] sm:text-[16vw] lg:text-[13rem]">
              That
            </span>

            <span className="block text-[17vw] sm:text-[16vw] lg:text-[13rem]">
              Makes
            </span>

            <span className="block text-[17vw] sm:text-[16vw] lg:text-[13rem] whitespace-nowrap">
              You Smile
            </span>
          </h1>


          {/* Pizza image */}
          <div
            className="
              absolute
              z-20
              top-[2%]
              right-[0%]
              sm:right-[8%]
              lg:right-[14%]
              w-24
              sm:w-40
              lg:w-56
              rotate-6
              drop-shadow-[10px_14px_0px_rgba(0,0,0,0.15)]
              sm:drop-shadow-[12px_18px_0px_rgba(0,0,0,0.15)]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=90"
              alt="Fresh pizza"
              className="
                w-full
                aspect-square
                object-cover
                rounded-[38%]
                border-3
                border-black
              "
            />
          </div>


          {/* Food image */}
          <div
            className="
              absolute
              z-20
              bottom-[12%]
              left-[0%]
              sm:left-[9%]
              lg:left-[10%]
              w-20
              sm:w-36
              lg:w-55
              -rotate-12
              drop-shadow-[10px_14px_0px_rgba(0,0,0,0.15)]
              sm:drop-shadow-[12px_18px_0px_rgba(0,0,0,0.15)]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=90"
              alt="Delicious food"
              className="
                w-full
                aspect-square
                object-cover
                rounded-[38%]
                border-3
                border-black
              "
            />
          </div>


          {/* Decorative circle */}
          <div
            className="
              hidden
              sm:block
              absolute
              z-20
              top-[50%]
              right-[7%]
              w-5
              h-5
              bg-black
              rounded-full
            "
          />

          {/* Smaller decorative circle */}
          <div
            className="
              hidden
              sm:block
              absolute
              z-20
              top-[53%]
              right-[5.5%]
              w-2.5
              h-2.5
              bg-black
              rounded-full
            "
          />


          {/* Made fresh text */}
          <div className="absolute top-[110px] left-2 hidden md:block z-20">
            <p className="text-xs font tracking-[0.15em]">
              Made fresh every day
            </p>
          </div>


          {/* CTA */}
          <div
            className="
              absolute
              z-40
              left-1/2
              -translate-x-1/2
              bottom-[-70px]
              sm:left-0
              sm:translate-x-0
              sm:bottom-auto
              sm:top-[45px]
            "
          >
            <a
              href="#menu"
              className="
                inline-flex
                items-center
                gap-3
                bg-black
                text-yellow-300
                px-6
                py-3
                rounded-full
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-wide
                whitespace-nowrap
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Explore Menu
              <span className="text-lg">↗</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero