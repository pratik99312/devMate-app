import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold">Refund Policy</h1>
            <p className="text-sm opacity-60">
              Last updated: February 23, 2026
            </p>

            <p>
              This Refund Policy explains how refunds are handled for purchases
              made on <strong>Devmate</strong>.
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <h2 className="font-semibold text-lg">1. Digital Services</h2>
                <p>
                  Devmate provides digital services such as premium features,
                  visibility boosts, and subscription plans. Due to the nature
                  of digital products, purchases are generally non-refundable.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  2. Eligible Refund Cases
                </h2>
                <ul className="list-disc pl-6">
                  <li>Duplicate payment or accidental multiple charges</li>
                  <li>Technical failure preventing feature access</li>
                  <li>Unauthorized transactions (after verification)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  3. Non-Refundable Situations
                </h2>
                <ul className="list-disc pl-6">
                  <li>Change of mind after purchase</li>
                  <li>Unused premium time</li>
                  <li>Account restrictions due to policy violations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  4. Refund Request Window
                </h2>
                <p>
                  Refund requests must be submitted within 5–7 days of the
                  transaction.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">5. Processing Time</h2>
                <p>
                  Approved refunds may take 5–10 business days depending on your
                  payment provider and bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
