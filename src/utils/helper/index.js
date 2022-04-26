
// Format Number
export const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Format Price
export const formatPrice = (price) => {
  return price?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
