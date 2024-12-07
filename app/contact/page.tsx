'use client'

import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div className={`flex min-h-screen bg-[#18181B] ${dmSans.className}`}>
      {/* Vertical Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="ml-14 flex-1 px-7 py-10">
        <div className="mx-auto max-w-xl">
          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="mb-5 text-[18px] font-medium text-[#E4E4E7]">Contact</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="rounded-lg bg-[#27272A] p-5">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#A1A1AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:me@huseyindas.dev" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                    me@huseyindas.dev
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-lg bg-[#27272A] p-5">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#A1A1AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+905443145220" className="text-[14px] text-[#A1A1AA] hover:text-[#E4E4E7]">
                    +90 (544) 314 5220
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 