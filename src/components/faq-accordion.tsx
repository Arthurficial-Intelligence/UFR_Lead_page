'use client'

import { useState } from 'react'

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-espresso/10">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 py-6 text-left"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-heading text-xl text-espresso sm:text-2xl">
              {item.question}
            </h3>
            <svg
              className={`h-5 w-5 shrink-0 text-sunlit-clay transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openIndex === index ? '500px' : '0px',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p className="pb-6 leading-relaxed text-almond/70">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
