import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function OrganForm() {
    const navigate = useNavigate();
    const successOrder = () => toast.success("Order inserted successfully!");
    const errorOrder = () => toast.error("Order insertion failed!");
    // const errorOrder = () => toast("Order inserted successfully!");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.post("http://localhost:3000/api/orders/organ/insert", data)
            console.log(res.data);
            if (res.data) {
                // navigate("/");
                successOrder();  // Show the toast notification
                setTimeout(() => navigate("/"), 2000);  // Delay navigation to ensure the toast is visible
            } else {
                errorOrder(); 
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                // The request was made, and the server responded with a status code that falls out of the range of 2xx
                alert("Error: " + error.response.data.error);
            } else if (error.request) {
                // The request was made, but no response was received
                alert("No response from server.");
            } else {
                // Something happened in setting up the request that triggered an Error
                alert("Error in setting up request: " + error.message);
            }
        }
    }

    return (
        <div className="py-16"
            style={{ backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,249,255,1) 11.1%, rgba(255,241,255,1) 90% )" }}
        >
            <ToastContainer position="top-center" autoClose={5000} />

            <div className='rounded-2xl shadow-xl flex justify-center flex-col w-1/2 mx-auto py-10 bg-white'>

                <h1 className='text-center font-bold text-2xl text-rose-500 mb-9'>Organ Request Form</h1>

                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-3 mx-16'>

                        <div className="">
                            <label className='name font-semibold'>Name</label> <br />
                            <input
                                type="name" placeholder='Enter your name'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='age font-semibold'>Age</label> <br />
                            <input
                                type="number" placeholder='Enter your Age'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("age", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='bloodGroup font-semibold pr-20'>Blood Group</label>
                            <select id="bloodType"
                                {...register("bloodType", { required: true })}
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                            >
                                <option value="">Select...</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='bloodGroup font-semibold pr-20'>Organ Type</label>
                            <select id="organType"
                                {...register("organType", { required: true })}
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                            >
                                <option value="">Select...</option>
                                <option value="heart">Heart</option>
                                <option value="kidney">Kidney</option>
                                <option value="liver">Liver</option>
                                <option value="lungs">Lungs</option>
                                <option value="pancreas">Pancreas</option>
                                <option value="intestines">Intestines</option>
                                <option value="cornea">Cornea</option>
                                <option value="skin">Skin</option>
                                <option value="bone">Bone</option>
                            </select>
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='name font-semibold'>Request Date</label> <br />
                            <input
                                type="date" placeholder=''
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("requestDate", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='contact font-semibold'>Contact</label> <br />
                            <input
                                type="tel" placeholder='Enter your contact'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("contact", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='location font-semibold'>Location</label> <br />
                            <input
                                type="" placeholder='Enter delivery location'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("location", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="pt-4" type="Submit">
                            <button className="w-full py-2 px-4 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-700">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrganForm
