import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from "next/router";
const userData = [
  { id: 1, name: "Blitz", email: "Blitz@example.com" },
  { id: 1, name: "Blitz", email: "Blitz@example.com" },
  { id: 1, name: "Blitz", email: "Blitz@example.com" },
  { id: 1, name: "Senzu", email: "Senzu@example.com" },
  { id: 1, name: "Senzu", email: "Senzu@example.com" },
  { id: 1, name: "Mzinhio", email: "Mzinhio@example.com" },
  { id: 1, name: "910", email: "910@example.com" },
  { id: 1, name: "Maaraa", email: "Maaraa@example.com" },
];

export default function Users() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("search", search);
  console.log("filtered", filteredUsers);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
       <button onClick={() => {router.back()}} className="w-24 h-12 bg-white rounded-xl font-bold m-4 text-black">
        Go back
    </button>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Хэрэглэгчийн жагсаалт!
      </h1>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Хэрэглэгчийн нэрээр хайна уу......"
          className=" w-full p-2 border rounded-lg focus:outlined-non"
        />
      </div>
      <div className="grid gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div 
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 flex justidy-center items-center"
            >
                <div>
                 <p className="text-lg font-medium">{user.name}</p>
                 <p className=" text-sm text-gray-500">{user.email}</p>
                </div>
            </div>
          
          ))
        ) : (
          <div>hereglegch oldohgui been</div>
        )}
      </div>
    </div>
  );
}
