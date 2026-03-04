"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent service! Booked the Toyota Innova Crysta for our family trip to Shimla. The driver was professional and the car was immaculate. Highly recommended!",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    location: "Chandigarh",
    rating: 4,
    text: "Good cab service overall. The Maruti Swift Dzire was comfortable for our city tour. Punctual and courteous driver. Will book again!",
    date: "1 month ago",
  },
  {
    name: "Amit Patel",
    location: "Jaipur",
    rating: 5,
    text: "Outstanding experience! The SUV was spacious and well-maintained. Driver knew all the best routes to Udaipur. Very satisfied with the service.",
    date: "3 weeks ago",
  },
  {
    name: "Neha Singh",
    location: "Lucknow",
    rating: 3,
    text: "Average service. The car was clean but the driver could have been more friendly. Pricing is reasonable though.",
    date: "1 week ago",
  },
  {
    name: "Vikram Reddy",
    location: "Bangalore",
    rating: 5,
    text: "Perfect for my business trip to Delhi! Professional service, clean vehicle, and safe driving. The Maruti Ertiga was comfortable for the long journey.",
    date: "10 days ago",
  },
  {
    name: "Anjali Verma",
    location: "Mumbai",
    rating: 4,
    text: "Great service for our family vacation to Manali. The driver was friendly and helpful. Minor delay in pickup but overall good experience.",
    date: "2 weeks ago",
  },
]

export default function Testimonials() {
  const [reviewText, setReviewText] = useState("")
  const [reviewerName, setReviewerName] = useState("")
  const [reviewerLocation, setReviewerLocation] = useState("")
  const [reviewRating, setReviewRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (reviewText.trim() && reviewerName.trim() && reviewerLocation.trim()) {
      setIsLoading(true)

      // Simulate submission delay
      setTimeout(() => {
        setSubmitted(true)
        setReviewText("")
        setReviewerName("")
        setReviewerLocation("")
        setReviewRating(5)
        setIsLoading(false)
      }, 500)
    }
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real travelers who trusted us with their journeys
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="min-w-0">
                  <h4 className="font-bold text-foreground text-sm md:text-base truncate">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 md:w-4 md:h-4" />
                  ))}
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 italic">{testimonial.text}</p>
              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">Share Your Experience</h3>
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-pulse">
              <p className="text-base md:text-lg font-semibold">
                Thank you for Submitting your Review and Choosing Us 😊
              </p>
            </div>
          )}
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Location</label>
              <input
                type="text"
                value={reviewerLocation}
                onChange={(e) => setReviewerLocation(e.target.value)}
                placeholder="Enter your city"
                className="w-full px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-sm md:text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setReviewRating(star)} className="transition">
                    <Star
                      size={24}
                      className={`md:w-7 md:h-7 ${star <= reviewRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Review</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with us..."
                rows={4}
                className="w-full px-3 md:px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none text-sm md:text-base"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 text-sm md:text-base"
            >
              {isLoading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
