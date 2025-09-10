import { motion } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
import { PhoneIcon, MailIcon, MapPinIcon } from "../components/icons";
import LiveInfo from "../components/LiveInfo";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-gray-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Connect With Our Team
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
            We are here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Email Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <MailIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Email Us</h2>
            <p className="text-gray-400">
              <a href="mailto:support@nextstepnavigator.com" className="hover:underline transition-colors duration-200">
                support@nextstepnavigator.com
              </a>
            </p>
          </div>
          {/* Phone Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <PhoneIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Call Us</h2>
            <p className="text-gray-400">
              <a href="tel:+1234567890" className="hover:underline transition-colors duration-200">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          {/* Address Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <MapPinIcon />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Our Office</h2>
            <p className="text-gray-400">123 Career Street, Knowledge City</p>
          </div>
        </motion.section>

        {/* Live Info Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            Real-Time Information
          </h2>
          <LiveInfo />
        </section>

        {/* Google Map Section */}
        <section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
            Find Us on the Map
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257570403728!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77a1b5b9%3A0x4a9b0d0c9a0d6b7b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618354978321!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
