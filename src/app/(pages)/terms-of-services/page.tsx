import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | VogueAura",
  description: "Terms and conditions for using VogueAura's services and products.",
}

const TermsOfService = () => {
  const termsSections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        'Welcome to VogueAura. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using VogueAura, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.',
      ],
    },
    {
      id: "acceptance",
      title: "2. Acceptance of Terms",
      content: [
        "By creating an account, making a purchase, or otherwise using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. We reserve the right to update these Terms at any time without notice. Your continued use of our services following any changes constitutes acceptance of those changes.",
      ],
    },
    {
      id: "user-accounts",
      title: "3. User Accounts",
      content: [
        "When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
        "We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms.",
      ],
    },
    {
      id: "products-pricing",
      title: "4. Products and Pricing",
      content: [
        "All product descriptions, including pricing, are subject to change at any time without notice. We reserve the right to modify or discontinue any product without notice. We are not liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.",
        "Prices for our products are subject to change without notice. We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.",
      ],
    },
    {
      id: "orders-payments",
      title: "5. Orders and Payments",
      content: [
        "When you place an order, you offer to purchase the product at the price stated. We reserve the right to accept or decline your order for any reason. Once we accept your order, we will send you an order confirmation email.",
        "Payment must be received prior to the acceptance of an order. We accept major credit cards and other payment methods as specified during checkout. By submitting an order, you represent and warrant that you are authorized to use the designated payment method.",
      ],
    },
    {
      id: "shipping-delivery",
      title: "6. Shipping and Delivery",
      content: [
        "Delivery times are estimates only and commence from the date of shipping, not the date of order. We are not responsible for delivery delays beyond our control, including but not limited to carrier delays, weather conditions, or other force majeure events.",
        "Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.",
      ],
    },
    {
      id: "returns-refunds",
      title: "7. Returns and Refunds",
      content: [
        "We offer a 30-day return policy for most products. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Some products have different return policies or are not eligible for return, as specified in their descriptions.",
        "To initiate a return, please contact our customer service team. If your return is approved, we will provide instructions on how and where to send your package. Items returned without prior approval may not be accepted.",
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property",
      content: [
        "The content on our website, including text, graphics, logos, images, and software, is the property of VogueAura or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, modify, or create derivative works from any content without our express written permission.",
      ],
    },
    {
      id: "user-conduct",
      title: "9. User Conduct",
      content: [
        "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services. You also agree not to attempt to gain unauthorized access to any part of our services, other accounts, computer systems, or networks connected to our services.",
      ],
    },
    {
      id: "limitation-liability",
      title: "10. Limitation of Liability",
      content: [
        "In no event shall VogueAura, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage related to your use of our services; (iii) unauthorized access to or use of our servers and/or any personal information stored therein; or (iv) any other matter relating to our services.",
      ],
    },
    {
      id: "privacy-policy",
      title: "11. Privacy Policy",
      content: [
        "Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within [Your Jurisdiction].",
      ],
    },
    {
      id: "changes-terms",
      title: "13. Changes to Terms",
      content: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      ],
    },
    {
      id: "contact-information",
      title: "14. Contact Information",
      content: [
        "If you have any questions about these Terms, please contact us at:",
        {
          type: "contact",
          email: "ksam45180@gmail.com",
          phone: "+92 330 5056556",
          address: "National Highway , Hyderabad"
        },
      ],
    },
  ]

  // Function to render content based on its type
  const renderContent = (content: string | { type: string; email: string; phone: string; address: string }) => {
    if (typeof content === "string") {
      return <p className="mb-4">{content}</p>
    } else if (content.type === "contact") {
      return (
        <p className="mb-8">
          <strong>Email:</strong> {content.email}
          <br />
          <strong>Phone:</strong> {content.phone}
          <br />
          <strong>Address:</strong> {content.address}
        </p>
      )
    }
    return null
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="relative h-[30vh] bg-gradient-to-br from-[#0E3A5D] to-[#0A2A43] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/noise-pattern.png')",
            backgroundBlendMode: "soft-light",
            backgroundSize: "200px",
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <p className="text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            {/* Map through all terms sections */}
            {termsSections.map((section) => (
              <div key={section.id} className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

                {/* Render content */}
                {section.content.map((paragraph, idx) => (
                  <React.Fragment key={idx}>{renderContent(paragraph)}</React.Fragment>
                ))}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              By using our services, you acknowledge that you have read these Terms of Service and agree to be bound by
              them.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0E3A5D] hover:bg-[#0A2A43] transition-colors duration-300"
              >
                Return to Homepage
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center px-6 py-3 border border-[#0E3A5D] text-base font-medium rounded-md text-[#0E3A5D] hover:bg-gray-50 transition-colors duration-300"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

