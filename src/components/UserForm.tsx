import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormInputs {
  fullName: string;
  email: string;
  phone: string;
}

const UserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit = (data: FormInputs) => {
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/generator');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Start Creating Your CV
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register('fullName', { required: 'Full name is required' })}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 px-3 py-2"
            type="text"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 px-3 py-2"
            type="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            })}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 px-3 py-2"
            type="tel"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Continue to CV Generator
        </button>
      </form>
    </div>
  );
};

export default UserForm;