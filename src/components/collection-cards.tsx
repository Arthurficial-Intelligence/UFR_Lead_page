import type { Collection } from '@/content/types'

export function CollectionCards({ collections }: { collections: Collection[] }) {
  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {collections.map((collection) => (
        <div
          key={collection.name}
          className="rounded border border-espresso/10 bg-desert-sand/30 p-8 sm:p-10"
        >
          <h3 className="mb-1 font-heading text-2xl text-espresso">
            {collection.name}
          </h3>
          <p className="mb-1 font-subheading text-sm font-light tracking-wide text-sunlit-clay">
            Starting at {collection.price} &middot; {collection.duration}
          </p>
          <p className="mb-6 font-subheading text-sm italic text-almond/60">
            {collection.tagline}
          </p>
          <p className="mb-4 leading-relaxed text-almond/70">
            {collection.description}
          </p>
          {collection.note && (
            <p className="mb-4 leading-relaxed text-almond/70">
              {collection.note}
            </p>
          )}
          <p className="mb-2 font-subheading text-xs tracking-widest text-sunlit-clay uppercase">
            What&rsquo;s Included
          </p>
          <ul className="space-y-1.5 text-sm leading-relaxed text-almond/60">
            {collection.includes.map((item) => (
              <li key={item}>&mdash; {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
