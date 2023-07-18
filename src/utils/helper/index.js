// Format Number
export const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Format Price
export const formatPrice = (price) => {
  return price?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const isValidURL = (v) => {
  return /^(https?:\/\/)(?!.*\/\/)(?:[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(?:\/\S*)?(?:\?\S*)?$/.test(
    v
  );
};
