export default function Hero() {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
              Your Journey, Our Responsibility
            </h2>
            <p className="text-base sm:text-lg text-accent font-semibold mb-4 italic">
              Travel is the only thing you buy that makes you richer - Explore with us!
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Premium inter-city and intra-city cab services across North India. Travel in comfort and style with Pankaj
              Tour and Travels.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#booking"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center text-sm sm:text-base"
              >
                Book Now
              </a>
              <a
                href="#fleet"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition text-center text-sm sm:text-base"
              >
                View Fleet
              </a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img
              src="/luxury-car-on-mountain-road.jpg"
              alt="Premium cab service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
