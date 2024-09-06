import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function EmergencyForm() {
  // Initialize the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    navigate("/");
    // You can handle the form data here, e.g., sending it to a server
  };

  return (
    <div className="my-16">
        <div className="">
            <h1 className='text-2xl text-red-600 font-serif font-bold  text-center'>Emergency Form</h1>
        </div>
        <div className="w-full max-w-md mx-auto px-10 py-8 my-8 bg-gray-100 rounded-xl shadow-lg border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div className="mb-6 grid gap-4">
                {/* Organ Type Field */}
                <div className='grid gap-1'>
                    <div className="flex">
                        <FaHeart className='mr-1' />
                        {/* style={{ color: 'blue', fontSize: '16px' }} */}
                        <label htmlFor="organType" className="block text-sm font-medium pb-1">Organ Type</label>
                    </div>
                    <input
                        id="organType"
                        {...register('organType', { required: 'Organ Type is required' })}
                        className="mt-1 block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm"
                        placeholder='Heart'
                        style={{ borderColor: 'gray', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = 'blue'}
                        onBlur={(e) => e.target.style.borderColor = 'gray'}
                    />
                    {errors.organType && <p className="text-red-600 text-xs mt-1">{errors.organType.message}</p>}
                </div>

                {/* Location Field */}
                <div className='grid gap-1'>
                    <div className="flex">
                        <FaLocationDot className='mr-1'/>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    </div>
                    <input
                        id="location"
                        {...register('location', { required: 'Location is required' })}
                        className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm px-4"
                        placeholder='Delhi'
                        style={{ borderColor: 'gray', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = 'blue'}
                        onBlur={(e) => e.target.style.borderColor = 'gray'}
                    />
                    {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location.message}</p>}
                </div>

                {/* Request Date Field */}
                <div className='grid gap-1'>
                    <div className="flex">
                        <MdDateRange className='mr-1'/>
                        <label htmlFor="requestDate" className="block text-sm font-medium text-gray-700">Request Date</label>
                    </div>
                    <input
                        id="requestDate"
                        type="date"
                        {...register('requestDate', { required: 'Request Date is required' })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        style={{ borderColor: 'gray', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = 'blue'}
                        onBlur={(e) => e.target.style.borderColor = 'gray'}
                    />
                    {errors.requestDate && <p className="text-red-600 text-xs mt-1">{errors.requestDate.message}</p>}
                </div>

                {/* Contact Field */}
                <div className='grid gap-1'>
                    <div className="flex">
                        <FaPhoneAlt className='mr-1'/>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                    </div>
                    <input
                        id="contact"
                        type="tel"
                        {...register('contact', { required: 'Contact is required', pattern: { value: /^[0-9]{10}$/, message: 'Contact must be a valid phone number' } })}
                        className="mt-1 block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm"
                        placeholder='9876543210'
                        style={{ borderColor: 'gray', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = 'blue'}
                        onBlur={(e) => e.target.style.borderColor = 'gray'}
                    />
                    {errors.contact && <p className="text-red-600 text-xs mt-1">{errors.contact.message}</p>}
                </div>
            </div>

            <div className="">
                <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                Submit
                </button>
            </div>
        </form>
        </div>
    </div>
  );
}