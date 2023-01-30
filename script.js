const test = async () => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.price);
};

test();

const fetchData = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
