import React from "react";
import "./index.css";

const ElixirDetailsCard = ({ elixir, index }) => {
  return (
    <div key={index} className="card">
      <h3 className="elixir-title">{elixir.name}</h3>
      <p>
        <strong>Difficulty:</strong> {elixir.difficulty || "N/A"}
      </p>
      <p>
        <strong>Ingredients:</strong>{" "}
        {elixir.ingredients?.map((i) => i.name).join(", ") || "N/A"}
      </p>
      <p>
        <strong>Effect:</strong> {elixir.effect || "N/A"}
      </p>
      <p>
        <strong>Inventors:</strong>{" "}
        {elixir.inventors
          ?.map((i) => `${i.firstName} ${i.lastName}`)
          .join(", ") || "N/A"}
      </p>
      <p>
        <strong>Manufacturer:</strong> {elixir.manufacturer || "N/A"}
      </p>
    </div>
  );
};

export default ElixirDetailsCard;
