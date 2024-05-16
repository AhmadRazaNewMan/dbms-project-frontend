import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <form>
          <label htmlFor="fullname" className="block mb-2">Full Name</label>
          <input type="text" id='fullname' placeholder='Name' className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
          <label htmlFor="subject" className="block mb-2">Subject</label>
          <input type="text" id='subject' placeholder='Subject' className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea name="message" id="message" rows={2} cols={4} placeholder='Message' className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
