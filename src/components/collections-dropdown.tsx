'use client'

import { useState, useRef, useEffect } from 'react'

const collections = [
  {
    name: 'The Signature Collection',
    price: 'Starting at $995',
    coverage: 'Three-hour coverage',
    description:
      'A thoughtfully designed photo experience for intimate and intentional gatherings. Seamless integration, custom design, and a calm on-site presence define this offering.',
  },
  {
    name: 'The Refined Collection',
    price: 'Starting at $1,350',
    coverage: 'Four-hour coverage',
    description:
      'An expanded experience for celebrations requiring elevated styling and extended presence. Enhanced design elements and refined finishes create a heightened visual experience.',
  },
  {
    name: 'The Private Collection',
    price: 'Starting at $1,750',
    coverage: 'Five-hour coverage',
    description:
      'Our most comprehensive offering, created for full-scale wedding celebrations and immersive experiential events. Dedicated consultation, premium styling, and elevated detail define this collection.',
  },
]

export function CollectionsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full border border-espresso/30 px-10 py-4 font-subheading text-base tracking-wide text-espresso transition-all duration-300 hover:bg-espresso/5"
      >
        View Collections
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 mt-4 w-[min(420px,90vw)] -translate-x-1/2 overflow-hidden rounded-2xl bg-white/95 shadow-xl ring-1 ring-espresso/10 backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="divide-y divide-desert-sand/40">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href="#contact"
              className="group block px-6 py-5 transition-colors duration-200 hover:bg-desert-sand/20"
              onClick={() => setIsOpen(false)}
            >
              <div className="mb-1 flex items-baseline justify-between gap-4">
                <h3 className="font-heading text-lg text-espresso">
                  {collection.name}
                </h3>
                <span className="shrink-0 font-subheading text-xs tracking-wide text-sunlit-clay">
                  {collection.price}
                </span>
              </div>
              <p className="mb-2 font-subheading text-xs tracking-wide text-almond/60">
                {collection.coverage}
              </p>
              <p className="text-sm leading-relaxed text-almond/70">
                {collection.description}
              </p>
            </a>
          ))}
        </div>

        {/* Retainer note */}
        <div className="border-t border-desert-sand/40 bg-desert-sand/10 px-6 py-3">
          <p className="text-center text-xs leading-relaxed text-almond/50">
            A 50% retainer secures your date, with the remaining balance due 30
            days prior to your event.
          </p>
        </div>
      </div>
    </div>
  )
}
