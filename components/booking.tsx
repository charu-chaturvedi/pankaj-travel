import { Mail, Phone } from "lucide-react"

export default function Booking() {
  return (
    <section id="booking" className="py-16 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Book Your Journey?</h2>
          <p className="text-base sm:text-lg opacity-90">
            Get in touch with us today and let us make your travel experience unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 md:p-8 hover:bg-primary-foreground/15 transition">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm opacity-80">Email Us</p>
                <a
                  href="mailto:pankaj.tourtravel8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-xl font-bold hover:underline break-all cursor-pointer text-primary-foreground transition duration-200"
                >
                  pankaj.tourtravel8@gmail.com
                </a>
              </div>
            </div>
            <p className="text-xs md:text-sm opacity-80">
              Send us your travel details and we'll get back to you within 2 hours with a customized quote.
            </p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 md:p-8 hover:bg-primary-foreground/15 transition">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-xs md:text-sm opacity-80">Call Us</p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919911150579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-xl font-bold hover:underline cursor-pointer text-primary-foreground transition duration-200"
                  >
                    9911150579
                  </a>
                  <a
                    href="tel:+919911158579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-xl font-bold hover:underline cursor-pointer text-primary-foreground transition duration-200"
                  >
                    9911158579
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm opacity-80">
              Available 24/7. Call us anytime to book or inquire about our services.
            </p>
          </div>
        </div>

        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Don't See Your Preferred Destination?</h3>
          <p className="text-base sm:text-lg opacity-90 mb-4">
            We cover most destinations across North India. If you don't see your destination, please reach out to us!
          </p>
          <p className="text-base sm:text-lg font-semibold">
            📧 Email:{" "}
            <a
              href="mailto:pankaj.tourtravel8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              pankaj.tourtravel8@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
