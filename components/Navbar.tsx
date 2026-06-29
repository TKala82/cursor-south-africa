'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import LanguageToggle from '@/components/LanguageToggle'
import { siteConfig } from '@/content/site.config'

const NAV_LINKS = [
  { href: '#upcoming', key: 'home.upcomingEvents' },
  { href: '#recaps', key: 'home.pastEvents' },
] as const

function useScrollState() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['upcoming', 'recaps']
      let current: string | null = null
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, activeSection }
}

export default function Navbar() {
  const { t } = useI18n()
  const { scrolled, activeSection } = useScrollState()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-cursor-bg transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-cursor-border'
            : 'border-b border-cursor-border'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 h-14">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/cursor-logo.svg"
              alt="Cursor"
              width={120}
              height={32}
              priority
              className="h-6 md:h-8 w-auto"
            />
            <span className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium">
              | {siteConfig.country}
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map(({ href, key }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-cursor-text font-medium'
                      : 'text-cursor-text-muted hover:text-cursor-text'
                  }`}
                >
                  {t(key)}
                </a>
              )
            })}
            <a
              href={`${siteConfig.lumaUrl}?period=past`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-3.5 py-1.5 rounded-md bg-cursor-text text-cursor-bg hover:bg-cursor-text-secondary transition-colors"
            >
              {t('nav.joinCommunity')}
            </a>
            <LanguageToggle />
          </div>

          <div className="flex sm:hidden items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-cursor-text-muted hover:text-cursor-text transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="h-14 shrink-0" aria-hidden="true" />

      {mobileOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-cursor-bg sm:hidden">
          <div className="flex flex-col items-center gap-6 pt-12">
            {NAV_LINKS.map(({ href, key }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobile}
                className="text-lg text-cursor-text-muted hover:text-cursor-text transition-colors"
              >
                {t(key)}
              </a>
            ))}
            <a
              href={`${siteConfig.lumaUrl}?period=past`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="text-base font-medium px-5 py-2.5 rounded-md bg-cursor-text text-cursor-bg hover:bg-cursor-text-secondary transition-colors"
            >
              {t('nav.joinCommunity')}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
