import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Pakbeats",
  description: "Learn how Pakbeats collects, uses, and protects your personal information.",
}

const PrivacyPolicy = () => {
  const policySections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        'At VogueAura ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make purchases from us.',
        "Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.",
      ],
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: [
        "We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.",
      ],
      subsections: [
        {
          subtitle: "2.1 Information You Provide to Us",
          content: [
            "We collect information you provide when you:",
            {
              type: "list",
              items: [
                "Create an account or profile",
                "Make a purchase or attempt to make a purchase",
                "Sign up for our newsletter",
                "Participate in surveys, contests, or promotions",
                "Contact our customer service",
                "Post reviews or comments",
              ],
            },
            "This information may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.",
          ],
        },
        {
          subtitle: "2.2 Information We Collect Automatically",
          content: [
            "When you access or use our services, we automatically collect certain information, including:",
            {
              type: "list",
              items: [
                "Log information (such as IP address, browser type, pages visited)",
                "Device information (such as hardware model, operating system)",
                "Location information",
                "Usage information (such as how you use our services)",
                "Cookies and similar technologies",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "information-use",
      title: "3. How We Use Your Information",
      content: [
        "We use the information we collect for various purposes, including to:",
        {
          type: "list",
          items: [
            "Process and fulfill your orders",
            "Provide, maintain, and improve our services",
            "Send you technical notices, updates, security alerts, and support messages",
            "Respond to your comments, questions, and customer service requests",
            "Communicate with you about products, services, offers, and promotions",
            "Monitor and analyze trends, usage, and activities",
            "Detect, investigate, and prevent fraudulent transactions and other illegal activities",
            "Personalize your experience and deliver content relevant to your interests",
          ],
        },
      ],
    },
    {
      id: "information-sharing",
      title: "4. Sharing of Information",
      content: [
        "We may share your information in the following circumstances:",
        {
          type: "list",
          items: [
            "<strong>With service providers:</strong> We share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
            "<strong>For legal reasons:</strong> We may disclose information if we believe it is necessary to comply with applicable laws, regulations, legal processes, or governmental requests.",
            "<strong>In connection with a business transfer:</strong> We may share information in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.",
            "<strong>With your consent:</strong> We may share information with your consent or at your direction.",
          ],
        },
        "We do not sell your personal information to third parties.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies and Tracking Technologies",
      content: [
        "We and our service providers use cookies, web beacons, and other tracking technologies to collect information about your browsing activities on our website. These technologies help us analyze website traffic, customize content, and improve your experience.",
        "You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. However, if you disable or refuse cookies, some parts of our website may be inaccessible or not function properly.",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content: [
        "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.",
        "The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping this password confidential.",
        "Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.",
      ],
    },
    {
      id: "user-rights",
      title: "7. Your Rights and Choices",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information, including:",
        {
          type: "list",
          items: [
            "Access to your personal information",
            "Correction of inaccurate or incomplete information",
            "Deletion of your personal information",
            "Restriction of processing of your personal information",
            "Data portability",
            "Objection to processing of your personal information",
          ],
        },
        'To exercise these rights, please contact us using the information provided in the "Contact Us" section below.',
      ],
    },
    {
      id: "childrens-privacy",
      title: "8. Children's Privacy",
      content: [
        "Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete such information.",
      ],
    },
    {
      id: "international-transfers",
      title: "9. International Data Transfers",
      content: [
        "Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.",
        "If you are located outside the United States and choose to provide information to us, please note that we transfer the information to the United States and process it there. Your submission of such information represents your agreement to that transfer.",
      ],
    },
    {
      id: "policy-changes",
      title: "10. Changes to Our Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website or by other means.",
        "The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our website and this Privacy Policy to check for any changes.",
      ],
    },
    {
      id: "contact",
      title: "11. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our privacy practices, please contact us at:",
        {
          type: "contact",
          email: "ksam45180@gmail.com",
          phone: "+92 330 5056556",
          address: "National Highway , Hyderabad",
        },
      ],
    },
  ]

  const renderContent = (content: string | { type: string; items?: string[]; email?: string; phone?: string; address?: string }) => {
    if (typeof content === "string") {
      return <p className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
    } else if (content.type === "list") {
      return (
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {(content.items ?? []).map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )
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
            backgroundBlendMode: "soft-light",
            backgroundSize: "200px",
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <p className="text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            {/* Map through all policy sections */}
            {policySections.map((section) => (
              <div key={section.id} className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

                {/* Render main content */}
                {section.content.map((paragraph, idx) => (
                  <React.Fragment key={idx}>{renderContent(paragraph)}</React.Fragment>
                ))}

                {/* Render subsections if any */}
                {section.subsections?.map((subsection, idx) => (
                  <div key={idx} className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{subsection.subtitle}</h3>
                    {subsection.content.map((paragraph, pidx) => (
                      <React.Fragment key={pidx}>{renderContent(paragraph)}</React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              By using our services, you acknowledge that you have read this Privacy Policy and understand its contents.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0E3A5D] hover:bg-[#0A2A43] transition-colors duration-300"
              >
                Return to Homepage
              </Link>
              <Link
                href="/terms-of-services"
                className="inline-flex items-center px-6 py-3 border border-[#0E3A5D] text-base font-medium rounded-md text-[#0E3A5D] hover:bg-gray-50 transition-colors duration-300"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

