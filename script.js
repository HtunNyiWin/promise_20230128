const fetchData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].username);
    }
    // console.log(data[0].username);
  } catch (error) {
    console.log("YoU ArE SoMeThInGs WrOng: ", error);
  }
};

fetchData();
