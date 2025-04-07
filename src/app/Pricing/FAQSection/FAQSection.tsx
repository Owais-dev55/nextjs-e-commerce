import React from "react";

const questions = [
  {
    question: "Why PakBeats ?",
    answer: "At PakBeats, we deliver high-quality wireless audio and reliable power solutions designed for your lifestyle. With premium sound, long-lasting battery life, and seamless connectivity, we ensure you stay powered and tuned in—anytime, anywhere. Choose PakBeats for innovation, reliability, and an unbeatable experience."
  }, 
  {
    question : "How does PakBeats add more value than others ?",
    answer: "At PakBeats, we carefully select top-quality products and offer them with exceptional customer service, competitive pricing, and a seamless shopping experience. We ensure authenticity, reliability, and convenience—so you get the best without the hassle."
  } ,
  {
    question : 'Do you accept returns ?',
    answer: "Yes! We offer hassle-free returns within 90 days of purchase. If you're not satisfied, were here to help with a smooth return process."
  } , 
  {
    question : "What is the delivery time ?",
    answer : "Delivery within Hyderabad takes 2-3 working days, while nationwide delivery across Pakistan takes 7-8 working days. We ensure a fast and reliable shipping experience!"
  } ,
  {
    question : "Can I cancel my order after placing it?" ,
    answer: "Yes, you can cancel your order via email within 12 hours of placing it. After that, if the order has been shipped, cancellation wont be possible, but you can request a return once received."
  } ,
  {
    question : "What should I do if I receive a wrong or damaged product ?",
    answer : "If you receive the wrong or a damaged product, contact us immediately with your order details and pictures of the item. We'll arrange a replacement or refund as soon as possible."
  }
]

const FAQSection = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#0E3A5D] " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            We`&apos;`re here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white border border-gray-100 rounded-xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Send a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we`&apos;`ll get back to you shortly.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-900 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-900 block">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="" disabled selected>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <p className="text-gray-600 mb-10 max-w-md">
              We&apos;re open for any suggestion or just to have a chat. Feel free to reach out using any of the methods
              below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-900 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    1234 Premium Avenue, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-900 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:+15550001234" className="hover:text-gray-900 transition-colors">
                      +1 (555) 000-1234
                    </a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+15550005678" className="hover:text-gray-900 transition-colors">
                      +1 (555) 000-5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-900 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@premium.com" className="hover:text-gray-900 transition-colors">
                      info@premium.com
                    </a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:support@premium.com" className="hover:text-gray-900 transition-colors">
                      support@premium.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-900 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {
              questions.map((faq , index ) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
              ))
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
