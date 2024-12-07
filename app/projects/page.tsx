'use client'

import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Projects() {

  // Common styles for all sections
  const sectionClasses = "mb-8"
  const sectionHeaderClasses = "mb-5 text-[18px] font-medium text-[#E4E4E7]"
  const titleClasses = "text-[16px] font-medium text-[#E4E4E7]"

  return (
    <div className={`flex min-h-screen bg-[#18181B] ${dmSans.className}`}>
      <Navbar />
      
      {/* Main Content */}
      <div className="ml-14 flex-1 px-7 py-10">
        <div className="mx-auto max-w-xl">
          {/* Projects Section */}
          <div className={sectionClasses}>
            <h2 className={sectionHeaderClasses}>Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Project Card */}
              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>AI-Powered Fraud Detection System</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                  Real-time fraud detection system using computer vision and deep learning
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">TensorFlow</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">OpenCV</span>
                </div>
              </div>

              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>Motion Verification with vLLM</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                  Real-time motion detection and verificationsystem using vLLM models.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">LLM</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">OpenCV</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">CCTV</span>
                </div>
              </div>

              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>PDF Chat with Langchain</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                    This project is a FastAPI implementation that enables users to interact with PDF files through chat APIs.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Langchain</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">RAG</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">FastAPI</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Pgvector</span>
                </div>
                <a href="https://github.com/huseyindas/chat-with-pdf" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                  View Project ↗
                </a>
              </div>

              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>Langchain Assistant</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                This project is a LangChain Assistant built with FastAPI and Retrieval-Augmented Generation (RAG), supporting intelligent querying and conversation using data from sitemaps and PDFs, with easy deployment via Docker.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Langchain</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">RAG</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">FastAPI</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Pgvector</span>
                </div>
                <a href="https://github.com/huseyindas/langchain-assistant" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                  View Project ↗
                </a>
              </div>

              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>Rasachain</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                    This project enables running Rasa integrated with an LLM and Retrieval-Augmented Generation (RAG) model.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Langchain</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">RAG</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Rasa</span>
                </div>
                <a href="https://github.com/huseyindas/rasa-langchain" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                  View Project ↗
                </a>
              </div>

              <div className="rounded-lg bg-[#27272A] p-5">
                <h3 className={titleClasses}>PYNQ Z2 Deepface Face Recognition</h3>
                <p className="mb-3 text-[14px] text-[#A1A1AA]">
                    This project is designed for DeepFace and Caffe SSD models, providing tools for face recognition and object detection, and is compatible with the Pynq Z2 embedded card.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Python</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Deepface</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">Caffessd</span>
                  <span className="rounded-full bg-[#18181B] px-2.5 py-0.5 text-[12px] text-[#A1A1AA]">PYNQZ2</span>
                </div>
                <a href="https://github.com/huseyindas/pynq-z2-deepface-caffessd-tester" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                  View Project ↗
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}