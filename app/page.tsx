import Link from "next/link";
import { Suspense } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./components/footer";
import ProjectsOverview from "./components/projectsOverview";
import ResumeItem from "./components/resumeItem";
import { TableOfContents } from "./components/tableOfContents";
import GoalAmount, { GoalAmountSkeleton, GoalKidsAmount, GoalKidsAmountSkeleton } from "./guac/goal";

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
              var(--color-indigo-500), 
              #ffffff 50%,
              #ffffff 100%
              )`,
              opacity: 0.2,
              transform: `rotate(0deg)`,
              width: "100%",
              height: "100%",
              minHeight: "1200px</p>",
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
                  <div
                    className="w-28 h-28 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                    style={{
                      backgroundImage: "url('/site-images/avatar.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      pointerEvents: "none",
                    }}
                  ></div>
                  <div className="flex justify-center lg:justify-start space-x-2 mb-4 rounded-full bg-indigo-200 border border-indigo-300 p-1 w-fit mx-auto lg:mx-0">
                    <span className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full">Chicago, IL</span>
                    <span className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full">
                      Computer Science
                    </span>
                  </div>

                  <h1 className="text-6xl font-bold">Kalin Patel</h1>
                  <p className="mt-1 text-3xl font-bold">
                    CS at
                    <span className="hover:bg-[#13294C] hover:text-[#FE5F03] px-2 font-bold transition duration-100 ease-in-out transform hover:scale-105 block-i-cursor">
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
                      href="mailto:hello@kalinpatel.com"
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
              {process.env.NEXT_PUBLIC_KESEM_CONFIG_BANNER === "show" && (
                <div className="bg-white-100 border-b-4 border-indigo-900 pb-5 mb-10 ">
                  <h3 className="text-2xl font-bold mb-2">Support Kesem at Illinois with me</h3>
                  <p className="text-md text-gray-700 mb-4">
                    Kesem is a national organization that provides a free week of summer camp for children affected by a
                    parent's cancer. As a counselor and co-director of Kesem at University of Illinois, I'm fundraising
                    to reach my goal of{" "}
                    <Suspense fallback={<GoalAmountSkeleton />}>
                      <GoalAmount />
                    </Suspense>{" "}
                    to send{" "}
                    <Suspense fallback={<GoalKidsAmountSkeleton />}>
                      <GoalKidsAmount />
                    </Suspense>{" "}
                    campers to camp this summer. Join me in supporting this cause!
                  </p>
                  <a
                    href="/guac"
                    target="_blank"
                    className="inline-block px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition"
                  >
                    Learn More
                  </a>
                </div>
              )}
              <div className="mb-10" id="education">
                <h2 className="text-3xl font-bold mb-2">Education</h2>
                <div className="block-i-cursor">
                  <ResumeItem
                    title="University of Illinois Urbana–Champaign"
                    description={[
                      <p className="font-semibold" key="degree">
                        B.S. Computer Science, Minors in Business and Informatics
                      </p>,
                      "GPA: 3.9/4.0",
                      "James Scholar Honors Program",
                      "Dean's List (Fall 2024, Spring 2025)",
                      "We CU Community Engaged Scholar Award",
                    ]}
                    dates="2024–2027"
                  />
                </div>
              </div>
              <div className="mb-10" id="projects">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <p className="text-gray-700 mt-8">
                  I am currently working on a few projects that are not yet published. Stay tuned for updates!
                </p>
                <ProjectsOverview
                  projects={
                    [
                      // {
                      //   name: "PrairiePlus",
                      //   description: "A browser extension that makes PrairieLearn a little bit better.",
                      //   image: "/site-images/prairie-plus-card.png",
                      //   pageUrl: "/prairie-plus",
                      //   github: {
                      //     url: "https://github.com/kalinpatel/PrairiePlus",
                      //     repoTitle: "kalinpatel/PrairiePlus",
                      //   },
                      // },
                    ]
                  }
                />
              </div>
              <div className="mb-10" id="experience">
                <h2 className="text-3xl font-bold mb-2">Experience</h2>
                <div>
                  <ResumeItem title="Digital Technology Intern" subtitle="United Airlines" dates="Incoming, May 2026" />
                  <ResumeItem
                    title="Software Engineering Intern"
                    subtitle="AbbVie"
                    dates="May 2025 – August 2025"
                    description={[
                      "Developed internal AI agent to accelerate approval workflows for 3,500+ digital content projects annually, integrating a custom Retrieval-Augmented Generation model and automating key actions",
                      "Migrated backend infrastructure to Kubernetes and Amazon ECS, improving scalability and compliance",
                      "Architected enterprise-compliant application architecture plan in collaboration with governance teams",
                      "Built automated website test pipelines within an Agile team to validate functionality and regulatory compliance of all US Commercial digital assets pre-launch for 52+ key brands across multiple platforms",
                      "Collaborated cross-functionally on rapid deployment of extensible APIs and documentation to support AI content generation and marketing analytics for long-term scalability",
                    ]}
                  />
                  <ResumeItem
                    title="Technical Operations Lead"
                    subtitle="The Golf Practice"
                    dates="Sep 2024 – May 2025"
                    description={[
                      "Led end-to-end implementation of a modern booking system, developing in PHP, HTML/CSS/JS and integrating new partner APIs to handle 600+ monthly reservations across 11,600+ client accounts",
                      "Managed continuous website updates and facility technology infrastructure to ensure high availability and streamlined scheduling across multiple locations",
                      "Designed wireframes, graphics, and email templates to improve user experience and engagement",
                    ]}
                  />
                  <ResumeItem
                    title="User Experience and Digital Engineering Intern"
                    subtitle="Inspire Brands – Buffalo Wild Wings"
                    dates="Dec 2021 – Mar 2022"
                    description={[
                      "Collaborated with digital marketing and product teams to analyze UX/UI and improve the Next.js customer-facing ordering site for all Buffalo Wild Wings restaurants",
                      "Designed and executed usability tests to identify customer acquisition flow and online ordering issues",
                      "Presented findings and recommendations to engineering and marketing leads to drive product improvements",
                    ]}
                  />
                </div>
              </div>
              <div className="mb-10" id="contact">
                <h2 className="text-3xl font-bold mb-2">Contact</h2>
                <p className="text-gray-700 mt-8">
                  {/* link/button to /contact */}
                  <Link
                    href="mailto:hello@kalinpatel.com"
                    className="inline-block px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition"
                  >
                    Get in Touch
                  </Link>
                  <span className="text-gray-500 ml-2">
                    or email me directly at{" "}
                    <a href="mailto:hello@kalinpatel.com" className="text-indigo-600 hover:underline">
                      hello@kalinpatel.com
                    </a>
                  </span>
                </p>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
