import React, { useState } from "react";
import { sendEmail } from "../../Services/EmailService/email";
import { ToastContainer, toast } from "react-toastify";
import { LinearProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false); // Unused state variable [isLoading, setloading
  const [formData, setFormData] = useState({
    Subject: "",
    Body: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await sendEmail(formData);
      if (response.message=='OK') {
        toast("Email sent successfully!");
      }
    } catch (error) {
      toast("Failed to send email! Try again later.");
    } finally {
      setLoading(false);
      setFormData({
        Subject: "",
        Body: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <form onSubmit={handleSubmit}>
        <ToastContainer />
          <label htmlFor="Subject" className="block mb-2">
            Subject
          </label>
          <input
            type="text"
            id="Subject"
            placeholder="Subject"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.Subject}
            onChange={handleChange}
          />
          <label htmlFor="Body" className="block mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="Body"
            rows={2}
            cols={4}
            placeholder="Message"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.Body}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="mb-2 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            {loading ? "please wait..." : "Send"}
          </button>
          {loading && <LinearProgress />}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
