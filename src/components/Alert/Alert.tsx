import React from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  theme: "primary" | "warning" | "success" | "info" | "error";
  children: React.ReactElement;
}

const Alert: React.FC<Props> = ({ theme, children }) => {
  let themeClass = "";
  if (theme === "primary") {
    themeClass = " bg-blue-200 text-primary hover:text-blue-500";
  } else if (theme === "warning") {
    themeClass = " bg-red-100 text-red-300 hover:text-red-400";
  } else if (theme === "success") {
    themeClass = " bg-green-100 text-green-300 hover:text-green-400";
  } else if (theme === "info") {
    themeClass = " bg-blue-100 text-blue-300 hover:text-blue-400";
  } else if (theme === "error") {
    themeClass = " bg-gray-200 text-gray-400 hover:text-grau-600";
  }
  return (
    <div className="">
      <div
        className={
          " h-10 w-full p-8 rounded-sm flex justify-between" + themeClass
        }
      >
        <div className="flex">
          <p>{theme}!  </p>
          {children}
        </div>
        <button>
          {" "}
          <IoMdClose />{" "}
        </button>
      </div>
    </div>
  );
};
Alert.defaultProps = {
  theme: "primary",

  children: <p>Lorem ipsum dolor sit, amet consectetur adipisicng elit. </p>,
};

export default Alert;
