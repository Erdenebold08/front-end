import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p className="text-center font-bold text-2xl my-10">Бие даалт</p>
      <div className="flex space-x-10 justify-center items-center">
        <div className=" w-48 h-56 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-500 hover:animate-spin shadow-2xl"
        onClick={() => {
          router.push("task1");
        }}>
        <p
          className="border-3 border-blue-400 p-4 mb-4 text-center hover:red-500"
          
        >
          card
        </p>
        </div>
        
        <div className="w-48 h-56 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-500 hover:animate-spin shadow-2xl"
        onClick={() => {
          router.push("task1");
        }}>
        <p
          className="  border-3 border-blue-400 p-4 mb-4  text-center"
          
        >
          search
        </p>
        </div>
        <div className="w-48 h-56 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-500 hover:animate-spin shadow-2xl"
         onClick={() => {
          router.push("task3");
        }}>
          <p
            className=" border-3 border-blue-400 text-center"
           
          >
            weather
          </p>
        </div>

        <div className="w-48 h-56 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-500 hover:animate-spin shadow-2xl"
        onClick={() => {
          router.push("task4");
        }}>
        <p
          className="  border-3 border-blue-400 p-4 mb-4  text-center"
          
        >
          log in
        </p>
        </div>
        <div className="w-48 h-56 flex items-center justify-center bg-gray-400 rounded-xl hover:bg-red-500 hover:animate-spin shadow-2xl"
         onClick={() => {
          router.push("task5");
        }}>
        <p
          className="  border-3 border-blue-400 p-4 mb-4  text-center"
         
        >
          group
        </p>
        </div>
      </div>
    </div>
  );
}
