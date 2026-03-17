import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  robots: { index: false },
}

export default function TermsOfUsePage() {
  return (
    <article className="bg-desert-sand/20 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 font-heading text-5xl text-espresso">Terms of Use</h1>
        <p className="mb-12 text-sm text-almond/50">
          Effective Date: April 1, 2026 &middot; Last Updated: April 1, 2026
        </p>

        <p className="mb-8 text-lg leading-relaxed text-almond/80">
          These terms govern your use of our website. They&rsquo;re written to be clear &mdash; please take a moment to read them.
        </p>

        <p className="mb-12 leading-relaxed text-almond/70">
          Welcome to unfilteredrays.com (the &ldquo;Site&rdquo;), owned and operated by Unfiltered Rays Media Co. (&ldquo;Unfiltered Rays,&rdquo; &ldquo;us&rdquo;). By accessing or using the Site, you agree to these Terms of Use. If you do not agree, please do not use the Site.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">1. Use of the Site</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          This Site is provided for informational purposes and to facilitate inquiries and bookings for Unfiltered Rays photo booth services. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict anyone else&rsquo;s use of the Site.
        </p>
        <p className="mb-2 leading-relaxed text-almond/70">You agree not to:</p>
        <ul className="mb-12 list-inside space-y-1 text-almond/70">
          <li>&mdash; Use the Site for any unlawful, fraudulent, or harmful purpose</li>
          <li>&mdash; Attempt to gain unauthorized access to any part of the Site or its systems</li>
          <li>&mdash; Transmit any unsolicited commercial communications or spam</li>
          <li>&mdash; Upload or transmit any content that is defamatory, obscene, or otherwise objectionable</li>
          <li>&mdash; Interfere with or disrupt the Site&rsquo;s operation or servers</li>
          <li>&mdash; Scrape, copy, or reproduce Site content without our prior written consent</li>
        </ul>

        <h2 className="mb-4 font-heading text-2xl text-espresso">2. Intellectual Property</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          All content on this Site &mdash; including text, photography, logo, brand design, overlay templates, illustrations, and all other materials &mdash; is the property of Unfiltered Rays Media Co. and is protected by applicable copyright, trademark, and intellectual property laws.
        </p>
        <p className="mb-12 leading-relaxed text-almond/70">
          You may not reproduce, distribute, modify, display, or use any Site content for commercial purposes without our prior written permission. Personal, non-commercial use (such as sharing a link to our site) is permitted.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">3. User-Submitted Content</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          If you submit information through our inquiry form or communicate with us through the Site, you represent that all information provided is accurate and that you have the right to share it. You grant us permission to use submitted information to respond to your inquiry and, if you book, to fulfill our services.
        </p>
        <p className="mb-12 leading-relaxed text-almond/70">
          We do not claim ownership over content you submit. See our Privacy Policy for details on how we handle your information.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">4. Photography &amp; Event Images</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          Photos and images displayed on this Site may include images from past events. All individuals depicted have either provided consent or their images are used in accordance with our Service Agreement. If you believe an image has been used without proper authorization, please contact us immediately at hello@unfilteredrays.com.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">5. Third-Party Links &amp; Services</h2>
        <p className="mb-4 leading-relaxed text-almond/70">
          The Site may contain links to third-party websites or embed third-party services. These are provided for convenience only. We are not responsible for the content, accuracy, or practices of third-party sites and services, and linking to them does not constitute endorsement.
        </p>
        <p className="mb-12 leading-relaxed text-almond/70">
          Your use of third-party services is governed by those parties&rsquo; own terms and privacy policies.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">6. Disclaimer of Warranties</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, express or implied. Unfiltered Rays Media Co. does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy or completeness of any content on the Site.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">7. Limitation of Liability</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          To the fullest extent permitted by applicable law, Unfiltered Rays Media Co. shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Site, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from your use of the Site shall not exceed $100.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">8. Indemnification</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          You agree to indemnify and hold harmless Unfiltered Rays Media Co. and its owners, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&rsquo; fees) arising from your use of the Site, your violation of these Terms, or your violation of any third-party rights.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">9. Privacy</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at unfilteredrays.com/privacy-policy.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">10. Modifications to the Site or Terms</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          We reserve the right to modify, suspend, or discontinue the Site at any time without notice. We may also update these Terms from time to time. The &ldquo;Last Updated&rdquo; date at the top of this page will reflect any changes. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">11. Governing Law</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          These Terms are governed by the laws of the State of Tennessee, without regard to its conflict of law provisions. Any dispute arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts located in Davidson County, Tennessee.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">12. Entire Agreement</h2>
        <p className="mb-12 leading-relaxed text-almond/70">
          These Terms, together with our Privacy Policy, constitute the entire agreement between you and Unfiltered Rays Media Co. regarding your use of the Site. They supersede all prior agreements and understandings relating to the Site.
        </p>

        <h2 className="mb-4 font-heading text-2xl text-espresso">13. Contact Us</h2>
        <p className="mb-2 leading-relaxed text-almond/70">
          Questions about these Terms? We&rsquo;re happy to help.
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
