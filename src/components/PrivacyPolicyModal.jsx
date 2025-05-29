export default function PrivacyPolicyModal() {
    return (
      <div className="prose prose-lg text-gray-700">
        <h3 className="font-serif text-xl text-gray-900">Information Collection</h3>
        <p>
          This is a purely informational website. <strong>We do not collect any personal data</strong> through this website.
        </p>
        
        <h3 className="font-serif text-xl text-gray-900 mt-6">Third-Party Services</h3>
        <p>
          Our web hosting provider may collect standard server logs (IP addresses, browser types) for security purposes. These logs are automatically deleted after 30 days.
        </p>
        
        <h3 className="font-serif text-xl text-gray-900 mt-6">Contact</h3>
        <p>
          For questions: <a href="mailto:info@acuflushing.com" className="text-cyan-600">info@acuflushing.com</a>
        </p>
      </div>
    );
  }