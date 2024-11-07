import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

interface FeedbackForm {
  name: string;
  email: string;
  rating: string;
  feedback: string;
}

const Feedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FeedbackForm>();

  const onSubmit = async (data: FeedbackForm) => {
    setIsSubmitting(true);
    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScgusgzz-jlJliVko2O0f_g2KmvDOlIsaGonERjmuALyTQnIA/formResponse';
      
      // Create form data
      const formData = new FormData();
      formData.append('entry.2005620554', data.name);
      formData.append('entry.1045781291', data.email);
      formData.append('entry.1065046570', data.rating);
      formData.append('entry.839337160', data.feedback);

      // Submit to Google Forms
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          We Value Your Feedback
        </h1>
        <p className="text-lg text-gray-600">
          Help us improve our services by sharing your experience
        </p>
      </motion.div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        >
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h2>
          <p className="text-green-600 mb-4">Your feedback has been submitted successfully.</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit Another Response
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full rounded-lg border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full rounded-lg border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <select
              {...register('rating', { required: 'Please select a rating' })}
              className="w-full rounded-lg border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
            >
              <option value="">Select a rating</option>
              <option value="5">Excellent (5)</option>
              <option value="4">Very Good (4)</option>
              <option value="3">Good (3)</option>
              <option value="2">Fair (2)</option>
              <option value="1">Poor (1)</option>
            </select>
            {errors.rating && (
              <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              {...register('feedback', {
                required: 'Feedback is required',
                minLength: {
                  value: 10,
                  message: 'Feedback must be at least 10 characters long'
                }
              })}
              rows={4}
              className="w-full rounded-lg border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Please share your thoughts..."
            />
            {errors.feedback && (
              <p className="mt-1 text-sm text-red-600">{errors.feedback.message}</p>
            )}
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700">
                There was an error submitting your feedback. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-colors flex items-center justify-center space-x-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? 'Submitting...' : 'Submit Feedback'}</span>
          </button>
        </motion.form>
      )}
    </div>
  );
};

export default Feedback;