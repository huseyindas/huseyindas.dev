'use client'

import { DM_Sans } from 'next/font/google'
import Navbar from './components/Navbar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Home() {

  // Common styles for all sections
  const sectionClasses = "mb-8"
  const sectionHeaderClasses = "mb-5 text-[18px] font-medium text-[#E4E4E7]"
  const itemsContainerClasses = "space-y-7"
  const itemClasses = "flex gap-5"
  const dateColumnClasses = "w-[85px] shrink-0 text-[14px] text-[#A1A1AA]"
  const contentClasses = "flex-1"
  const titleClasses = "text-[16px] font-medium text-[#E4E4E7]"
  const subtitleClasses = "text-[14px] text-[#A1A1AA]"

  return (
    <div className={`flex min-h-screen bg-[#18181B] ${dmSans.className}`}>
      {/* Vertical Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="ml-14 flex-1 px-7 py-10">
        <div className="mx-auto max-w-xl">
          {/* Profile Section */}
          <div className="mb-8 flex items-center space-x-5">
            <img
              src="/profile-image.png"
              alt="Profile foto"
              className="h-[68px] w-[68px] rounded-full object-cover"
            />
            <div>
              <h1 className="text-[23px] font-medium text-[#E4E4E7]">Hüseyin Daş</h1>
              <p className="text-[16px] text-[#A1A1AA]">Software Engineer in Istanbul, Turkey</p>
              <a 
                href="https://huseyindas.dev" 
                className="mt-1.5 inline-block rounded-md bg-[#27272A] px-2.5 py-0.5 text-[14px] text-[#A1A1AA] transition-colors hover:text-[#E4E4E7]"
              >
                huseyindas.dev
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="mb-2.5 text-[18px] font-medium text-[#E4E4E7]">About</h2>
            <p className="text-pretty text-[14px] leading-relaxed text-[#A1A1AA] text-justify hyphens-auto w-full">
              As an experienced software engineer, I have designed and implemented scalable solutions 
              for large-scale applications. Currently, I work on AI-focused projects that provide 
              innovative solutions in the field of data science, and also manage complex deployments 
              in DevOps, focusing on optimizing CI/CD pipelines and cloud-based infrastructures. 
              Leveraging my expertise in technologies such as Django, FastAPI, Flask, PostgreSQL, 
              Docker, Kubernetes, AWS, and Redis, I continue to collaborate with agile teams to 
              produce high-quality software. I am also actively developing projects with LLM models, 
              LangChain, and RAG. Recently, I worked on vLLM models to process real-time camera 
              footage and developed an alerting mechanism based on it. Looking ahead, I aim to 
              expand my work in both AI and DevOps, focusing on providing cutting-edge solutions 
              in these different areas.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className={sectionClasses}>
            <h2 className={sectionHeaderClasses}>Work Experience</h2>
            <div className={itemsContainerClasses}>
              <div className={itemClasses}>
                <div className={dateColumnClasses}>2021 — Now</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <a href="https://hybrone.com" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>Backend & AI/ML Developer | DevOps Engineer at Hybrone ↗</h3>
                    </a>
                    <p className={subtitleClasses}>Istanbul, Turkey</p>
                  </div>
                  <ul className="list-inside list-disc space-y-1.5 text-[13px] leading-relaxed text-[#A1A1AA] text-justify hyphens-auto w-full">
                    <li>Participated in R&D projects, contributing to the completion of multiple TEYDEB projects with high evaluations.</li>
                    <li>Authored and co-authored academic articles published in domestic and international journals.</li>
                    <li>Developed chatbots using the Rasa framework, reducing technical service workload by 30% and providing 24/7 user support.</li>
                    <li>Implemented AI-driven features such as voice and camera support for mobile apps.</li>
                    <li>Conducted fraud detection in retail using CCTV cameras and YOLO models, achieving over 90% accuracy.</li>
                    <li>Worked on Bluetooth and UWB-based indoor positioning systems.</li>
                    <li>Developed facial recognition systems with custom facenet-based hybrid models, integrating them into the Hybrone platform.</li>
                    <li>Built hybrid recommendation models for personalized user experiences.</li>
                  </ul>
                </div>
              </div>

              <div className={itemClasses}>
                <div className={dateColumnClasses}>2021 — 2021</div>
                <div className={contentClasses}>
                  <div className="mb-2">
                    <a href="https://biges.com" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>Backend Developer at Biges ↗</h3>
                    </a>
                    <p className={subtitleClasses}>Istanbul, Turkey</p>
                  </div>
                  <ul className="list-inside list-disc space-y-1.5 text-[14px] leading-relaxed text-[#A1A1AA] text-justify hyphens-auto w-full">
                    <li>Developed the backend for the company&apos;s B2B platform using Django Rest Framework, integrated with Canias ERP.</li>
                    <li>Managed ERP interactions to provide real-time information on dealer statuses, product stocks, and technical services to end users.</li>
                    <li>Utilized PostgreSQL for database management, Celery for task queuing, Redis for caching, and Elasticsearch for search indexing.</li>
                    <li>Employed S3 and GCP for storage, and Docker for containerization.</li>
                    <li>Ensured the platform&apos;s active usage by over 3000 dealers, introducing an advanced, user-friendly B2B system in the sector.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={sectionClasses}>
            <h2 className={sectionHeaderClasses}>Education</h2>
            <div className={itemsContainerClasses}>
              <div className={itemClasses}>
                <div className={dateColumnClasses}>2024 — Now</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <h3 className={titleClasses}>Master Degree at Fırat University</h3>
                    <p className={subtitleClasses}>Elazig, Turkey</p>
                  </div>
                </div>
              </div>

              <div className={itemClasses}>
                <div className={dateColumnClasses}>2018 — 2022</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <h3 className={titleClasses}>Bachelor Degree at Fırat University</h3>
                    <p className={subtitleClasses}>Elazig, Turkey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Writing Section */}
          <div className={sectionClasses}>
            <h2 className={sectionHeaderClasses}>Writing</h2>
            <div className={itemsContainerClasses}>
              <div className={itemClasses}>
                <div className={dateColumnClasses}>2022</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <a href="https://esciconf.com/proceeding/esciconf_2022_proceeding_book.pdf" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>Market Fraud Detection with Image Processing ↗</h3>
                    </a>
                    <p className={subtitleClasses}>International Conference On Emerging Sources In Science</p>
                  </div>
                </div>
              </div>

              <div className={itemClasses}>
                <div className={dateColumnClasses}>2022</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <a href="https://www.iksadkongre.net/_files/ugd/614b1f_d911fb74945046f2a3c96260eaa3a10d.pdf" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>Face Identification in Security Systems ↗</h3>
                    </a>
                    <p className={subtitleClasses}>Cukurova 9th International Scientific Researches Conferance</p>
                  </div>
                </div>
              </div>

              <div className={itemClasses}>
                <div className={dateColumnClasses}>2022</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <a href="https://rdconf.com/veepsoox/2022/01/RDCONF_2021__PROCEEDING_BOOK_.pdf" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>Product Recommendation System Based on AI ↗</h3>
                    </a>
                    <p className={subtitleClasses}>RDCONF International Conference on Design, Research and Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={sectionClasses}>
            <h2 className={sectionHeaderClasses}>Certifications</h2>
            <div className={itemsContainerClasses}>
              <div className={itemClasses}>
                <div className={dateColumnClasses}>2022</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <h3 className={titleClasses}>Certificate of Participation</h3>
                    <p className={subtitleClasses}>IKSAD Institute</p>
                  </div>
                </div>
              </div>

              <div className={itemClasses}>
                <div className={dateColumnClasses}>2021</div>
                <div className={contentClasses}>
                  <div className="mb-1.5">
                    <a href="https://rdconf.com/veepsoox/2021/12/426.pdf" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                      <h3 className={titleClasses}>RDCONF2021 Certificate of Participation ↗</h3>
                    </a>
                    <p className={subtitleClasses}>Orclever Science&Research Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
