import { useState, useCallback } from "react";
import { API_BASE_URL } from "../utils/APIConstants";

export const useElixirs = () => {
  const [elixirs, setElixirs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchElixirs = useCallback(async (filters = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value.trim()) {
          const apiParameters = {
            name: "Name",
            difficulty: "Difficulty",
            ingredient: "IngredientName",
            inventorFullName: "InventorName",
            manufacturer: "Manufacturer",
          };

          queryParams.append(apiParameters[key], value.trim());
        }
      });

      const url = `${API_BASE_URL}/Elixirs${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch elixirs");
      }

      const data = await response.json();
      setElixirs(data);
    } catch (error) {
      console.error("Error fetching elixirs:", error);
      setError(error.message);
      setElixirs([]);
    } finally {
      setIsLoading(false);
    }

    return { elixirs, isLoading, error };
  }, []);

  return { elixirs, isLoading, error, fetchElixirs };
};
