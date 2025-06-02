import React from 'react';
import Card from '../components/UI/Card';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400">Last updated: March 15, 2024</p>
      </div>

      <Card className="prose prose-invert max-w-none">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Lazarum AI's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p>Lazarum AI provides artificial intelligence and machine learning services, including but not limited to model training, dataset management, and AI-powered analysis.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You agree not to use the service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p>All content and materials available through our service are the property of Lazarum AI or its licensors and are protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>Lazarum AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
            <p>We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p>For any questions about these Terms of Service, please contact us at support@lazarum.ai</p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default TermsOfService;