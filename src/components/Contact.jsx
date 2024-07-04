import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false); // Add state for loading

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading to true when form is submitted
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqqoja", userInfo);
      toast.success("Your message has been sent successfully! Thank you for reaching out.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false); // Set loading to false after the submission is complete
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-2 text-blue-700 dark:text-blue-500 hover:underline">
          CONTACT ME
        </h1>
        <span>Please fill out the below form to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl dark:bg-slate-400"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Full Name
                {errors.name && (
                  <span className="shadow mx-4 mb-4 text-red-600 text-xs">
                    Name cannot be empty
                  </span>
                )}
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Email
                {errors.email && (
                  <span className="shadow mx-12 mb-4 text-red-600 text-xs">
                    E-mail cannot be empty
                  </span>
                )}
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">
                Message
                {errors.message && (
                  <span className="shadow mx-6 text-red-600 text-xs">
                    Message cannot be empty
                  </span>
                )}
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Write your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-100"
            >
              Send
            </button>
          </form>
          {isLoading && <span>Thank you 🤝!Please wait...</span>} {/* Display loading message */}
        </div>
      </div>
    </>
  );
}

export default Contact;
