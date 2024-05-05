const useSort = (touristSpots) => {
  // Sort the array based on the "touristsSpotName" property
  const handleSortSpotByName = () => {
    const sortedTouristSpots = touristSpots.sort((a, b) => {
      const nameA = a.touristsSpotName.toUpperCase();
      const nameB = b.touristsSpotName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return sortedTouristSpots;
  };
  // Sort the array based on the "cost low to high"
  const handleSortByPriceLowToHigh = () => {
    return touristSpots.sort((a, b) => a.cost - b.cost);
  };
  // Sort the array based on the "cost high to low"
  const handleSortByPriceHighToLow = () => {
    return touristSpots.sort((a, b) => b.cost - a.cost);
  };
  // Sort the array based on the "rating"
  const handleSortByRating = () => {
    return touristSpots.sort((a, b) => b.rating - a.rating);
  };
  return {
    handleSortSpotByName,
    handleSortByPriceLowToHigh,
    handleSortByPriceHighToLow,
    handleSortByRating,
  };
};
export default useSort;
