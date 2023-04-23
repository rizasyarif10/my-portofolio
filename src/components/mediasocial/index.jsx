import React from "react";
import { Button } from "antd";
import { mediaSocial } from "../../constants";
export default function MediaSocial() {
  return (
    <div className="mb-5 flex justify-center items-center ">
      {mediaSocial.length > 0 &&
        mediaSocial.map((list) => (
          <a href={`${list.link}`} key={list.id}>
            <Button
              type=""
              className="mr-3 text-[20px] bg-transparent hover:bg-[#26abbd] text-white font-semibold hover:text-white border 
                    border-[#fff] hover:border-transparent cursor-pointer w-[43px] h-[40px] text-center flex justify-center items-center"
            >
              {list.icon}
            </Button>
          </a>
        ))}
    </div>
  );
}
