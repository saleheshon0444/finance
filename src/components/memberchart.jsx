import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Memberrchart(){
    
    return(
        <div className="m-5 bg-white rounded-3xl h- shadow-lg flex flex-col divide-y-2 divide-softBlue/20 p-5 ">
                            <div className="flex flex-row justify-between items-center pb-3">
                                <div className="flex flex-row space-x-2 justify-center items-center">
                                    <img src="/Vector23.png" className="h-fit " alt="" />
                                    <p className="font-bold text-softBlue">Members</p>
                                </div>
                                <div className="w-[244px] h-[32px] bg-back shadow-inner rounded-full flex flex-row justify-center items-center">
                                    <input type="text" placeholder="Search..." className="bg-back rounded-full focus:border-back focus:outline-none" />
                                    <p className="text-gray/40 pr-2">|</p>
                                    <button>
                                        <img src="/Vector17.png" alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around items-center py-3">
                                <p className="font-medium text-softBlue">ID</p>
                                <p className="font-medium text-softBlue">Name</p>
                                <p className="font-medium text-softBlue">Date</p>
                                <p className="font-medium text-softBlue">Email</p>
                                <p className="font-medium text-softBlue">Status</p> 
                                <p className="font-medium text-softBlue">Actions</p>
                            </div>
                            <div className="flex flex-row justify-around items-center py-3">
                                <p className="font-medium text-softBlue">No Recoard Found!</p>
                            </div>
                            <div className="flex flex-row justify-between items-center py-3">
                                <div className="flex flex-row space-x-5">
                                    <FaAngleLeft color="#7790A6" />
                                    <FaAngleRight color="#7790A6" />
                                </div>
                                <p className="text-softBlue font-medium pl-12">Page 1 of 1</p>
                                <div className="flex flex-row space-x-3 justify-center items-center">
                                    <p className="font-medium text-softBlue text-sm">Go to page:</p>
                                    <p className="font-medium text-softBlue text-sm">1</p>
                                    <div className="flex flex-row space-x-2">
                                        <FaAngleDown color="#7790A6" />
                                        <FaAngleUp color="#7790A6" />

                                    </div>
                                </div>
                            </div>
                        </div>
    )
}