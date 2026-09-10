function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* =========================
            TOP FOOTER
        ========================== */}
        <div className="py-20 lg:py-28">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Brand */}
            <div className="lg:col-span-1">

            <h2
            className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                tracking-[-0.06em]
                leading-none
            "
            >
            Tasty<span className="text-white">Bites</span>
            </h2>

              <p className="text-sm leading-relaxed text-white/60 max-w-xs mt-8">
                Fresh food, bold flavours and good moments,
                made with care and served with love.
              </p>

            </div>


            {/* Navigation */}
            <div>

              <p className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-300 mb-6">
                Explore
              </p>

              <div className="flex flex-col items-start gap-3">

                <a
                  href="#about"
                  className="text-lg uppercase hover:text-yellow-300 transition-colors duration-300"
                >
                  About
                </a>

                <a
                  href="#menu"
                  className="text-lg uppercase hover:text-yellow-300 transition-colors duration-300"
                >
                  Menu
                </a>

                <a
                  href="#testimonial"
                  className="text-lg uppercase hover:text-yellow-300 transition-colors duration-300"
                >
                  Testimonials
                </a>

                <a
                  href="#contact"
                  className="text-lg uppercase hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </a>

              </div>

            </div>


            {/* Contact */}
            <div>

              <p className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-300 mb-6">
                Get In Touch
              </p>

              <div className="space-y-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:zubairnasim.dev@gmail.com"
                    className="text-lg hover:text-yellow-300 transition-colors duration-300"
                  >
                    zubairnasim.dev@gmail.com
                  </a>
                </div>


                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="text-lg hover:text-yellow-300 transition-colors duration-300"
                  >
                    +91 89107 77809
                  </a>
                </div>


                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Location
                  </p>

                  <p className="text-lg">
                    Kolkata, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <div className="border-t border-white/20 py-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs uppercase tracking-[0.12em] text-white/50">
              © 2026 TastyBites. All rights reserved.
            </p>


            {/* Social links */}
            <div className="flex items-center gap-5">

              <a
                href="#"
                aria-label="Instagram"
                className="text-xl hover:text-yellow-300 transition-colors duration-300"
              >
                <i className="ri-instagram-line" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-xl hover:text-yellow-300 transition-colors duration-300"
              >
                <i className="ri-facebook-circle-line" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-xl hover:text-yellow-300 transition-colors duration-300"
              >
                <i className="ri-whatsapp-line" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer