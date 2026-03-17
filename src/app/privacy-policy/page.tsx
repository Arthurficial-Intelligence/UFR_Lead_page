import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-desert-sand/20 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 font-heading text-5xl text-espresso">Privacy Policy</h1>
        <p className="mb-12 text-sm text-almond/50">
          Effective Date: April 1, 2026 &middot; Last Updated: April 1, 2026
        </p>

        <p className="mb-8 text-lg leading-relaxed text-almond/80">
          We believe you should know exactly what happens to your information when you visit our website. This policy is written to be read, not just posted.
        </p>

        <p className="mb-12 leading-relaxed text-almond/70">
          This Privacy Policy describes how Unfiltered Rays Media Co. (&ldquo;Unfiltered Rays,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and protects information from visitors to unfilteredrays.com (&ldquo;the Site&rdquo;). By using the Site, you agree to the practices described here.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">1. What We Collect</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          We collect two types of information: information you give us directly, and information collected automatically when you visit the Site.
        </p>
        <p className="mb-2 font-subheading text-sm font-medium text-espresso">Information you provide directly:</p>
        <ul className="mb-4 list-inside space-y-1 text-almond/70">
          <li>&mdash; Name, email address, and phone number submitted through our inquiry or contact form</li>
          <li>&mdash; Event details (date, type, location) provided when you inquire or book</li>
          <li>&mdash; Any other information you voluntarily include in a message to us</li>
        </ul>
        <p className="mb-2 font-subheading text-sm font-medium text-espresso">Information collected automatically:</p>
        <ul className="mb-12 list-inside space-y-1 text-almond/70">
          <li>&mdash; Browser type, device type, and operating system</li>
          <li>&mdash; Pages visited, time spent on pages, and referring URLs</li>
          <li>&mdash; General geographic location (city/region level, not precise location)</li>
          <li>&mdash; Cookies and similar tracking technologies (see Section 4)</li>
        </ul>

        <h2 className="mb-4 font-heading text-2xl text-espresso">2. How We Use Your Information</h2>
        <p className="mb-4 leading-relaxed text-almond/70">We use the information we collect to:</p>
        <ul className="mb-4 list-inside space-y-1 text-almond/70">
          <li>&mdash; Respond to inquiries and communicate about your event</li>
          <li>&mdash; Process bookings and coordinate services</li>
          <li>&mdash; Send booking confirmations, reminders, and event-related communications</li>
          <li>&mdash; Understand how visitors use our website so we can improve it</li>
          <li>&mdash; Comply with legal obligations</li>
        </ul>
        <p className="mb-12 leading-relaxed text-almond/70">
          We do not sell your personal information. We do not use your information for automated decision-making or profiling.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">3. How We Share Your Information</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          We share your information only in the following limited circumstances:
        </p>
        <ul className="mb-4 list-inside space-y-3 text-almond/70">
          <li><strong>Service providers:</strong> We use trusted platforms to host our website and manage bookings. These providers are contractually required to protect your data.</li>
          <li><strong>Google Analytics:</strong> We use Google Analytics to understand site traffic and visitor behavior. Google may collect and process data in accordance with their own privacy policy.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or to protect the rights and safety of Unfiltered Rays Media Co., our clients, or the public.</li>
        </ul>
        <p className="mb-12 leading-relaxed text-almond/70">
          We do not share your information with third parties for their own marketing purposes.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">4. Cookies &amp; Tracking</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          Our website uses cookies &mdash; small text files stored on your device &mdash; to improve your experience and help us understand how the site is used. Specifically, we use:
        </p>
        <ul className="mb-4 list-inside space-y-1 text-almond/70">
          <li>&mdash; <strong>Essential cookies:</strong> Required for the site to function (session management, security). These cannot be disabled.</li>
          <li>&mdash; <strong>Analytics cookies:</strong> Set by Google Analytics to collect aggregate, anonymized data about site visits. No personally identifiable information is stored in these cookies.</li>
        </ul>
        <p className="mb-12 leading-relaxed text-almond/70">
          Most browsers allow you to control or delete cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the site.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">5. Data Retention</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          We retain your information for as long as necessary to fulfill the purposes described in this policy, or as required by law:
        </p>
        <ul className="mb-12 list-inside space-y-1 text-almond/70">
          <li>&mdash; Inquiry information (no booking): Approximately 12 months</li>
          <li>&mdash; Booking and event records: Up to 5 years for tax, legal, and business records</li>
          <li>&mdash; Analytics data: Retained per Google Analytics&rsquo; default retention settings (26 months)</li>
        </ul>

        <h2 className="mb-4 font-heading text-2xl text-espresso">6. Your Rights &amp; Choices</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          Depending on where you are located, you may have the right to:
        </p>
        <ul className="mb-4 list-inside space-y-1 text-almond/70">
          <li>&mdash; Access the personal information we hold about you</li>
          <li>&mdash; Request correction of inaccurate information</li>
          <li>&mdash; Request deletion of your information (subject to legal retention requirements)</li>
          <li>&mdash; Opt out of marketing communications at any time by replying &ldquo;unsubscribe&rdquo; to any email</li>
        </ul>
        <p className="mb-12 leading-relaxed text-almond/70">
          To exercise any of these rights, contact us at hello@unfilteredrays.com. We will respond within 30 days.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">7. California Residents (CCPA)</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used, the right to delete your personal information, and the right to opt out of the sale of your personal information. We do not sell personal information. To exercise your California privacy rights, contact us at hello@unfilteredrays.com.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">8. Children&rsquo;s Privacy</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has submitted information to us, please contact us and we will delete it promptly.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">9. Security</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. However, no method of internet transmission is 100% secure. We encourage you to use caution when sharing personal information online.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">10. Third-Party Links</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          Our website may contain links to third-party sites (such as our Instagram profile). We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">11. Changes to This Policy</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of the Site after changes are posted constitutes your acceptance of the updated policy.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">12. Contact Us</h2>
        <p className="mb-2 leading-relaxed text-almond/70">
          If you have questions about this Privacy Policy or how we handle your information, please reach out:
        </p>
        <div className="text-almond/70">
          <p>Unfiltered Rays Media Co.</p>
          <p>hello@unfilteredrays.com</p>
          <p>unfilteredrays.com &middot; @unfilteredraysmediaco</p>
          <p>Nashville, Tennessee</p>
        </div>
      </div>
    </article>
  )
}
