import React from "react";

export default function Header() {
  let usertime = new Date();
  const userLastUpdate =
    usertime.toDateString() +
    " , " +
    usertime.getHours() +
    ":" +
    usertime.getMinutes();
  return (
    <div className="flex flex-row p-5">
      <div className="w-[218px] h-[72px] bg-back shadow-lg rounded-l-2xl  rounded-br-[90px] rounded-tr-md">
        <div className="flex flex-row justify-start pl-4 pt-1 items-center space-x-4">
          <img src="/profile.png" alt="" />
          <div className="flex flex-col justify-center items-start">
            <p className="font-black">Tomy M.J</p>
            <p className="text-lightgray font-medium">Lorem ipsom</p>
          </div>
        </div>
      </div>
      <div className="w-[961px] h-[72px] shadow-lg items-center bg-white rounded-r-2xl pl-10 pr-4 rounded-tl-[90px] rounded-bl-md flex flex-row justify-end">
        <div className="  flex flex-row space-x-5 items-center">
          <button className="relative h-fit">
            {/* <img src="/Vector18.png" className="absolute -top-1 -right-1" alt="" /> */}
            <img src="/Vector12.png" alt="" />
          </button>

          <div className="bg-back shadow-inner w-[190px] h-16 rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm font-medium ">
              Latest update: <p className="font-bold">{userLastUpdate}</p>{" "}
            </p>
            <div className="flex flex-row h-4 space-x-1 justify-center items-center">
              <p className="text-sm font-medium text-textgray">Version :</p>
              <p className="bg-red text-white rounded-md px-1 text-xs">3.1.4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
