import Layout from "@/components/Layout";

const TermsPage = () => (
  <Layout>
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Agreement to Terms</h2>
            <p>By accessing and using the NxtQuik website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Services</h2>
            <p>NxtQuik provides IT services, web development, app development, digital marketing, content creation, and related services. The scope, timeline, and cost of each project will be agreed upon before commencement.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Intellectual Property</h2>
            <p>All content, designs, and code created by NxtQuik remain our intellectual property until full payment is received, at which point ownership transfers to the client as agreed in the project contract.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Payment Terms</h2>
            <p>Payment terms will be outlined in individual project agreements. Late payments may incur additional charges or delay project delivery.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Limitation of Liability</h2>
            <p>NxtQuik shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Contact</h2>
            <p>For questions regarding these terms, contact us at <a href="mailto:nxtquik@gmail.com" className="text-primary hover:underline">nxtquik@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
