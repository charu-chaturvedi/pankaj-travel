"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background circle */}
                <circle cx="50" cy="50" r="48" fill="#1a5f3f" opacity="0.1" />

                {/* Car body */}
                <rect x="25" y="45" width="50" height="20" rx="3" fill="#1a5f3f" />

                {/* Car top/cabin */}
                <rect x="35" y="35" width="30" height="12" rx="2" fill="#1a5f3f" />

                {/* Windows */}
                <rect x="37" y="37" width="8" height="8" rx="1" fill="#d4a574" opacity="0.6" />
                <rect x="55" y="37" width="8" height="8" rx="1" fill="#d4a574" opacity="0.6" />

                {/* Front bumper */}
                <rect x="25" y="63" width="50" height="3" fill="#d4a574" />

                {/* Wheels */}
                <circle cx="35" cy="68" r="6" fill="#1a5f3f" />
                <circle cx="65" cy="68" r="6" fill="#1a5f3f" />

                {/* Wheel rims */}
                <circle cx="35" cy="68" r="3" fill="#d4a574" />
                <circle cx="65" cy="68" r="3" fill="#d4a574" />

                {/* Headlights */}
                <circle cx="28" cy="48" r="2" fill="#d4a574" />
                <circle cx="32" cy="48" r="2" fill="#d4a574" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-foreground">Pankaj Tour & Travels</h1>
              <p className="text-xs text-muted-foreground">Premium Cab Services</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#fleet" className="text-foreground hover:text-primary transition">
              Fleet
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#destinations" className="text-foreground hover:text-primary transition">
              Destinations
            </a>
            <a href="#booking" className="text-foreground hover:text-primary transition">
              Contact Us
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#fleet" className="text-foreground hover:text-primary transition">
              Fleet
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#destinations" className="text-foreground hover:text-primary transition">
              Destinations
            </a>
            <a href="#booking" className="text-foreground hover:text-primary transition">
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
