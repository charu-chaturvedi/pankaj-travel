const destinations = [
  { name: "Punjab", cities: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"] },
  { name: "Himachal Pradesh", cities: ["Shimla", "Manali", "Dharamshala", "Kullu"] },
  { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Pushkar"] },
  { name: "Uttrakhand", cities: ["Dehradun", "Mussoorie", "Nainital", "Rishikesh", "Char Dham Yatra"] },
  { name: "Jammu & Kashmir", cities: ["Srinagar", "Leh", "Gulmarg", "Pahalgam"] },
  { name: "Delhi NCR", cities: ["Delhi", "Gurgaon", "Noida", "Ghaziabad"] },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Destinations We Cover</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore North India with our extensive network across multiple states and cities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((destination, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="truncate">{destination.name}</span>
              </h3>
              <ul className="space-y-2">
                {destination.cities.map((city, cidx) => (
                  <li key={cidx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary flex-shrink-0">→</span>
                    <span className="truncate">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
