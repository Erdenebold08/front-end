import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isGrid, setIsGrid] = useState(true);  
  const [search, setSearch] = useState("");
  const filteredData = data.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase())
  );
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response1 = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
        const response3 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const response4 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const response5 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");
        const response6 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();
        const result5 = await response5.json();
        const result6 = await response6.json();
        setData([
          ...result.clothes,
          ...result1.touristAttractions,
          ...result2.historicalTools,
          ...result3.ethnicGroups,
          ...result4.provinces,
          ...result5.historicalFigures,
          ...result6.instruments,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">Erdenebold</h1>
      
      <input
        className="text-white pl-2 flex bg-black w-full h-12 rounded-lg shadow-lg mb-4"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button 
        onClick={() => setIsGrid(!isGrid)} 
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
      >
        {isGrid ? "Switch to List View" : "Switch to Grid View"}
      </button>

      {filteredData.length === 0 ? (
        <p className="text-black text-center text-xl font-extrabold">DATA NOT FOUND!!!</p>
      ) : (
        <div className={`grid gap-8 ${isGrid ? "grid-cols-1" : "grid-cols-3"}`}>
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg hover:shadow-xl transition duration-300 border-4 border-pink-500">
             - <h2 className="text-xl font-bold">{item?.name}</h2>
              <p className="text-black mt-2">{item?.description}</p>
              <p className="opacity-75 text-center">{item?.address?.country}</p> 

              <img
                src={(item?.images) ? item?.images : "https://www.zangia.mn/l/f/7/CH-DY0G514-YVBKFW7-NJQYA7K-Z6.jpg"}
                alt={item?.name}
                className="h-64 w-full object-cover rounded-md mb-4"
              />
              <button onClick={() => router.push(`/mongolapi/${item.id}`)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Learn more</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
