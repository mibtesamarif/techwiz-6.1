import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, MapPinIcon} from "../components/icons";
import Breadcrumbs from "../components/Breadcrumbs";
import LiveInfo from "../components/LiveInfo";

const ContactUs = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-teal-900 via-teal-950 to-black text-amber-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-amber-400/5 blur-3xl"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-pink-400/5 blur-3xl"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-teal-400/3 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex justify-center pt-4">
            <Breadcrumbs />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-transparent md:text-6xl bg-gradient-to-r from-yellow-100 via-amber-200 text-amber-50 bg-clip-text">
              Connect With Our Team
            </h1>
            <p className="max-w-2xl mx-auto mt-3 text-lg leading-relaxed text-amber-50">
              We are here to help. Reach out to us through any of the channels below and experience our commitment to excellence.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div 
              className="flex flex-col items-center p-8 text-center transition-all duration-500 border shadow-xl group bg-gradient-to-br from-yellow-50/10 to-amber-50/5 backdrop-blur-sm rounded-3xl border-amber-200/20 hover:shadow-2xl hover:border-amber-300/40"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-4 mb-4 transition-colors duration-300 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20">
                <MailIcon />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-yellow-100 transition-colors duration-300 group-hover:text-amber-200">Email Us</h2>
              <p className="transition-colors duration-300 text-yellow-200/80 group-hover:text-yellow-100">
                <a href="mailto:support@nextstepnavigator.com" className="font-medium transition-colors duration-200 hover:text-amber-300">
                  support@nextstepnavigator.com
                </a>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center p-8 text-center transition-all duration-500 border shadow-xl group bg-gradient-to-br from-yellow-50/10 to-amber-50/5 backdrop-blur-sm rounded-3xl border-amber-200/20 hover:shadow-2xl hover:border-amber-300/40"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-4 mb-4 transition-colors duration-300 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20">
                <PhoneIcon />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-yellow-100 transition-colors duration-300 group-hover:text-amber-200">Call Us</h2>
              <p className="transition-colors duration-300 text-yellow-200/80 group-hover:text-yellow-100">
                <a href="tel:+1234567890" className="font-medium transition-colors duration-200 hover:text-amber-300">
                  +1 (234) 567-890
                </a>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center p-8 text-center transition-all duration-500 border shadow-xl group bg-gradient-to-br from-yellow-50/10 to-amber-50/5 backdrop-blur-sm rounded-3xl border-amber-200/20 hover:shadow-2xl hover:border-pink-300/40 md:col-span-2 lg:col-span-1"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(244, 143, 177, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-4 mb-4 transition-colors duration-300 rounded-full bg-pink-400/10 group-hover:bg-pink-400/20">
                <MapPinIcon />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-yellow-100 transition-colors duration-300 group-hover:text-pink-200">Our Office</h2>
              <p className="font-medium transition-colors duration-300 text-yellow-200/80 group-hover:text-yellow-100">
                123 Career Street, Knowledge City
              </p>
            </motion.div>
          </motion.section>

          <section>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-yellow-100 to-amber-200 bg-clip-text"
            >
              Real-Time Information
            </motion.h2>
            <LiveInfo />
          </section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="p-6 border shadow-xl bg-gradient-to-br from-yellow-50/10 to-amber-50/5 backdrop-blur-sm rounded-3xl md:p-10 border-amber-200/20"
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-yellow-100 to-amber-200 bg-clip-text">
              Find Us on the Map
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full overflow-hidden border shadow-2xl rounded-2xl border-teal-700/30"
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257570403728!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77a1b5b9%3A0x4a9b0d0c9a0d6b7b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618354978321!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(20%) sepia(10%)" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;