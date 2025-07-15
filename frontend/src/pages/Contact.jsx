function Contact() {
  return (
    <div className="mt-16">
      {/* Top Yellow Bar */}
      <div className="h-1 bg-yellow-500 w-full"></div>

      {/* Content Container */}
      <div className="px-6 py-8 max-w-3xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 text-justify">
          Have questions, feedback, or want to collaborate with Suvidha Foundation?
          Reach out to us through the following contact details, and our team will be happy to assist you.
        </p>

        <div className="space-y-4 text-base">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@suvidhafoundation.com" className="text-blue-600 hover:underline">
              info@suvidhafoundation.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919999999999" className="text-blue-600 hover:underline">
              +91-99999-99999
            </a>
          </p>
          <p>
            <strong>Address:</strong><br />
            Suvidha Foundation,<br />
            123 Charity Street,<br />
            Nagpur, Maharashtra, India - 440001
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-2">Connect with Us</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://www.linkedin.com/company/suvidha-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.suvidhafoundationedutech.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Official Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
