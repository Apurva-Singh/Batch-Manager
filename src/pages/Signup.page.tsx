import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiAtSymbol, HiLockClosed, HiUser } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { BsToggleOff } from "react-icons/bs";

import * as yup from "yup";
import { useFormik } from "formik";
import ToggleSwitch from "../ToggleSwicth";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();

  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8, ({ min }) => `Atleats ${min} characters required`),
    }),

    onSubmit: (data) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("submitted successfully");
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className=" md:w-96 ml-auto mr-auto max-h-screen max-w-3/4 ">
      <div className=" flex flex-col">
        <h1 className=" text-40 leading-tight">Get started with a free account</h1>
        <p className="text-14 mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <span className=" text-primary border-b font-semibold border-primary">
              Log in
            </span>
          </Link>
        </p>
        <div className="mt-10 ">
          <form onSubmit={handleSubmit}>

            <div className="pb-20">
              <div className="flex flex-row items-baseline pb-10">
                <HiUser className="text-indigo-500 h-5 w-5" />
                <label htmlFor="username" className="sr-only">
                 USERNAME
                </label>
                <input
                  className="pl-8 focus:outline-none"
                  type="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className=" h-px bg-gray-100 mt-1"></div>

             
            </div>


            <div className="pb-20">
              <div className="flex flex-row items-baseline pb-10">
                <HiAtSymbol className="text-indigo-500 h-6 w-6" />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  className="pl-8 focus:outline-none"
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...getFieldProps("email")}
                  placeholder="Email"
                />
              </div>
              <div className=" h-px bg-gray-100 mt-1"></div>

              {touched.email && (
                <div className="text-red-400 ">{errors.email}</div>
              )}
            </div>
            <div className="pb-20 mb-2">
              <div className="flex flex-row items-baseline pb-10">
                <HiLockClosed className="text-indigo-500 h-5 w-5 " />
                <label htmlFor="password" className="sr-only">
                  password{" "}
                </label>
                <input
                  className=" pl-8 focus:outline-none mt-4"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...getFieldProps("password")}
                  placeholder="Password"
                />
              </div>

              <div className=" h-px bg-gray-100 mt-1"></div>

              {touched.password && (
                <div className="text-red-400">{errors.password}</div>
              )}
            </div>
            <div className="mb-6">
              <input
                type="checkbox"
                required 
                name="terms"
                value="terms"
                className=" bg-gray-300 outline-none"
              />
              <label htmlFor="loggedin" className="text-gray-400 pl-10">
                I agree to the{" "}
                <span className="text-primary">Terms and Conditions</span>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
               <ToggleSwitch />
              <div>
                <button
                  type="submit"
                  className="disabled:opacity-50
                  mt-4
                  sm:mt-0
            shadow-xl rounded-md
            text-14
            text-white px-20 py-8 cursor-pointer hover:shadow-none bg-primary inline-block text-center  "
                  disabled={!isValid}
                  
                >
                  Get Started!
                </button>
              </div>
            </div>
            {isSubmitting && (
              <FaSpinner className="mt-5 animate-spin "></FaSpinner>
            )}
          </form>
          <div className="">
          <p className="sm:absolute md:w-96 mt-8 sm:mt-0 bottom-0 ">
            2020 All Rights Reserved.{" "}
            <span className="text-primary">
              <Link to="/dashboard">CORK</Link>
            </span>{" "}
            is a product of Designreset.{" "}
            <span className="text-primary">
              <Link to="/dashboard">
                Cookie Preferences, Privacy, and Terms.
              </Link>
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Signup.defaultProps = {};

export default memo(Signup);
