'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navigation, NavItem } from '../config/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.path
    const linkProps = {
      href: item.path,
      className: `flex items-center justify-center rounded-lg p-1.5 transition-colors ${
        isActive 
          ? 'text-[#E4E4E7] bg-[#27272A]' 
          : 'text-[#A1A1AA] hover:text-[#E4E4E7]'
      }`,
      ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      ...(item.download ? { download: 'HuseyinDasCV.pdf' } : {})
    }

    return (
      <div key={item.path} className="group relative">
        {item.external || item.download ? (
          <a {...linkProps}>
            {item.icon}
          </a>
        ) : (
          <Link {...linkProps}>
            {item.icon}
          </Link>
        )}
        <span className="absolute left-full ml-2 w-auto min-w-max origin-left scale-0 rounded-md bg-[#27272A] px-2 py-1 text-[12px] font-normal text-[#E4E4E7] shadow-lg transition-all duration-200 group-hover:scale-100">
          {item.label}
        </span>
      </div>
    )
  }

  return (
    <div className="fixed left-0 top-0 h-full w-14 bg-[#27272A] shadow-lg">
      <nav className="flex h-full items-center justify-center">
        <div className="space-y-7">
          {navigation.map(renderNavItem)}
        </div>
      </nav>
    </div>
  )
} 