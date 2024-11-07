import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, Shield, Cpu, Globe } from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Consulting',
      description: 'Strategic AI integration solutions tailored to your business needs'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge AI technologies'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Training',
      description: 'Empower your workforce with AI knowledge and skills'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Security',
      description: 'Implement secure and ethical AI solutions'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI applications designed for your specific needs'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with innovative AI solutions'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Transforming Businesses Through AI Innovation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hurricane.AI is a leading AI solutions agency dedicated to helping businesses harness the power of artificial intelligence. We combine cutting-edge technology with practical business solutions to drive growth and innovation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-20"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="AI Technology"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg max-w-2xl">
                To democratize AI technology and empower businesses of all sizes to thrive in the digital age through innovative, ethical, and accessible AI solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-cyan-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <a
          href="https://www.hurricaneai.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;