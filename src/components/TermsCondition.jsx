import React from "react";

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold">
              Terms & Conditions
            </h1>
            <p className="text-sm opacity-60">
              Last updated: February 23, 2026
            </p>

            <p>
              Welcome to <strong>Devmate</strong>. By accessing or using our
              platform, you agree to comply with and be bound by the following
              Terms & Conditions.
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <h2 className="font-semibold text-lg">1. Eligibility</h2>
                <p>You must be at least 18 years old to use Devmate.</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">2. User Accounts</h2>
                <ul className="list-disc pl-6">
                  <li>You are responsible for maintaining account security</li>
                  <li>Provide accurate and truthful profile information</li>
                  <li>You are responsible for activity under your account</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">3. Acceptable Use</h2>
                <ul className="list-disc pl-6">
                  <li>No harassment, abuse, or harmful behavior</li>
                  <li>No fake profiles or impersonation</li>
                  <li>No spam, scams, or illegal activities</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  4. Matching & Interaction
                </h2>
                <p>
                  Devmate provides developer discovery and matching features but
                  does not guarantee connections, collaborations, or outcomes.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">5. Content Ownership</h2>
                <p>
                  You retain ownership of your content but grant Devmate
                  permission to display and use it for platform functionality.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  6. Account Termination
                </h2>
                <p>
                  We may suspend or terminate accounts that violate these terms
                  or create safety risks.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  7. Limitation of Liability
                </h2>
                <p>
                  Devmate is provided "as is". We are not liable for user
                  interactions, third-party actions, or service interruptions.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">8. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Continued use of
                  the platform means you accept the updated terms.
                </p>
              </div>

             
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
