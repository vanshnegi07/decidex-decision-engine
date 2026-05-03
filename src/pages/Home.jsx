import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Make Better Decisions 🧠
      </h1>

      <p className="text-gray-400 light:text-gray-600 max-w-xl mb-8 text-lg"></p>
      <button
  onClick={() => navigate("/create")}
  className="px-8 py-3 bg-amber-400 text-black rounded-xl shadow-lg hover:scale-105 hover:bg-amber-300 transition">Start Decision</button>
    </div>
  );
}