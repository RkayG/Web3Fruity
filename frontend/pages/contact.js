
import { useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        //const apiKey = '205beb6c-d872-4b87-876f-5ab9dc3e6429'; // Replace with your actual Web3Forms API key
        alert(apiKey);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: apiKey,
                    ...formData
                })
            });

            const result = await response.json();
            if (response.status === 200) {
                setSubmitMessage('Form submitted successfully!');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    website: '',
                    message: ''
                });
            } else {
                setSubmitMessage('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


  return (
    <div className="w-full max-w-[1580px] m-auto">
      <section className="w-full bg-gradient-to-tr from-blue-300 to-orange-200 py-12 md:py-24 lg:py-32 ">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-blue-900 sm:text-3xl md:text-4xl px-2">Get in Touch</h1>
              <p className="text-gray-900 md:text-xl px-2">
                Would you like to reach out to us? Fill out the form and we will get back to you.
                
              </p>
             {/*  <p className="text-gray-500 md:text-xl  px-2">
                Email: support@web3fruity.com
              </p> */}
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg ">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        placeholder='Enter the subject'
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website  (Optional)</label>
                    <input
                        type="text"
                        placeholder='Enter your website'
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        placeholder='Enter your message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        required
                />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
</form>
            {submitMessage && (
                  <p className={`mt-4 text-center font-semibold ${submitMessage.includes('error') ? 'text-red-700' : 'text-green-700'}`}>
                      {submitMessage}
                  </p>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;