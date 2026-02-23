import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold">Privacy Policy</h1>

            <p className="text-sm opacity-60">
              Last updated: February 23, 2026
            </p>

            <p>
              Welcome to <strong>Devmate</strong>, a platform where developers
              connect, collaborate, and build meaningful professional
              relationships. Your privacy is important to us.
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <h2 className="font-semibold text-lg">
                  1. Information We Collect
                </h2>
                <ul className="list-disc pl-6">
                  <li>Name, email, and profile details</li>
                  <li>Profile photo, bio, skills, and social links</li>
                  <li>Device information and usage activity</li>
                  <li>Messages and interactions</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">2. How We Use Data</h2>
                <ul className="list-disc pl-6">
                  <li>Account creation and management</li>
                  <li>Matching and discovery features</li>
                  <li>Improving recommendations</li>
                  <li>Safety and fraud prevention</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg">3. Profile Visibility</h2>
                <p>
                  Your profile may be visible to other users based on privacy
                  settings.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">4. Cookies</h2>
                <p>
                  Cookies help maintain login sessions and improve performance.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">5. Data Sharing</h2>
                <p>We do not sell your personal data.</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">6. Security</h2>
                <p>We use industry-standard security practices.</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">7. Account Deletion</h2>
                <p>You can request deletion anytime.</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">8. Age Restriction</h2>
                <p>Users must be 18+.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
