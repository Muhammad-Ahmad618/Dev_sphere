import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export default function CoreTechTab() {
  const [tab, setTab] = useState(1);

  const toggleTab = (id) => {
    setTab(id);
  };

  return (
    <>
      <div className="py-10 text-blue-500">
        <ul className="flex text-[0.7rem] border border-white max-w-[42rem] rounded-full m-auto md:m-0
         sm:text-sm md:text-base">
          <li
            className={`py-3 px-2 cursor-pointer text-center rounded-s-full flex-1 justify-center sm:py-3 sm:px-7  md:py-5 ${
              tab === 1
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 text-white"
            }`}
            onClick={() => toggleTab(1)}
          >
            FrontEnd
          </li>
          <li
            className={`py-3 px-2 cursor-pointer text-center flex-1 sm:py-3 sm:px-7  md:py-5 md:px-10 ${
              tab === 2
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 text-white"
            }`}
            onClick={() => toggleTab(2)}
          >
            BackEnd
          </li>

          <li
            className={`py-3 px-2 cursor-pointer text-center flex-1 sm:py-3 sm:px-7  md:py-5 md:px-10 ${
              tab === 3
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 text-white"
            } `}
            onClick={() => toggleTab(3)}
          >
            Mobile
          </li>
          <li
            className={`py-3 px-2 cursor-pointer text-center flex-1 sm:py-3 sm:px-7 md:py-5 md:px-10 ${
              tab === 4
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 text-white"
            }`}
            onClick={() => toggleTab(4)}
          >
            DataBase
          </li>
          <li
            className={`py-3 px-2 cursor-pointer text-center flex-1 rounded-e-full sm:py-3 sm:px-7 md:py-5 ${
              tab === 5
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 text-white"
            }`}
            onClick={() => toggleTab(5)}
          >
            FullStack
          </li>
        </ul>
      </div>

      <div
        className={
          tab === 1
            ? "flex gap-x-2 justify-evenly sm:justify-start sm:space-x-10 sm:px-5 sm:py-5"
            : "hidden"
        }
      >
        <div className="bg-white inline-block rounded-[20px] p-2">
          <FaHtml5 className="text-orange-500 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <FaCss3Alt className="text-blue-600 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <TbBrandJavascript className="text-yellow-500 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <RiReactjsLine className="text-blue-500 text-[3rem] sm:text-[5rem]" />
        </div>
      </div>

      <div
        className={
          tab === 2
            ? "flex gap-x-2 justify-evenly  sm:justify-start sm:space-x-10 sm:px-5 sm:py-5"
            : "hidden"
        }
      >
        <div className="bg-white inline-block rounded-[20px] p-2">
          <DiNodejs className="text-green-600 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <SiExpress className="text-[3rem] sm:text-[5rem]" />
        </div>
      </div>

      <div
        className={
          tab === 3
            ? "flex gap-x-2 justify-evenly  sm:justify-start sm:space-x-10 sm:px-5 sm:py-5"
            : "hidden"
        }
      >
        <div className="bg-white inline-block rounded-[20px] p-2">
          <RiReactjsLine className="text-blue-500 text-[3rem] sm:text-[5rem]" />
        </div>
        <div className="bg-white inline-block rounded-[20px] p-2">
          <RiFlutterFill className="text-blue-500 text-[3rem] sm:text-[5rem]" />
        </div>
      </div>

      <div
        className={
          tab === 4
            ? "flex gap-x-2 justify-evenly  sm:justify-start sm:space-x-10 sm:px-5 sm:py-5"
            : "hidden"
        }
      >
        <div className="bg-white inline-block rounded-[20px] p-2">
          <SiMongodb className="text-green-700 text-[3rem] sm:text-[5rem]" />
        </div>
        <div className="bg-white inline-block rounded-[20px] p-2">
          <SiMysql className="text-blue-400 text-[3rem] sm:text-[5rem]" />
        </div>
      </div>

      <div
        className={
          tab === 5
            ? "flex gap-x-2 justify-evenly  sm:justify-start  sm:space-x-10 sm:px-5 sm:py-5"
            : "hidden"
        }
      >
        <div className="bg-white inline-block rounded-[20px] p-2">
          <RiReactjsLine className="text-blue-500 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <DiNodejs className="text-green-600 text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <SiExpress className="text-[3rem] sm:text-[5rem]" />
        </div>

        <div className="bg-white inline-block rounded-[20px] p-2">
          <SiMongodb className="text-green-700 text-[3rem] sm:text-[5rem]" />
        </div>
      </div>
    </>
  );
}
