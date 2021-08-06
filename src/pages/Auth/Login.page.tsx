import { FC, memo } from "react";
import { Link , useHistory } from "react-router-dom";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import ToggleSwitch from "../../ToggleSwicth";
import Button from "../../components/Button/Button";
import { login } from '../../api/auth';
import { authActions } from "../../actions/auth.actions";

interface Props {


}

const Login: FC<Props> = (props) => {


// const { setUser } = useContext(AppContext);

  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    isValid,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup
    .object()
    .required()
    .shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8, ({ min }) => `Atleast ${min} characters!`),
    }),

    onSubmit: (data) => {
     login(data).then((u)=>{
      authActions.login(u);
       history.push('/dashboard');
     });
    },
  });

  const history = useHistory();

  return (
    <div className=" md:w-96 ml-auto mr-auto max-h-screen max-w-3/4">
      <div className=" flex flex-col">
        <h1 className="text-40 leading-tight">
          Log In to <span className="text-primary">CORK</span>
        </h1>
        <p className="text-14 mt-2">
          New Here?{" "}
          <Link to="/signup">
            <span className=" text-primary border-b font-semibold border-primary">
              Create an account
            </span>
          </Link>
        </p>
        <div className="mt-10 ">
          <form onSubmit={handleSubmit}>
            <div className="pb-25">
              <div className="flex flex-row items-baseline pb-10">
                <HiUser className="text-indigo-500 h-5 w-5" />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  className="pl-8 focus:outline-none"
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...getFieldProps("email")}
                  placeholder="Username"
                />
              </div>
              <div className=" h-px bg-gray-100 mt-2"></div>

              {touched.email && (
                <div className="text-red-400 ">{errors.email}</div>
              )}
            </div>
            <div className="pb-25 mb-2">
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

              <div className=" h-px bg-gray-100 mt-2"></div>

              {touched.password && (
                <div className="text-red-400">{errors.password}</div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <ToggleSwitch />
              <div>
                  <Button theme="primary" btnType="solid" isValid={isValid} >Login</Button>
              </div>
            </div>
            {isSubmitting && (
              <FaSpinner className="mt-5 animate-spin "></FaSpinner>
            )}
            <div className="flex flex-col mt-14 items-center">
              <div className="mb-2">
                <input
                  type="checkbox"
                  name="loggedin"
                  className=" bg-gray-300 outline-none"
                />
                <label htmlFor="loggedin" className="text-gray-400 pl-10">
                  Keep me logged in
                </label>
              </div>
              <div className="mt-4">
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
          <p className="sm:absolute md:w-96 mt-10 sm:mt-0 bottom-0 ">
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
  );
};
Login.defaultProps = {};

export default memo(Login);
