import React, { useState, useEffect } from "react";
import { useElixirs } from "../../hooks/useElixirs";
import ElixirDetailsCard from "../ElixirDetailsCard";
import "./index.css";

const ElixirList = () => {
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventorFullName: "",
    manufacturer: "",
  });

  const { elixirs, isLoading, error, fetchElixirs } = useElixirs();

  // Apply filters
  const applyFilters = () => {
    fetchElixirs(filters);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventorFullName: "",
      manufacturer: "",
    });
    fetchElixirs();
  };

  useEffect(() => {
    fetchElixirs();
  }, []);

  const difficultyOptions = [
    { label: "All Difficulties", value: "" },
    { label: "Unknown", value: "Unknown" },
    { label: "Advanced", value: "Advanced" },
    { label: "Moderate", value: "Moderate" },
    { label: "Beginner", value: "Beginner" },
    { label: "Ordinary Wizarding Level", value: "OrdinaryWizardingLevel" },
    { label: "One Of a Kind", value: "OneOfAKind" },
  ];

  return (
    <div className="elixir-list-wrapper">
      <h1 className="elixir-list-title">Wizard World Elixirs</h1>

      <div className="elixir-filter-wrapper">
        {Object.keys(filters).map((filterKey) =>
          filterKey === "difficulty" ? (
            <select
              value={filters.difficulty}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, difficulty: e.target.value }))
              }
              className="elixir-filter-input"
            >
              {difficultyOptions.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={filterKey}
              type="text"
              placeholder={filterKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, function (str) {
                  return str.toUpperCase();
                })}
              value={filters[filterKey]}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, [filterKey]: e.target.value }))
              }
              className="elixir-filter-input"
            />
          )
        )}
      </div>

      <div className="elixir-filter-action-buttons-wrapper">
        <button
          onClick={applyFilters}
          disabled={isLoading}
          className="elixir-filter-action-button elixir-filter-apply-button"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          disabled={isLoading}
          className="elixir-filter-action-button elixir-filter-reset-button"
        >
          Reset Filters
        </button>
      </div>

      {error && <div className="error-message-wrapper">{error}</div>}

      {isLoading ? (
        <div className="loading-indicator-wrapper">Loading elixirs...</div>
      ) : (
        <div className="elixir-list-items-wrapper">
          {elixirs.map((elixir, index) => (
            <ElixirDetailsCard elixir={elixir} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ElixirList;
