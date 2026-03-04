import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#f5f5f5" opacity="0.1" />
                  <rect x="25" y="45" width="50" height="20" rx="3" fill="#f5f5f5" />
                  <rect x="35" y="35" width="30" height="12" rx="2" fill="#f5f5f5" />
                  <rect x="37" y="37" width="8" height="8" rx="1" fill="#d4a574" opacity="0.6" />
                  <rect x="55" y="37" width="8" height="8" rx="1" fill="#d4a574" opacity="0.6" />
                  <rect x="25" y="63" width="50" height="3" fill="#d4a574" />
                  <circle cx="35" cy="68" r="6" fill="#f5f5f5" />
                  <circle cx="65" cy="68" r="6" fill="#f5f5f5" />
                  <circle cx="35" cy="68" r="3" fill="#d4a574" />
                  <circle cx="65" cy="68" r="3" fill="#d4a574" />
                  <circle cx="28" cy="48" r="2" fill="#d4a574" />
                  <circle cx="32" cy="48" r="2" fill="#d4a574" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Pankaj Tour & Travels</h3>
                <p className="text-xs opacity-80">Premium Cab Services</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Premium cab services across North India. Your trusted travel partner.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#fleet" className="hover:opacity-100 transition">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-100 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:opacity-100 transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:opacity-100 transition">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+919911150579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition cursor-pointer text-background hover:underline"
                >
                  9911150579
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+919911158579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition cursor-pointer text-background hover:underline"
                >
                  9911158579
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:pankaj.tourtravel8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition cursor-pointer text-background hover:underline"
                >
                  pankaj.tourtravel8@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Pankaj Tour and Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
