import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/router";


export default function Home() {
    const router = useRouter();
  return (
    <div className="bg-slate-400 text-black flex justify-center items-center h-screen ">
         <button onClick={() => {router.back()}} className="w-24 h-12 bg-white rounded-xl font-bold m-4 text-black">
        Go back
    </button>
     <div className="w-5/6 h-4/5 bg-rose-400 border-current columns-2 flex justify-center items-center"  >
     <div className="w-10 h-full bg-white ml-10 "></div>
     <div className="w-10 h-full bg-white ml-4 "></div>
     <div className=" space-y-4 ml-10 ">
     <p className="text-2xl text-black flex mr-10 ml-10 italic">* Name:Erdenebold</p>
     <p className="text-2xl text-black flex mr-10 ml-10 italic">* Van Arsdel, Ltd.</p>
     <p className="text-2xl text-black flex mr-10 ml-10 italic">* 5678 Main St . New york , NY 90123</p>
     <p className="text-2xl text-black flex mr-10 ml-10 italic">* +976 99586403</p>
     <p className="text-2xl text-black flex mr-10 ml-10 italic">* tugserdene702@gmail.com</p>
     </div>
     <Image src="/favicon.ico" width={400} height={400} className="m-4  mr-24 ml-10 " />
     </div>
    </div>
    
  );
}