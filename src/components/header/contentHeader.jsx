import React from "react";
import { styles } from "../../assets/styles/styles";

export default function ContentHeader({ title, subtitle, paragraph, type }) {
  return (
    <div className={`relative w-full h-screen mx-auto`}>
      <div className={`flex justify-center items-center h-screen`}>
        <div className="m-auto text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-white">{title}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {subtitle}
          </p>
          <p className={`${styles.paragrapghText} mt-1 text-white-100`}>
            {paragraph}
          </p>
          {type === "home" ? (
            <div className="flex justify-between items-center mt-5">
              <div className="m-auto text-center">
                <button className="mr-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Contact Me
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download CV</span>
                </button>
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
