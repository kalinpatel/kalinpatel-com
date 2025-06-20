import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaChrome } from "react-icons/fa";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "PrairiePlus Privacy Policy",
  description: "Privacy policy for the PrairiePlus Chrome extension.",
  openGraph: {
    title: "PrairiePlus Privacy Policy",
    description: "Privacy policy for the PrairiePlus Chrome extension.",
    url: `${baseUrl}/prairie-plus/privacy-policy`,
    siteName: "Kalin Patel",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 rounded-md mt-12">
          <div className="flex items-center gap-3">
            <FaChrome className="text-xl flex-shrink-0" />
            <div className="text-sm">
              <span className="font-medium">PrairiePlus Chrome Extension</span> —
              <Link
                href="/prairie-plus"
                className="ml-1 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <FaArrowRight className="ml-1 text-xs" />
              </Link>
            </div>
          </div>
        </div>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-black">Privacy Policy</h1>
          <h2 className="text-xl font-bold mb-2 text-black">For the PrairiePlus Chrome Extension</h2>
          <p className="text-gray-500 text-sm">Last Updated: June 19, 2024</p>
        </header>

        <div className="prose prose-slate max-w-none text-gray-700">
          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Introduction</h2>
            <p className="mb-4">
              Welcome to PrairiePlus ("we", "our", or "us"). We respect your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, and safeguard your
              information when you use our Chrome extension.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Information We Collect</h2>
            <p className="mb-2">
              PrairiePlus collects limited information to improve our services and enhance your experience. We may
              collect:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Usage data: How you interact with the extension, which features you use, and how often</li>
              <li>Technical information: Browser type, version, and operating system</li>
              <li>
                Anonymized school information: Course IDs and assignment information to improve extension functionality
              </li>
            </ul>
            <p>We do not collect personally identifiable information unless explicitly provided by you.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">How We Use Your Information</h2>
            <p className="mb-2">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>To monitor and improve the functionality and user experience of PrairiePlus</li>
              <li>To identify and fix bugs or issues</li>
              <li>To develop new features based on user interaction patterns</li>
              <li>To understand how our extension is being used in different academic environments</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Data Security</h2>
            <p>
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure,
              or destruction of your information. However, no method of transmission over the Internet or electronic
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your information to outside parties. We may share anonymized,
              aggregated data for analytical purposes, but this will never include personally identifiable information.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Choices</h2>
            <p className="mb-2">You can choose to disable or limit the collection of certain data by:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Disabling specific features within the extension settings</li>
              <li>Uninstalling the extension at any time</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h2>
            <p className="mb-2">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
            </p>
            <p>
              <a
                href="/contact?for=PrairiePlus%20Privacy%20Question"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Contact Form →
              </a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
}
