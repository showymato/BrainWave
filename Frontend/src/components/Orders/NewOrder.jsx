import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function NewOrder() {
    const navigate = useNavigate();
    const successOrder = () => toast.success("Order sent out successfully!");
    const errorOrder = () => toast.error("Failed to send Order!");
    // const errorOrder = () => toast("Order inserted successfully!");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.post("http://localhost:3000/api/orders/newOrder", data)
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

                <h1 className='text-center font-bold text-2xl text-rose-500 mb-9'>New Order Form</h1>

                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-3 mx-16'>

                        <div className="">
                            <label className='orderId font-semibold'>Order Id</label> <br />
                            <input
                                type="name" placeholder='Enter Order Id'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("orderId", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='OrderType font-semibold pr-20'>Order Type</label>
                            <select id="OrderType"
                                {...register("OrderType", { required: true })}
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                            >
                                <option value="">Select...</option>
                                <option value="OrganOrder">Organ Order</option>
                                <option value="MedKitOrder">MedKit Order</option>
                                <option value="BloodOrder">BloodOrder</option>
                                <option value="MedicineOrder">MedicineOrder</option>
                            </select>
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='latitude font-semibold'>Latitude</label> <br />
                            <input
                                type="number" placeholder='Enter latitude'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("latitude", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='longitude font-semibold'>Longitude</label> <br />
                            <input
                                type="number" placeholder='Enter longitude'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("longitude", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="">
                            <label className='altitude font-semibold'>Altitude</label> <br />
                            <input
                                type="number" placeholder='Enter altitude'
                                className='outline-none py-1 px-2 w-full rounded border focus:border-2 focus:border-blue-600 my-2'
                                {...register("altitude", { required: true })}
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

export default NewOrder