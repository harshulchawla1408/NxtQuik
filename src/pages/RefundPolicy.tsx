import Layout from "@/components/Layout";

const RefundPolicyPage = () => (
  <Layout>
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Refund / Service <span className="gradient-text">Policy</span>
          </h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Service Satisfaction</h2>
            <p>We are committed to delivering high-quality services. If you are not satisfied with the work delivered, we will revise it based on the original project scope at no additional cost.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Refund Eligibility</h2>
            <p>Refunds may be considered in the following cases:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Project has not yet commenced and no work has been done</li>
              <li>Significant deviation from agreed project scope by NxtQuik</li>
              <li>Failure to deliver within the extended timeline without prior communication</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Non-Refundable Cases</h2>
            <p>Refunds will not be provided in the following scenarios:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Work has already been completed and delivered</li>
              <li>Client fails to provide required materials or feedback within agreed timelines</li>
              <li>Changes in client requirements after project approval</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Refund Process</h2>
            <p>To request a refund, please contact us at <a href="mailto:nxtquik@gmail.com" className="text-primary hover:underline">nxtquik@gmail.com</a> with your project details. Refund requests will be reviewed within 7 business days.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Cancellation</h2>
            <p>Projects can be cancelled at any time. However, payment for completed milestones or work done is non-refundable.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default RefundPolicyPage;
