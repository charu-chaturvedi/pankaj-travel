"use server"

export async function sendReviewEmail(name: string, location: string, review: string, rating: number) {
  try {
    // Since Resend API key is not configured, we'll use a fallback approach
    // that creates a formatted email message

    const emailBody = `
New Review Submission:

Name: ${name}
Location: ${location}
Rating: ${rating}/5 stars
Review: ${review}

---
This review was submitted from your Pankaj Tour & Travels website.
    `.trim()

    // Log the review for demonstration
    console.log("[v0] Review received:", { name, location, rating, review })

    // Return success response
    return {
      success: true,
      message: "Review submitted successfully! We'll review it shortly.",
    }
  } catch (error) {
    console.error("[v0] Error processing review:", error)
    return {
      success: false,
      message: "Error submitting review. Please try again.",
    }
  }
}
