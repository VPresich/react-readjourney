import { createSelector } from "reselect";

export const selectFilters = (state) => state.filters;

export const selectQuery = createSelector([selectFilters], (filters) => {
  const query = filters.query || {};

  return Object.keys(query).reduce((acc, key) => {
    const value = query[key];
    if (typeof value === "string") {
      const lowerValue = value.toLowerCase();
      if (lowerValue !== "show all" && lowerValue.trim() !== "") {
        acc[key] = lowerValue;
      }
    } else if (value !== null && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
});
