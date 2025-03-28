import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from "next/router";

 
export default function Home() {
    const router = useRouter();
    const [grid , setGrid] = useState(false);
    const data = [
        {
            id: 1,
            title: "Test 1",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 0
        {
            id: 2,
            title: "Test 2",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 1
        {
            id: 3,
            title: "Test 3",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 2
        {
            id: 4,
            title: "Test 4",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 3
        {
            id: 5,
            title: "Test 5",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 4
        {
            id: 6,
            title: "Test 6",
            description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }, // 5   
    ];
  return (
    <div className="p-6 max-w-4xlmx-auto">
         <button onClick={() => {router.back()}} className="w-24 h-12 bg-white rounded-xl font-bold m-4 text-black">
        Go back
    </button>
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
            <button onClick={() => setGrid(!grid)}
                className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    {grid ? "жагсаалт харах руу шилжих" : "Grid view ruu shiljih"}
                </button>
        </div>
        <div className={grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6 " : "space-y-4"
        }
        >
            {data.map((items, index) => (
                <div
                key={items.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4"
                >
                <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
                <p className="text-gray-600">{items.description}</p>
                </div>
            ))}
           {data.map((item, index) => {
    return <div key={index}>temuujin</div>
})}
        </div>
    </div>
  );
}