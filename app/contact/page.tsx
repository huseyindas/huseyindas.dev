'use client'

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div className={`flex min-h-screen bg-[#18181B] ${dmSans.className}`}>
      {/* Vertical Navbar */}
      <div className="fixed left-0 top-0 h-full w-14 bg-[#27272A] shadow-lg">
        <nav className="flex h-full items-center justify-center">
          <div className="space-y-7">
            <div className="group relative">
              <a href="/" className="flex items-center justify-center rounded-lg p-1.5 text-[#A1A1AA] transition-colors hover:text-[#E4E4E7]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
              <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">Home</span>
            </div>

            <div className="group relative">
              <a href="/projects" className="flex items-center justify-center rounded-lg p-1.5 text-[#A1A1AA] transition-colors hover:text-[#E4E4E7]">
                <svg className="h-5 w-5" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </a>
              <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">Projects</span>
            </div>

            <div className="group relative">
              <a href="/contact" className="flex items-center justify-center rounded-lg p-1.5 text-[#E4E4E7] transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">Contact</span>
            </div>

            <div className="group relative">
              <a href="https://www.upwork.com/freelancers/~017013a12c5d48ae69" className="flex items-center justify-center rounded-lg p-1.5 text-[#A1A1AA] transition-colors hover:text-[#E4E4E7]">
                <svg className="h-5 w-5" viewBox="0 0 641 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z" />
                </svg>
              </a>
              <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">Upwork</span>
            </div>

            <div className="group relative">
              <a 
                href="/HuseyinDasCV.pdf" 
                download="HuseyinDasCV.pdf"
                className="flex items-center justify-center rounded-lg p-1.5 text-[#A1A1AA] transition-colors hover:text-[#E4E4E7]"
              >
                <svg className="h-5 w-5" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                </svg>
              </a>
              <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">Download CV</span>
            </div>
          </div>
        </nav>
      </div>

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