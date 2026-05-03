import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Result() {
  const { state } = useLocation();
  const options = state?.options || [];
  const criteria = state?.criteria || [];
  const ratings = state?.ratings || {};

  // ✅ SCORING LOGIC
  const results = options.map((opt) => {
    let score = 0;

    criteria.forEach((c) => {
      const rating = ratings?.[opt]?.[c.name] || 0;
      score += rating * c.weight;
    });

    return { name: opt, score };
  });

  // ✅ FIND WINNER
  const winner = results.reduce(
    (a, b) => (a.score > b.score ? a : b),
    { name: "", score: 0 }
  );

  // ✅ CONFIDENCE CALCULATION
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const confidence =
    totalScore > 0 ? Math.round((winner.score / totalScore) * 100) : 0;

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("decisions")) || [];

    const newDecision = {
      date: new Date().toLocaleString(),
      results,
      winner,
      confidence,
    };

    localStorage.setItem("decisions", JSON.stringify([newDecision, ...prev]));
  }, [results, winner, confidence]);

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl mb-4">Result 🎯</h2>

      {/* 🎯 CONFIDENCE */}
      <div className="mt-4 mb-6">
        <p className="text-sm text-gray-500">Confidence Level</p>
        <div className="w-full bg-gray-200 rounded h-3 mt-1">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{confidence}% confident</p>
      </div>

      {/* 📊 CHART */}
      <div className="w-full h-64 mb-6">
        <ResponsiveContainer>
          <BarChart data={results}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 SCORES */}
      <div className="mb-6">
        {results.map((r, i) => (
          <div key={i} className="mb-2 p-3 bg-gray-100 rounded">
            {r.name}: <span className="font-bold">{r.score}</span>
          </div>
        ))}
      </div>

      {/* 🏆 WINNER */}
      <h3 className="text-xl font-bold text-green-600">
        Best Choice: {winner.name}
      </h3>
    </div>
  );
}