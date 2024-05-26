import axios from 'axios';
const BASE_URL='http://localhost:8080'

const sendEmail = async (emailData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/email/send`,
        emailData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log('Email sent successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending email:', error);
      return { error: 'Failed to send email' };
    }
  };

export { sendEmail };