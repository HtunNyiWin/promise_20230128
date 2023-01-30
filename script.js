const fetchData = async () => {
  try {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.products[6].title);
  } catch (error) {
    console.log("YoU ArE SoMeThInGs WrOng: ", error);
  }
};

fetchData();
