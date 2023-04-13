import React from "react";
import { styles } from "../../assets/styles/styles";
import { Avatar, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { profile } from "../../assets/image";
import MediaSocial from "../mediasocial";

export default function ContentHeader({
  title,
  subtitle,
  paragraph,
  type,
  titleButton1,
  titlebutton2,
  handlebutton1,
  handlebutton2,
}) {
  return (
    <div className={`relative w-full h-screen mx-auto`}>
      <div
        className={`flex justify-center items-center h-screen ${
          type === "contact" || type === "about" ? "backdrop-brightness-50" : ""
        }`}
      >
        <div className="m-auto text-center">
          {type === "home" && (
            <Avatar
              className="custom-position"
              shape="circle"
              size={{ xs: 100, sm: 100, md: 100, lg: 155, xl: 155, xxl: 155 }}
              src={`${profile}`}
              alt="avatar"
            />
          )}

          <h2 className={`${styles.heroHeadText} text-white`}>
            <span className="text-white">{title}</span>
          </h2>
          <h3 className={`${styles.heroSubText} mt-2 text-white-100`}>
            {subtitle}
          </h3>
          <p className={`${styles.paragrapghText} mt-1 text-white-100`}>
            {paragraph}
          </p>
          {type === "home" ? (
            <div className="mt-5">
              <MediaSocial />
              <div className="flex justify-between items-center mt-5 flex-col">
                <div className="mx-auto text-center">
                  {titleButton1 && (
                    <Button
                      type=""
                      shape="round"
                      className="mr-3 px-6 bg-transparent hover:bg-[#26abbd] text-white font-semibold hover:text-white border 
                    border-[#fff] hover:border-transparent inline-flex items-center "
                      onClick={handlebutton1}
                    >
                      {titleButton1}
                    </Button>
                  )}
                  {titlebutton2 && (
                    <Button
                      type=""
                      shape="round"
                      icon={<DownloadOutlined />}
                      className=" bg-gray-300 hover:bg-gray-400 text-gray font-semibold
                    inline-flex items-center px-4"
                      onClick={handlebutton2}
                    >
                      {titlebutton2}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
