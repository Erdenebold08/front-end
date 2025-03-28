import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

console.log(data);

  return (
    <div className="min-h-screen bg-purple-900 p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">Erdenebolf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.touristAttractions?.map((item) => (
  <div
    key={item?.id} 
    className="bg-white p-6 rounded-lg hover:shadow-xl transition duration-300 border-4 border-pink-500"
  >
    <h2 className="text-xl font-bold">{item?.name}</h2>
    <p className="text-black mt-2">{item?.description}</p>
    <p className="opacity-75 text-center">{item?.address?.country}</p>

    <img
      src={item?.images}
      alt={item?.name}
      className="h-64 w-full"
    />
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
      Learn more
    </button>
  </div>
))}

      </div>
    </div>
  );
}   