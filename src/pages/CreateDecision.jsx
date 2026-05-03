import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDecision() {
  const [options, setOptions] = useState(["", ""]);
  const [criteria, setCriteria] = useState([
    { name: "Salary", weight: 5 },
    { name: "Growth", weight: 5 },
  ]);
  const [ratings, setRatings] = useState({});
  const navigate = useNavigate();

  const handleOptionChange = (i, value) => {
    const updated = [...options];
    updated[i] = value;
    setOptions(updated);
  };

  const addOption = () => setOptions([...options, ""]);

  const handleCriteriaChange = (i, field, value) => {
    const updated = [...criteria];
    updated[i][field] = value;
    setCriteria(updated);
  };

  const addCriteria = () => {
    setCriteria([...criteria, { name: "", weight: 5 }]);
  };

  const handleRatingChange = (option, criterion, value) => {
    if (!option) return;

    setRatings((prev) => ({
      ...prev,
      [option]: {
        ...prev[option],
        [criterion]: Number(value),
      },
    }));
  };

  const handleSubmit = () => {
    const validOptions = options.filter((o) => o.trim());
    const validCriteria = criteria.filter((c) => c.name.trim());

    if (validOptions.length < 2) return alert("Enter at least 2 options");
    if (validCriteria.length === 0) return alert("Add at least one criterion");

    navigate("/result", {
      state: { options: validOptions, criteria: validCriteria, ratings },
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Create Decision
      </h2>

      {/* OPTIONS */}
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Options
      </h3>

      {options.map((opt, i) => (
        <input
          key={i}
          value={opt}
          onChange={(e) => handleOptionChange(i, e.target.value)}
          placeholder={`Option ${i + 1}`}
          className="w-full mb-2 p-2 border rounded
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-white
          border-gray-300 dark:border-gray-700"
        />
      ))}

      <button
        onClick={addOption}
        className="mb-4 px-3 py-1 rounded
        bg-gray-200 text-gray-900
        dark:bg-gray-700 dark:text-white
        hover:scale-105 transition"
      >
        + Add Option
      </button>

      {/* CRITERIA */}
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Criteria
      </h3>

      {criteria.map((c, i) => (
        <div key={i} className="mb-3">
          <input
            value={c.name}
            onChange={(e) => handleCriteriaChange(i, "name", e.target.value)}
            className="w-full mb-1 p-2 border rounded
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-white
            border-gray-300 dark:border-gray-700"
          />

          <input
            type="range"
            min="1"
            max="10"
            value={c.weight}
            onChange={(e) =>
              handleCriteriaChange(i, "weight", Number(e.target.value))
            }
            className="w-full accent-amber-400"
          />

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Weight: {c.weight}
          </p>
        </div>
      ))}

      <button
        onClick={addCriteria}
        className="mb-4 px-3 py-1 rounded
        bg-gray-200 text-gray-900
        dark:bg-gray-700 dark:text-white
        hover:scale-105 transition"
      >
        + Add Criteria
      </button>

      {/* RATINGS */}
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Rate Each Option
      </h3>

      {options.map((opt, i) =>
        opt ? (
          <div key={i} className="mb-4 p-3 border rounded border-gray-300 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{opt}</h4>

            {criteria.map((c, j) =>
              c.name ? (
                <div key={j}>
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    {c.name}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onChange={(e) =>
                      handleRatingChange(opt, c.name, e.target.value)
                    }
                    className="w-full p-1 border rounded
                    bg-white text-gray-900
                    dark:bg-gray-800 dark:text-white
                    border-gray-300 dark:border-gray-700"
                  />
                </div>
              ) : null
            )}
          </div>
        ) : null
      )}

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Calculate
      </button>
    </div>
  );
}