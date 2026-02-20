'use client'

import { useState } from 'react'

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

function CollectionCard({
  collection,
  isOpen,
  onToggle,
}: {
  collection: (typeof collections)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-desert-sand/30 transition-shadow duration-300 hover:shadow-lg">
      <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-desert-glow/10" />

      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full p-10 text-left sm:p-12"
      >
        <div className="mb-1 flex items-baseline justify-between gap-4">
          <h3 className="font-heading text-2xl text-espresso sm:text-3xl">
            {collection.name}
          </h3>
          <svg
            className={`h-5 w-5 shrink-0 text-sunlit-clay transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
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
        </div>
        <p className="font-subheading text-sm tracking-wide text-sunlit-clay">
          {collection.price}
        </p>
        <p className="font-subheading text-xs tracking-wide text-almond/60">
          {collection.coverage}
        </p>
      </button>

      {/* Expandable description */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-10 pb-10 sm:px-12 sm:pb-12">
          <div className="border-t border-espresso/10 pt-6">
            <p className="leading-relaxed text-almond/70">
              {collection.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CollectionCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {collections.map((collection, index) => (
        <CollectionCard
          key={collection.name}
          collection={collection}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  )
}
