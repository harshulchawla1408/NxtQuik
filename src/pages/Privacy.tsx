import Layout from "@/components/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, schedule a meeting, or communicate with us. This may include your name, email address, phone number, company name, and project details.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, provide our services, communicate with you about projects, and improve our website and services.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:nxtquik@gmail.com" className="text-primary hover:underline">nxtquik@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
