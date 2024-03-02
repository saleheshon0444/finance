import { FaUserFriends } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState } from "react";

export default function Menu() {

    const [activeButton, setActiveButton] = useState("Comments");

    return (
        <div className="bg-softGray m-5 w-[220px] h-[778px] rounded-3xl flex flex-col justify-between pb-5 items-center">
            <div className="w-full flex flex-col items-center ">
                <div className="flex justify-center items-center relative w-full" >
                    <button className="absolute bg-red rounded-l-full py-1 right-0 top-5">
                        <MdKeyboardArrowLeft color="white" size="20px"/>
                    </button>
                    <img src="/logo.png" alt="" />
                </div>
                <img src="/Line.png" className="pb-4" alt="" />
                <div className="space-y-4 flex flex-col w-[85%] mr-16 ">
                    <button onClick={() => setActiveButton("Statistics")} className={activeButton === "Statistics" ? `pt-1 delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : `pt-1 delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                    <FaUserFriends color="white" />
                        <p className="text-white text-lg">Members</p>
                    </button>
                    <button onClick={() => setActiveButton("All Videos")} className={activeButton === "All Videos" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector2.png" alt="" className="h-4" />
                        <p className="text-white text-lg">All Videos</p>
                    </button>
                    <button onClick={() => setActiveButton("Add Video")} className={activeButton === "Add Video" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector3.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Add Video</p>
                    </button>
                    <button onClick={() => setActiveButton("All Audio")} className={activeButton === "All Audio" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector4.png" alt="" className="h-4" />
                        <p className="text-white text-lg">All Audio</p>
                    </button>
                    <button onClick={() => setActiveButton("Add Audio")} className={activeButton === "Add Audio" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector5.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Add Audio</p>
                    </button>
                    <button onClick={() => setActiveButton("Comments")} className={activeButton === "Comments" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector6.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Comments</p>
                    </button>
                </div>
                <button className="flex pt-4 flex-row space-x-3 justify-start w-full items-center">
                    <img src="/Rectangle.png" alt="" className="h-6" />
                    <p className="text-softRed text-lg">Bannded Users</p>
                </button>
                <img src="/Line.png" className="py-5" alt="" />
                <div className="space-y-4 flex flex-col w-[85%] mr-16">
                    <button onClick={() => setActiveButton("Notifications")} className={activeButton === "Notifications" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector7.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Notifications</p>
                    </button>
                    <button onClick={() => setActiveButton("Emails")} className={activeButton === "Emails" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector8.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Emails</p>
                    </button>
                    <button onClick={() => setActiveButton("Plugin Settings")} className={activeButton === "Plugin Settings" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector9.png" alt="" className="h-4" />
                        <p className="text-white text-lg">Plugin Settings</p>
                    </button>
                    <button onClick={() => setActiveButton("New Updates")} className={activeButton === "New Updates" ? ` delay-150 duration-300 ease-in-out flex flex-row p-1 px-3 justify-start rounded-l-xl rounded-br-3xl rounded-tr-md space-x-3 items-center  bg-gradient-to-b from-top to-down` : ` delay-150 duration-300 ease-in-out flex flex-row pl-8 space-x-3 items-center`}>
                        <img src="/Vector10.png" alt="" className="h-4" />
                        <p className="text-white text-lg">New Updates</p>
                    </button>
                </div>
            </div>
        </div>

    )

}