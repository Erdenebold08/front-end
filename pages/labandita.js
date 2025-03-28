import { useState } from "react";
import { useRouter } from "next/router";
export default function Labandita() {
    
  return (
    <div className="bg-gray-100 w-full h-screen ">
        <div className="w-full h-16 flex items-center justify-center bg-blue-600 mt-20 font-bold text-2xl text-white ">
       Nest high school
    </div>
    <div className="font-bold text-6xl text-center mt-10">
        welcome to Nest school
    </div>
    <div className="text-center mt-6">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br></br> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    </div>
   <div className="flex justify-center">
   <button className="w-24 h-12 bg-blue-600 rounded-xl m-4 text-white text-center">
        Click me
    </button>
    <div className=" mt-6 ml-2 text-black text-center">
        Clicked 6 times
    </div>
   </div>
   <div className="h-60 grid grid-cols-3 gap-8 mx-96 bg-gray-100 mt-10">
    <div className="bg-white rounded-lg shadow-xl text-center"><p className="p-4 font-bold text-xl">Why Choose Us?</p>
    <p className=" text-sm">High Performance</p> <p className="mt-2 text-sm">Responsive Design</p> <p className="mt-2 text-sm">Easy to Use</p> <p className="mt-2 text-sm">Scalable Solutions</p> <p className="mt-2 text-sm">24/7 Support</p>
      </div>
    <div className="bg-white rounded-lg shadow-xl  text-center"><p className="p-4 font-bold text-xl">Our Features</p>
    <p className=" text-sm">Fast and Lightweight</p> <p className="mt-2 text-sm">Mobile-First Approach</p> <p className="mt-2 text-sm">Customizable UI</p> <p className="mt-2 text-sm">Secure and Reliable</p> <p className="mt-2 text-sm">Global Reach</p></div>
    <div className="bg-white rounded-lg shadow-xl  text-center"><p className="p-4 font-bold text-xl">Customer Reviews</p>
    <p className="text-sm mx-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> <p className="text-sm mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
   </div>
   <div className="w-full h-16 flex items-center justify-center bg-gray-700 mt-20  text-white ">
       @2025 Our Company.Nest education High school
    </div>
    </div>
  );
}