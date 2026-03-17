const collections = [
  {
    name: 'The Gathered Collection',
    price: '$795',
    duration: '3 hours of booth time',
    tagline: 'For the people worth slowing down for.',
    description:
      'Our most-loved experience, and the clearest expression of what we do. Designed for weddings, birthday celebrations, anniversaries, and any gathering where the people in the room are the whole point. Every detail is handled. Every guest leaves with something real in their hands.',
    note: 'This collection includes everything listed above \u2014 a complete, warmly considered experience with nothing missing and nothing superfluous.',
    includes: [
      'Personalized overlay design, tailored to your event',
      'Standard backdrop from our curated selection',
      'Classic color photo output',
      'Standard photo strip prints',
    ],
  },
  {
    name: 'The Evening Collection',
    price: '$1,050',
    duration: '3 hours of booth time',
    tagline: 'Refined. Considered. Unhurried.',
    description:
      'Everything in The Gathered Collection, elevated for your most polished occasions. Designed for upscale receptions, milestone celebrations, and hosts who want the finer details to feel exactly right. The same warmth, the same presence \u2014 with a more refined finish throughout.',
    note: null,
    includes: [
      'Everything in The Gathered Collection, plus:',
      'Premium backdrop upgrade \u2014 elevated materials and finishes',
      'Premium pearl print upgrade \u2014 a richer, more luxurious photo strip',
      'AI-enhanced photo finish \u2014 a polished, glam-ready output for every guest',
      'Choice of color, black & white, or sepia photo output',
    ],
  },
  {
    name: 'The Curated Collection',
    price: '$1,350',
    duration: '4 hours of booth time',
    tagline: 'Every detail, designed with intention.',
    description:
      'Our most comprehensive experience, built for those who want full creative control. Extends your rental by an additional hour and unlocks complete bespoke design \u2014 from a fully custom overlay crafted around your event aesthetic, to a custom back screen that makes every photo feel made for this moment specifically.',
    note: 'If you\u2019ve been saving inspiration for months, this one\u2019s for you.',
    includes: [
      'Everything in The Evening Collection, plus:',
      'One additional hour of booth time \u2014 4 hours total',
      'Fully bespoke overlay design \u2014 built from scratch around your event, not pulled from a template',
      'Custom back screen design \u2014 a fully branded experience from the moment guests approach',
    ],
  },
]

export function CollectionCards() {
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
            {collection.price} &middot; {collection.duration}
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
