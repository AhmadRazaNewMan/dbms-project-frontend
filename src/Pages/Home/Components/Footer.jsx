import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-4 md:mx-20 bg-yellow-500 px-10 py-8 text-white rounded-lg shadow-xl">
      {/* Campus Map */}
      <div className="col-span-1 md:col-span-4 lg:col-span-1 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-semibold mb-4">CAMPUS MAP</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4659850743383!2d71.48285639620896!3d34.0031605682994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9172ebe9aaad1%3A0x74de395b0ec3efb!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Peshawar!5e0!3m2!1sen!2s!4v1715674172040!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Department Address */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 border-b-2 border-white pb-4">
        <h1 className="text-xl font-semibold mb-4">GET IN TOUCH WITH US</h1>
        <p className="mb-2">Department of CS & IT</p>
        <p>New Academic Block,</p>
        <p>UET Peshawar, Peshawar University Campus.</p>
        <p>Tel: XXX-XXX-XXXX</p>
        <p>Fax: XXX-XXX-XXXX</p>
      </div>

      {/* Pages */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <h1 className="text-xl font-semibold mb-4">PAGES</h1>
        <ul className="mt-2">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">Noticeboard</a></li>
          <li><a href="#" className="block">FAQ's</a></li>
          <li><a href="#" className="block">Downloads</a></li>
          <li><a href="#" className="block">Gallery</a></li>
          <li><a href="#" className="block">Society</a></li>
          <li><a href="#" className="block">Contact</a></li>
        </ul>
      </div>

      {/* Contacts */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <h1 className="text-xl font-semibold mb-4">CONTACTS</h1>
        <p className="mb-2">For Undergraduate Programs (CS/DS)</p>
        <p><a href="mailto:example@example.com">Email</a></p>
        <p>For Graduate (MS/PhD) Programs:</p>
      </div>
    </div>
  );
};

export default Footer;
