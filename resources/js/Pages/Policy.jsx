import AppLayout from "@/Layouts/AppLayout";

export default function Policy() {
    return (
        <AppLayout title="Privacy Policy">
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-red-800 tracking-widest">Privacy Policy for EternaDrive</h1>
                <p className="text-white-300 text-xs mb-3">Last Updated: [Insert Date]</p>
                
                <h2 className="text-red-800 text-xl font-semibold">1. Information We Collect</h2>
                <p className="text-white-300 text-xs mb-3">We may collect the following types of information:</p>
                
                <h3 className="text-red-800 text-medium mt-4 font-semibold">1.1 Personal Information</h3>
                <p className="text-white-300 text-xs mb-3">Name, email address, and contact details when you register an account. Payment details if you use paid features (processed securely by third-party payment providers).</p>
                
                <h3 className="text-red-800 text-medium mt-4 font-semibold">1.2 Usage Information</h3>
                <p className="text-white-300 text-xs mb-3">IP address, device information, and browser type. Log data such as access times, pages visited, and interactions.</p>
                
                <h3 className="text-red-800 text-medium mt-4 font-semibold">1.3 Uploaded Content</h3>
                <p className="text-white-300 text-xs mb-3">Files and documents you store on EternaDrive. Metadata associated with uploaded content.</p>
                
                <h2 className="text-red-800 text-xl font-semibold">2. How We Use Your Information</h2>
                <p className="text-white-300 text-xs mb-3">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6">
                    <li className="text-white-300 text-xs mb-3">To provide, maintain, and improve our services.</li>
                    <li className="text-white-300 text-xs mb-3">To secure and protect user accounts.</li>
                    <li className="text-white-300 text-xs mb-3">To communicate important updates or service-related notifications.</li>
                    <li className="text-white-300 text-xs mb-3">To comply with legal obligations.</li>
                </ul>
                
                <h2 className="text-red-800 text-xl font-semibold">3. How We Share Your Information</h2>
                <p className="text-white-300 text-xs mb-3">We do not sell or rent your personal data. However, we may share your information with:</p>
                <ul className="list-disc pl-6">
                    <li className="text-white-300 text-xs mb-3">Service Providers: Third parties that assist in hosting, analytics, and payment processing.</li>
                    <li className="text-white-300 text-xs mb-3">Legal Compliance: Authorities when required by law or to protect our rights.</li>
                    <li className="text-white-300 text-xs mb-3">Business Transfers: In case of a merger, acquisition, or sale of assets.</li>
                </ul>
                
                <h2 className="text-red-800 text-xl font-semibold">4. Data Security</h2>
                <p className="text-white-300 text-xs mb-3">We implement industry-standard security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute security.</p>
                
                <h2 className="text-red-800 text-xl font-semibold">5. Your Rights and Choices</h2>
                <p className="text-white-300 text-xs mb-3">Depending on your location, you may have rights regarding your personal data, including:</p>
                <ul className="list-disc pl-6">
                    <li className="text-white-300 text-xs mb-3">Accessing, updating, or deleting your personal information.</li>
                    <li className="text-white-300 text-xs mb-3">Opting out of marketing communications.</li>
                    <li className="text-white-300 text-xs mb-3">Restricting or objecting to certain data processing activities.</li>
                </ul>
                
                <h2 className="text-red-800 text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
                <p className="text-white-300 text-xs mb-3">We may use cookies to improve user experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
                
                <h2 className="text-red-800 text-xl font-semibold">7. Changes to This Privacy Policy</h2>
                <p className="text-white-300 text-xs mb-3">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the revised policy on our website.</p>
                
                <h2 className="text-red-800 text-xl font-semibold">8. Contact Us</h2>
                <p className="text-white-300 text-xs mb-3">If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:[wyhwtf@gmail.com]" className="text-blue-500 underline">wyhwtf@gmail.com</a></p>
            </div>
        </AppLayout>
    );
}