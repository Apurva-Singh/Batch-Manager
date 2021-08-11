import React, { memo, useState } from "react";
import Button from "../components/Button/Button";
import { useAppSelector } from "../store";
import { useHistory } from "react-router-dom";
import { meSelector } from "../selectors/auth.selectors";
import { modify } from "../api/modifyProfile";

interface Props {}

const ProfileCard: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);

  const fname = `${user?.first_name}`;
  // const lname= ` ${user?.last_name}`;

  const initialValues= {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    gender: "",
    education: "",
    hometown:"",
  }

  const [input, setInput] = useState(initialValues);

  const handleChange = (e: any) => {
    // setUser(e.target.value);
    setInput(e.target.value);
  };


  const onSubmit= (data: any) => {
      data.preventDefault();
      console.log(data);
      setInput(data.target.value);
      console.log(input);
  
       modify(data).then((u)=>{
      //   authActions.login(u);
      console.log("user", u);
         history.push('/dashboard');
       });
    };


  const history = useHistory();

  return (
    <form  onSubmit={onSubmit}>
      <div className="absolute md:left-30% mx-10 md:ml-0 justify-center max-w-sm md:max-w-2xl mt-8 ">
        <div className=" rounded-md bg-white p-20 mb-3 shadow-md ">
          <h1 className=" text-xl">General Information</h1>

          <div className="flex flex-col items-center md:flex-row space-x-4 pt-20 ">
            <div className="">
              <img
                src={user!.profile_pic_url}
                alt=""
                className=" w-28 h-28 rounded-full"
              />
              <p className="text-primary">Upload Picture</p>
            </div>

            <div className="flex-col space-y-6">
              <div className="flex-row space-x-2">
                <label htmlFor="fname" className="text-14 text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
               
                  id="fname"
                  placeholder="First Name"
                  className="w-full border-2 border-gray-200 rounded-md focus:outline-none p-2"
                  defaultValue={fname}
                  onChange={handleChange}
                />
               
                <label htmlFor="gender" className="text-14 text-gray-500">
                  Gender{" "}
                </label>
                <input
                  type="text"
                  id="gender"
                  placeholder="Male"
                  className="w-full border-2 border-gray-200 rounded-md focus:outline-none p-2"
                  defaultValue={user!.gender}
                  onChange={handleChange}
                />
                <div className="mt-4">
                  <label htmlFor="dob" className="text-14 text-gray-500">
                    DOB:{" "}
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="px-8 border-2 rounded-md border-gray-200"
                    defaultValue={user?.birth_date}
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className=" rounded-md bg-white p-20 shadow-md ">
          <h1 className=" text-xl">Contact Information</h1>

          <div className="flex flex-col items-center md:flex-row space-x-4 pt-20 ">
            <div className="flex-col space-y-6">
              <div className="flex-row space-x-2">
                <label htmlFor="hometown" className="text-14 text-gray-500">
                  HomeTown
                </label>
                <input
                  type="text"
                  id="hometown"
                  placeholder="Hometown"
                  className="w-full border-2 border-gray-200 rounded-md focus:outline-none p-2"
                  defaultValue={user!.hometown}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="text-14 text-gray-500">
                  Contact Number{" "}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone no"
                  className="w-full border-2 border-gray-200 rounded-md focus:outline-none p-2"
                  defaultValue={user!.phone_number}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="text-14 text-gray-500">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border-2 border-gray-200 rounded-md focus:outline-none p-2"
                  defaultValue={user!.email}
                  onChange={handleChange}
                />
            
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
  

      <div className="bg-secondary flex w-full justify-between h-14  fixed bottom-0 flex-row ">
        <div className="md:absolute md:left-96 mt-2"></div>
        <div className="md:absolute md:right-226px mt-2">
          <Button theme="primary" btnType="solid" type="submit">
            Save All
          </Button>
        </div>
      </div>
    </form>
  );
};
ProfileCard.defaultProps = {};

export default memo(ProfileCard);
