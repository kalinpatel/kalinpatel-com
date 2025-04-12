import { kesemConfig } from "config";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./components/footer";
import { TableOfContents } from "./components/tableOfContents";

export default function Page() {
  return (
    <>
      <section>
        <div className="min-h-screen text-gray-900 px-6 py-10">
          <div
            className="absolute inset-0 z-[-1] pointer-events-none"
            style={{
              background: `radial-gradient(
              circle at 90% 10%, 
              #4F39F6, 
              #ffffff 50%,
              #ffffff 100%
              )`,
              opacity: 0.2,
              transform: `rotate(0deg)`,
              width: "100%",
              height: "100%",
              minHeight: "1200px",
              position: "fixed",
              top: "0",
              left: "0",
            }}
          ></div>
          <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mt-8">
            {/* Left Section */}
            <div className="lg:w-2/5 lg:pr-8">
              <div className="lg:sticky lg:top-16">
                <div className="text-center lg:text-left">
                  <img
                    src="/avatar.png" // Replace with your profile image path
                    alt="Kalin Patel"
                    className="w-28 h-28 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                  />
                  <div className="flex justify-center lg:justify-start space-x-2 mb-4 rounded-full bg-indigo-200 border border-indigo-300 p-1 w-fit mx-auto lg:mx-0">
                    <span className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full">Chicago, IL</span>
                    <span className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full">
                      Computer Science
                    </span>
                  </div>

                  <h1 className="text-6xl font-bold">Kalin Patel</h1>
                  <p className="mt-1 text-3xl font-bold">
                    CS at
                    <span className="hover:bg-[#13294C] hover:text-[#FE5F03] px-2 font-bold transition duration-300 ease-in-out transform hover:scale-105 block-i-cursor">
                      Illinois
                    </span>
                  </p>

                  <div className="mt-4 flex justify-center lg:justify-start space-x-3 text-sm font-bold">
                    <a
                      href="https://github.com/kalinpatel"
                      target="_blank"
                      className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 border border-gray-300"
                    >
                      <FaGithub className="inline-block mr-2" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kalinbpatel/"
                      target="_blank"
                      className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 border border-gray-300"
                    >
                      <FaLinkedin className="inline-block mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href="mailto:hello@kalinpatel.me"
                      className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 border border-gray-300"
                    >
                      <FaEnvelope className="inline-block mr-2" />
                      Email
                    </a>
                  </div>
                </div>
                <TableOfContents />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-3/5 lg:pl-8 mt-16 lg:mt-0">
              {kesemConfig.showKesemBanner && (
                <div className="bg-white border-l-4 border-indigo-500 p-6 mb-10 shadow-lg rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Kesem</h3>
                  <p className="text-md text-gray-700 mb-4">
                    I am a proud member of Kesem, an organization dedicated to supporting children impacted by a
                    parent's cancer. Through fundraising and community outreach, we strive to make a meaningful
                    difference in their lives.
                  </p>
                  <a
                    href="/guac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition"
                  >
                    Learn More
                  </a>
                </div>
              )}
              <div className="mb-10" id="education">
                <h2 className="text-3xl font-bold mb-2">Education</h2>
                <div>
                  <h3 className="font-semibold text-lg">University of Illinois Urbana–Champaign</h3>
                  <p className="text-sm text-gray-600">B.S. Computer Science, Minor in Business</p>
                  <p className="text-sm text-gray-600">2024–2028</p>
                </div>
              </div>
              <div className="mb-10" id="experience">
                <h2 className="text-3xl font-bold mb-2">Experience</h2>
                <div>
                  {[...Array(0)].map((_, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-lg">University of Illinois Urbana–Champaign</h3>
                      <p className="text-sm text-gray-600">B.S. Computer Science, Minor in Business</p>
                      <p className="text-sm text-gray-600">2024–2028</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-10" id="projects">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <div>
                  {[...Array(0)].map((_, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-lg">University of Illinois Urbana–Champaign</h3>
                      <p className="text-sm text-gray-600">B.S. Computer Science, Minor in Business</p>
                      <p className="text-sm text-gray-600">2024–2028</p>
                    </div>
                  ))}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
