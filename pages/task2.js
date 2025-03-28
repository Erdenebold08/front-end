import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isGrid, setIsGrid] = useState(true);  
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const result = await response.json();
        
      
        const dogBreeds = Object.keys(result.message).map(breed => ({
          name: breed,
          description: "A beautiful dog breed.",  
          country: "Unknown",  
          images: `https://dog.ceo/api/breeds/image/random`  
        }));

        setData(dogBreeds);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        Dog Breeds Gallery
      </h1>
      
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
              <h2 className="text-xl font-bold">{item?.name}</h2>
              <p className="text-black mt-2">{item?.description}</p>
              <p className="opacity-75 text-center">{item?.country}</p>

              <img
                src={item?.images}
                alt={item?.name}
                className="h-64 w-full object-cover rounded-md mb-4"
              />
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Learn more</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

