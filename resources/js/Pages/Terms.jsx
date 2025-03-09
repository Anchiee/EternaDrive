import AppLayout from "@/Layouts/AppLayout";

export default function Terms() {
    return (
        <AppLayout title="Terms of Service">
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-red tracking-widest">Terms of Service for EternaDrive</h1>
                <p className="text-white-300 text-xs mb-3">Last Updated: 03.05.2025</p>
                
                <h2 className=" text-red text-xl font-semibold">1. Acceptance of Terms</h2>
                <p className="text-white-300 text-xs mb-3">By accessing or using EternaDrive, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
                
                <h2 className=" text-red text-xl font-semibold">2. User Accounts</h2>
                <h3 className=" text-red text-medium mt-4 font-semibold">2.1 Registration</h3>
                <p className="text-white-300 text-xs mb-3">To use certain features, you may need to create an account. You agree to provide accurate and complete information.</p>
                
                <h3 className=" text-red text-xl font-semibold">2.2 Security</h3>
                <p className="text-white-300 text-xs mb-3">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                
                <h3 className=" text-red text-xl font-semibold">2.3 Termination</h3>
                <p className="text-white-300 text-xs mb-3">We reserve the right to suspend or terminate your account if you violate these Terms.</p>
                
                <h2 className=" text-red text-xl font-semibold">3. Use of Services</h2>
                <h3 className=" text-red text-medium mt-4 font-semibold">3.1 Acceptable Use</h3>
                <ul className="list-disc pl-6">
                    <li className="text-white-300 text-xs mb-3">Use EternaDrive for any illegal or unauthorized purpose.</li>
                    <li className="text-white-300 text-xs mb-3">Upload or distribute harmful, offensive, or illegal content.</li>
                    <li className="text-white-300 text-xs mb-3">Attempt to hack, exploit, or disrupt the platform.</li>
                </ul>
                
                <h3 className=" text-red text-xl font-semibold">3.2 Content Ownership</h3>
                <p className="text-white-300 text-xs mb-3">You retain ownership of files you upload. However, by storing content on EternaDrive, you grant us permission to store and process it as needed to provide our services.</p>
                
                <h2 className=" text-red text-xl font-semibold">4. Privacy</h2>
                <p className="text-white-300 text-xs mb-3">Your privacy is important to us. Our <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a> explains how we collect and use your data.</p>
                
                <h2 className=" text-red text-xl font-semibold">5. Service Availability</h2>
                <p className="text-white-300 text-xs mb-3">We strive to provide continuous access but do not guarantee uptime. We may modify, suspend, or discontinue services at any time.</p>
                
                <h2 className=" text-red text-xl font-semibold">6. Limitation of Liability</h2>
                <p className="text-white-300 text-xs mb-3">EternaDrive is provided "as is" without warranties. We are not liable for any damages, loss of data, or service interruptions.</p>
                
                <h2 className=" text-red text-xl font-semibold">7. Changes to These Terms</h2>
                <p className="text-white-300 text-xs mb-3">We may update these Terms from time to time. Continued use of EternaDrive means you accept the changes.</p>
                
                <h2 className=" text-red text-xl font-semibold">8. Contact Us</h2>
                <p className="text-white-300 text-xs mb-3">If you have any questions about these Terms, please contact us at: <a href="mailto:[wyhwtf@gmail.com]" className="text-blue-500 underline">wyhwtf@gmail.com</a></p>
            </div>
        </AppLayout>
    );
}