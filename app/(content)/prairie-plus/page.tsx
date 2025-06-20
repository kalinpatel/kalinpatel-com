import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";
import Image from "next/image";
import { FaChrome, FaDownload, FaGithub } from "react-icons/fa";

const WEBSTORE_URL = "https://chromewebstore.google.com/detail/pgcillkaofmdbnnckjkpbglcfkimgllg/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "PrairiePlus - PrairieLearn Extension",
  description:
    "Stay on top of your PrairieLearn assignments with PrairiePlus, a lightweight Chrome extension designed to enhance your experience and keep you organized.",
  openGraph: {
    title: "PrairiePlus - PrairieLearn Enhancement Extension",
    description:
      "Stay on top of your PrairieLearn assignments with PrairiePlus, a lightweight Chrome extension designed to enhance your experience and keep you organized.",
    url: `${baseUrl}/prairie-plus`,
    siteName: "Kalin Patel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/prairie-plus-promo-small.png`,
        width: 1200,
        height: 630,
        alt: "PrairiePlus Chrome Extension",
      },
    ],
  },
};

export default function PrairiePlusPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-blue-900">
        {/* Hero Section */}
        <div className="relative text-white py-20 bg-blue-950">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">PrairiePlus</h1>
              <p className="text-xl mb-6">Enhancing the PrairieLearn experience with additional features.</p>
              <p className="mb-8">
                Stay on top of your PrairieLearn assignments with PrairiePlus, a lightweight Chrome extension designed
                to enhance your experience and keep you organized.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WEBSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaChrome /> Add to Chrome
                </a>
                <a
                  href="https://github.com/kalinpatel/PrairiePlus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white max-w-sm mx-auto">
                <Image
                  src="/images/prairie-plus-promo-small.png"
                  alt="PrairiePlus Logo"
                  width={400}
                  height={266}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-950">Assignment Overview on Homepage</h3>
                <p className="text-gray-700 mb-4">
                  Instantly see all your upcoming assignments across courses, right when you open PrairieLearn. No more
                  digging through tabs or forgetting due dates.
                </p>
                <p className="text-gray-700">
                  Get a comprehensive view of all your assignments in one place, making it easier to plan your workload
                  and stay on schedule.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/site-images/prairie-plus-screenshot-1.png"
                  alt="Assignment Overview Feature"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-950">Coming Soon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium mb-2 text-gray-800">PrairieTest Reminders</h4>
                  <p className="text-gray-700">
                    Get notified as soon as exam scheduling opens—never miss your chance to choose the best time.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-medium mb-2 text-gray-800">Automated Exam Booking</h4>
                  <p className="text-gray-700">Book your perfect exam slot automatically when a seat opens.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Ready to enhance your PrairieLearn experience?</h2>
            <p className="text-xl mb-8">
              Built by students, for students at UIUC. Works with any school using us.prairielearn.com or
              ca.prairielearn.com.
            </p>
            <a
              href={WEBSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <FaDownload /> Download PrairiePlus
            </a>
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About PrairiePlus</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                PrairiePlus is a lightweight Chrome extension designed to enhance your PrairieLearn experience. It
                provides helpful features that make managing your coursework easier and more efficient.
              </p>
              <p className="text-gray-700 mb-4">
                The extension was developed with privacy in mind and doesn't collect any personal data. All
                functionality operates locally within your browser. View our{" "}
                <a href="./privacy-policy" className="text-blue-950 hover:text-blue-800 font-semibold underline">
                  Privacy Policy
                </a>{" "}
                for more information.
              </p>
              <p className="text-gray-700 mb-6">
                Have ideas for new features or improvements? Visit the{" "}
                <a
                  href="https://github.com/kalinpatel/PrairiePlus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 hover:text-blue-800 font-semibold underline"
                >
                  GitHub repository
                </a>{" "}
                to contribute or provide feedback.
              </p>
              <div className="text-center mt-6">
                <a
                  href="/contact?for=Prairie%20Plus%20Feedback"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Margin above footer */}
        <div className="mt-16"></div>
      </div>
      <Footer />
    </>
  );
}
