import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState
        }).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-8 text-center text-black">Contact Me</h2>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2">
          <p className="text-black mb-6">
            I'm actively seeking new challenges and collaborative opportunities. Got a project that needs a frontend touch, or want to discuss modern web development? Let's start a conversation.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a href="https://wa.me/+2348109319229" className="flex items-center gap-2 text-gray-700">
              <FaWhatsapp className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a href="tel:+2348103828239" className="flex items-center gap-2 text-gray-700">
              <FaPhone className="w-4 h-4" />
              <span className="text-sm">Call Me</span>
            </a>
            <a href="mailto:zubairsarki502@gmail.com" className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <div className="flex items-center gap-2 text-black">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Kogi, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <input 
                type="text" 
                name="name" 
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <input 
                type="email" 
                name="email" 
                value={formState.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <textarea 
                name="message" 
                value={formState.message}
                onChange={handleChange}
                placeholder="Your Message" 
                required 
                className="w-full p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white px-4 py-2 rounded 
                hover:bg-blue-700 transition-colors duration-300
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;