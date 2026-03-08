import { Users } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    type: "SUV",
    capacity: "7-8",
    image: "/toyota-innova-suv-white.jpg",
    features: ["AC", "Airbags", "USB Charging", "Premium Sound System"],
    description: "Spacious and comfortable for family trips and group travel",
  },
  {
    id: 2,
    name: "Maruti Swift Dzire",
    type: "Sedan",
    capacity: "4-5",
    image: "/maruti-swift-sedan-silver.jpg",
    features: ["AC", "Power Steering", "ABS", "Airbags"],
    description: "Perfect for solo travelers and couples",
  },
  {
    id: 3,
    name: "Maruti Ertiga",
    type: "SUV",
    capacity: "6-7",
    image: "/maruti-ertiga.jpeg",
    features: ["Dual AC", "Airbags", "Cruise Control", "Power Windows"],
    description: "Premium SUV for luxury travel experience",
  },
  {
    id: 4,
    name: "Kia Sonet",
    type: "Sedan",
    capacity: "4-5",
    image:
      "/kia-sonet.jpeg",
    features: ["AC", "Power Windows", "Bluetooth", "Airbags"],
    description: "Modern sedan with latest technology",
  },
  {
    id: 5,
    name: "Tempo Traveller",
    type: "Bus",
    capacity: "12,16,20,22,26",
    image: "/tempo-traveler.jpg",
    features: ["AC", "Airbags", "Power Windows", "Bluetooth"],
    description: "Spacious bus for group travel with premium comfort",
  },
  {
    id: 6,
    name: "Luxury Buses",
    type: "Bus",
    capacity: "27,35,45",
    image: "/luxury-bus.jpeg",
    features: ["AC", "Airbags", "Power Windows", "Reclining Seats"],
    description: "Premium luxury buses for large group travel",
  },
]

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Our Fleet</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Choose from our well-maintained fleet of premium vehicles for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {car.type}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">{car.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Users size={14} className="sm:w-4 sm:h-4" /> {car.capacity} Seater
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">{car.description}</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
