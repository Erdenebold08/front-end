import { useState } from "react";
import { useRouter } from "next/router";

const data = [
  { id: 1, name: "Ganerdene", age:"age:16", height:"height:180+cm", weight:"weight:100kg" },
  { id: 2, name: "Temuugei",age:"age:17", height:"height:180+cm", weight:"weight:68kg" },
  { id: 3, name: "Bill",age:"age:16", height:"height:180+cm", weight:"weight:68kg" },
  { id: 4, name: "Temulen", age:"age:19", height:"height:160cm", weight:"weight:78kg" },
  { id: 5, name: "NIGGA", age:"age:21", height:"height:100cm", weight:"weight:165kg" },
  { id: 6, name: "Khangarid", age:"age:21", height:"height:180+cm", weight:"weight:45kg" },
  { id: 7, name: "Chinbiligt", age:"age:16", height:"height:180+cm", weight:"weight:45kg" },
  { id: 8, name: "Erdenejargal", age:"age:17", height:"height:180+cm", weight:"weight:100kg" },
  { id: 9, name: "Tuvshin", age:"age:22", height:"height:180+cm", weight:"weight:65kg" },
  { id: 10, name: "Jargal",  age:"age:14", height:"height:170cm", weight:"weight:56kg"  },
  { id: 11, name: "Gunbilig",  age:"age:15", height:"height:170cm", weight:"weight:45kg" },
  { id: 12, name: "Munkhbayasgalan",  age:"age:21", height:"height:180cm", weight:"weight:67kg"},
  { id: 13, name: "Undrakh", age:"age:16", height:"height:150cm", weight:"weight:78kg"  },
  { id: 14, name: "Badraa",  age:"age:16", height:"height:150cm", weight:"weight:300kg" },
  { id: 15, name: "Ariunbayar",  age:"age:21", height:"height:180cm", weight:"weight:100kg" },
  { id: 16, name: "Munkhnaran", age:"age:16", height:"height:180cm", weight:"weight:100kg" },
  { id: 17, name: "Nomindari", age:"age:25", height:"height:140cm", weight:"weight:100kg" },
  { id: 18, name: "Siilen", age:"age:26", height:"height:140cm", weight:"weight:100kg" },
  { id: 19, name: "Delgermurun",  age:"age:14", height:"height:140cm", weight:"weight:100kg" },
];

export default function Sfilter() {
    const [grid, setGrid]=useState(false);
    const router = useRouter();
    const [search, setSearch] = useState("");
    const filteredData = data.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
 
  return (

    <div className="w-full min-h-screen bg-purple-900 px-80">
              <button onClick={() => setGrid (!grid)}
                    className="absolute top-5 right-5 px-4 py-2 bg-rose-200 text-white rounded hover:bg-rose-500 transition">
                    {grid ? "Жагсаалт харах руу шилжих" : "Grid view рүү шилжих"}
                </button>
         <p className=" absolute left-5 text-xl h-12 w-20  bg-rose-200 my-4 rounded-lg hover:bg-rose-500 hover:text-white bg-rose-200 flex items-center justify-center  " onClick={() => router.back()}>Butsah</p>
      <div className="w-full h-[100px] flex items-center flex-col gap-3 pt-3 ">
        <p className="font-bold text-xl text-white">Сурагчдын мэдээлэл</p>
        <input
          className="text-white pl-2 flex bg-black w-full h-24 rounded-lg shadow-lg"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div >
        <div className={`mt-8 flex flex-col gap-4 ${grid ? "grid grid-cols-2 gap-4 " : ""}`}>{filteredData.length > 0 ? (
            filteredData.map((data) => (
                <div className="w-full h-[120px] rounded-lg bg-rose-500 hover:animate-pulse mt-8 shadow-lg" key={data.id}>
                  <p className="text-lg text-white font-bold text-opacity-80 pl-2">{data.name}</p>
                  <div className="flex">
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.age}</p>
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.height}</p>
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.weight}</p>
                  </div> 
                </div>
              ))
        ): <div className="text-white text-lg">Хайлт олдсонгүй : {search}</div>}</div>
        
      </div>
    </div>
  );
}