import React, { useState } from "react";
import Heading from "./Heading";
import support from "../assets/How-much-does-Customer-Support-cost-01-scaled.jpg";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Heading title="Get in Touch" subTitle="We'd love to hear from you" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Form Section */}
            <motion.div variants={itemVariants} className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send us a message
              </h2>

              {submitSuccess && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-start"
                >
                  <FiCheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-gray-400"
                    placeholder="you@example.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-gray-400"
                    placeholder="How can we help you?"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 transform hover:scale-[1.02] ${
                      isSubmitting
                        ? "bg-gradient-to-r from-blue-400 to-blue-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block relative bg-gradient-to-br from-blue-700 to-indigo-900"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
                src={support}
                alt="Customer support"
              />
              <div className="relative h-full flex flex-col justify-center p-12">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <p className="text-lg mb-8 max-w-md">
                    Whether you have questions about our services or just want
                    to say hello, our team is ready to assist you.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1 p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition duration-300">
                        <FiPhone className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium group-hover:text-blue-200 transition duration-300">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-sm opacity-80">Mon-Fri, 9am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1 p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition duration-300">
                        <FiMail className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium group-hover:text-blue-200 transition duration-300">
                          support@example.com
                        </p>
                        <p className="text-sm opacity-80">
                          We reply within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1 p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition duration-300">
                        <FiMapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium group-hover:text-blue-200 transition duration-300">
                          123 Business Ave
                        </p>
                        <p className="text-sm opacity-80">
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-blue-500">
                    <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {["Twitter", "Facebook", "LinkedIn", "Instagram"].map(
                        (social) => (
                          <motion.a
                            key={social}
                            href="#"
                            whileHover={{ y: -3 }}
                            className="p-2 bg-blue-600 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition duration-300"
                          >
                            <span className="sr-only">{social}</span>
                            <div className="h-5 w-5"></div>
                          </motion.a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
