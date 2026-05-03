import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function History() {
  const [search, setSearch] = useState("");

  const data = JSON.parse(localStorage.getItem("decisions")) || [];

  const debouncedSearch = useDebounce(search);

  // ✅ SAFE FILTER
  const filtered = data.filter((d) =>
    (d?.winner?.name || "")
      .toLowerCase()
      .includes((debouncedSearch || "").toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Decision History</h2>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search decisions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* 📭 EMPTY STATE */}
      {data.length === 0 && (
        <p className="text-gray-500">No decisions saved yet.</p>
      )}

      {/* 🔎 NO MATCH */}
      {data.length > 0 && filtered.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      {/* 📜 LIST */}
      {filtered.map((d, i) => (
        <div key={i} className="mb-3 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-500">{d.date}</p>

          <p className="font-bold text-green-600">
            Winner: {d?.winner?.name || "N/A"}
          </p>

          <p className="text-sm text-gray-600">
            Confidence: {d?.confidence || 0}%
          </p>
        </div>
      ))}
    </div>
  );
}