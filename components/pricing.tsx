const pricingData = [
  {
    category: "Sedan",
    perKm: "₹12",
    fullPackage: "₹3000",
    description: "Per day (250 km)",
    vehicles: ["Maruti Swift Dzire", "Kia Sonet"],
    includes: ["Driver", "Fuel"],
  },
  {
    category: "SUV",
    perKm: "₹18",
    fullPackage: "₹4800",
    description: "Per day (250 km)",
    vehicles: ["Toyota Innova Crysta", "Maruti Ertiga"],
    includes: ["Driver", "Fuel"],
  },
  {
    category: "Tempo Traveller",
    description: "12, 16, 20, 22, 26 Seater",
    vehicles: ["Spacious & Comfortable"],
    includes: ["Driver", "Fuel", "AC"],
    contactNote: true,
  },
  {
    category: "Luxury Buses",
    description: "27, 35, 45 Seater",
    vehicles: ["Premium & Spacious"],
    includes: ["Driver", "Fuel", "AC", "Premium Comfort"],
    contactNote: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Transparent Pricing</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            No hidden charges. Clear and competitive rates for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pricingData.map((plan, idx) => (
            <div
              key={idx}
              className="bg-card border-2 border-primary/20 rounded-xl p-6 md:p-8 hover:border-primary transition"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{plan.category}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">{plan.description}</p>

              {!plan.contactNote ? (
                <div className="mb-8">
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Per Kilometer</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">{plan.perKm}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Full Day Package</p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">{plan.fullPackage}</p>
                  </div>
                </div>
              ) : (
                <div className="mb-8 p-4 sm:p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-base sm:text-lg font-semibold text-foreground mb-4">Custom Pricing Available</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Contact us for personalized quotes based on your requirements
                  </p>
                  <a
                    href="#booking"
                    className="inline-block px-4 sm:px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-xs sm:text-sm"
                  >
                    Contact Us
                  </a>
                </div>
              )}

              <div className="mb-8">
                <p className="font-semibold text-foreground mb-3 text-sm sm:text-base">Available Vehicles:</p>
                <ul className="space-y-2">
                  {plan.vehicles.map((vehicle, vidx) => (
                    <li key={vidx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {vehicle}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3 text-sm sm:text-base">Includes:</p>
                <ul className="space-y-2">
                  {plan.includes.map((item, iidx) => (
                    <li key={iidx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
          <p className="text-xs sm:text-sm md:text-base text-foreground">
            <span className="font-semibold">Special Offers:</span> Group bookings get 10% discount | Monthly packages
            available | Corporate rates on request
          </p>
        </div>
      </div>
    </section>
  )
}
