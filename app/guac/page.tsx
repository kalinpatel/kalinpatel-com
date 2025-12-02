import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";
import Donors, { DonorsSkeleton } from "app/guac/donors";
import Fundraiser, { FundraiserSkeleton } from "app/guac/fundraiser";
import { baseUrl } from "app/sitemap";
import { Metadata } from "next";
import { Suspense } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaSms, FaWhatsapp } from "react-icons/fa";
import DonationButton from "./donationButton";
import MatchingWidget from "./dtdwidget";
import GoalAmount, { GoalAmountSkeleton, GoalKidsAmount, GoalKidsAmountSkeleton } from "./goal";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Support Kesem",
  description:
    "Join me in supporting Kesem, an organization that provides support for children through and beyond their parent's cancer.",
  openGraph: {
    title: 'Support Kesem with Kalin "Guac" Patel',
    description:
      "Join me in supporting Kesem, an organization that provides support for children through and beyond their parent's cancer.",
    url: `${baseUrl}/guac`,
    siteName: "Kalin Patel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/chedda.png`,
        width: 1200,
        height: 630,
        alt: "Kesem Photo",
      },
    ],
  },
};

export default function KesemPage() {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div
          className="relative text-white h-full flex flex-col justify-start items-start pt-16 pb-10 md:flex-row md:pt-36 md:pb-28 md:pl-10 kesem-bg"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(1, 55, 75, 1) 0% , rgba(1, 55, 75, 0.7) 50%, rgba(1, 55, 75, 0.3)), url('/images/kesem-group-2025.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 w-full md:w-auto bg-transparent md:bg-none p-6 md:p-0 flex flex-col items-center md:items-start">
            <h1 className="text-5xl font-bold mb-4">Support Kesem</h1>
            <p className="text-lg mb-6 max-w-2xl">
              Join us in supporting Kesem, a community that provides support for children through and beyond their
              parent's cancer.
            </p>
            <p className="text-sm mb-4">
              If you would like to donate via check or donor-advised fund, please{" "}
              <a href={`mailto:hello@kalinpatel.com`} className="text-white underline">
                let me know
              </a>
              .
            </p>
            <DonationButton className="!mt-0" />
            <Suspense fallback={<FundraiserSkeleton />}>
              <Fundraiser />
            </Suspense>
          </div>
        </div>

        {/* Why I Kesem Section */}
        <section className="py-16 bg-gray-100 text-center text-black">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 px-8 text-left">
              <section className="flex items-center mb-12 bg-white border border-gray-300 rounded-xl p-6">
                <img
                  src="/site-images/avatar.png"
                  alt="Kalin Patel"
                  className="w-32 h-32 rounded-full mr-6 object-cover border-4 border-yellow-500"
                />
                <div>
                  <h2 className="text-4xl font-bold text-indigo-900">Kalin "Guac" Patel</h2>
                  <p className="text-sm text-gray-600 mb-2 italic">
                    At camp, I go by "Guac". Kesem Names started as a Camp Kesem tradition to help our campers express
                    themselves and to be an added layer of escape from what's going on at home.
                  </p>
                  <p className="text-base text-gray-700">Kesem at University of Illinois</p>
                  <p className="text-base text-gray-700">Co-Director</p>
                  <p className="text-base text-gray-700">
                    <a
                      href="/"
                      target={process.env.NEXT_PUBLIC_KESEM_CONFIG_BANNER ? "_self" : "_blank"}
                      className="text-indigo-900 underline"
                    >
                      About
                    </a>{" "}
                    |{" "}
                    <a href={`mailto:hello@kalinpatel.com`} target="_blank" className="text-indigo-900 underline">
                      Contact
                    </a>
                  </p>
                </div>
              </section>
              <h2 className="text-3xl font-bold mb-6">Why I Kesem</h2>
              <p className="text-lg mb-8">
                For those who may not know, Kesem is a nationwide organization that supports children impacted by a
                parent’s cancer. We offer free, year-round programming and an unforgettable week of summer camp, all
                designed to provide a safe, fun, and supportive community for kids who are navigating an incredibly
                challenging time in their lives.
              </p>
              <p className="text-lg mb-8">
                I’ve been connected with Kesem for nearly a decade, first as a camper, and now as a leader in the Kesem
                at Illinois chapter. This year, I’m serving as our Co-Director, and I feel incredibly fortunate to give
                back to an organization that shaped me in so many ways. I know firsthand how powerful Kesem’s programs
                are – they provided me with a place to heal, grow, and build lifelong friendships.
              </p>
              <p className="text-lg mb-8">
                Fundraising is absolutely essential to keeping our chapter of Kesem alive for our campers. If I can
                reach my goal of{" "}
                <Suspense fallback={<GoalAmountSkeleton />}>
                  <GoalAmount />
                </Suspense>
                , I’ll be able to help send{" "}
                <Suspense fallback={<GoalKidsAmountSkeleton />}>
                  <GoalKidsAmount />
                </Suspense>{" "}
                campers to camp, free of charge. Every donation, no matter the size, helps directly impact these kids'
                lives.
              </p>
              <p className="text-lg mb-8">
                I am so grateful for your support, and I can’t wait to share the impact of your donations with you all.
                Thank you for being a part of this journey with me! If you aren’t able to contribute financially, I
                would greatly appreciate it if you could share this page on Facebook or Instagram to help me spread the
                word. Even sending an email or a quick text to someone who might be interested in supporting our cause
                would mean so much!
              </p>
              <p className="text-lg mb-8">
                Your support, in any form, helps us continue providing this life-changing experience for children and
                families who need it the most. Thank you for helping us make magic happen!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
                <h3 className="text-xl font-bold mb-4">Spread the Word</h3>
                <p className="text-sm mb-4">
                  Help us reach more people by sharing this page with your friends and family. Every share makes a
                  difference!
                </p>
                <div className="flex flex-col justify-center space-y-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/guac`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                    title="Will open Facebook with this link attached so you can create a new post"
                  >
                    <FaFacebook className="inline-block mr-2" />
                    Share on Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}/guac`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0a66c2] text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
                    title="Will open LinkedIn with this link attached so you can create a new post"
                  >
                    <FaLinkedin className="inline-block mr-2" />
                    Share on LinkedIn
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=Check out this fundraising page: ${baseUrl}/guac. Join me in supporting Kesem, an organization that provides support for children through and beyond their parent's cancer.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
                    title="Will open WhatsApp with this link attached so you can create a new message"
                  >
                    <FaWhatsapp className="inline-block mr-2" />
                    Share on WhatsApp
                  </a>
                  <a
                    href={`mailto:?subject=Support Kesem&body=Check out this fundraising page: ${baseUrl}/guac. Join me in supporting Kesem, an organization that provides support for children through and beyond their parent's cancer.`}
                    target="_blank"
                    className="bg-cyan-600 text-white px-4 py-2 rounded shadow hover:bg-cyan-700 transition"
                    title="Will open your email client with this link pre-filled"
                  >
                    <FaEnvelope className="inline-block mr-2" />
                    Share via Email
                  </a>
                  <a
                    href={`sms:?body=Check out this fundraising page: ${baseUrl}/guac. Join me in supporting Kesem, an organization that provides support for children through and beyond their parent's cancer.`}
                    className="bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition md:hidden"
                    title="Will open your SMS app with this link pre-filled"
                  >
                    <FaSms className="inline-block mr-2" />
                    Share via Text
                  </a>
                </div>
              </div>
              <p className="text-sm mt-8">
                <span className="font-bold">Donate now to make a difference!</span>
              </p>
              <DonationButton />
              <p className="text-sm mt-4">
                If you would like to donate via check or donor-advised fund, please{" "}
                <a href={`mailto:hello@kalinpatel.com`} className="text-black underline">
                  let me know
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 text-center text-white bg-indigo-900 relative">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Grateful for Our Supporters!</h2>
            <p className="text-lg mb-8">
              A special thank you to everyone who has donated this year. Your support means the world to us!
            </p>
            <Suspense fallback={<DonorsSkeleton />}>
              <Donors />
            </Suspense>
            <p className="text-lg mt-8 max-w-3xl mx-auto">
              Join them in making a difference! Every donation of any amount helps us reach my goal of sending{" "}
              <Suspense fallback={<GoalKidsAmountSkeleton />}>
                <GoalKidsAmount />
              </Suspense>{" "}
              campers to camp.
            </p>
            <DonationButton />
            <p className="text-sm mt-4">
              If you would like to donate via check or donor-advised fund, please{" "}
              <a href={`mailto:hello@kalinpatel.com`} className="text-white underline">
                let me know
              </a>
              .
            </p>
          </div>
        </section>
        <section id="matching" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Double Your Impact!</h3>
              <p className="text-gray-700 mb-4">
                Many companies offer matching gift programs to double the impact of your donation. Check with your
                employer to see if they participate in a matching program. If they do, you can submit your donation
                receipt to have your gift matched!
              </p>
              <p className="text-gray-700 mb-4 font-bold">
                To help your donation directly impact campers at our chapter, please indicate "University of Illinois -
                Kalin 'Guac' Patel" as the program, recipient, or memo line when submitting your matching gift. Please
                let me know if you submit a matching gift, so we are prepared to accept it!
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Camp Kesem
                <br />
                440 N Barranca Ave #2273
                <br />
                Covina, CA 91723
                <br />
                EIN 51-0454157
              </p>
              <p className="text-gray-700 mb-4">
                If you have any questions, feel free to{" "}
                <a href={`mailto:hello@kalinpatel.com`} className="text-indigo-900 underline">
                  let me know
                </a>
                .
              </p>
            </div>
            <div>
              <MatchingWidget />
            </div>
          </div>
        </section>
        <div className="h-12"></div>
        <Footer />
      </div>
    </>
  );
}
