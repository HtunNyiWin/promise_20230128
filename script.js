const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
    resolve();
  }, 4000);
});

test.then(() => {
  setTimeout(() => {
    console.log("This is inside of then hello");
  }, 5000);
});

const newTest = new Promise((resolve, reject) => {
  try {
    const num = 1;
    num = 2;
    console.log("Before resolve");
    resolve("This is resolve");
  } catch (error) {
    console.log("Before reject");
    reject(error);
  }
});

newTest
  .then((data) => {
    console.log("This is then function", data);
  })
  .catch((err) => {
    console.log("This is catch function #######", err);
  });

// 2023.1.28 promise with parameter

const promiseWithPara = new Promise((resolve, reject) => {
  try {
    resolve("This is resolve");
  } catch (error) {
    reject(error);
  }
});

promiseWithPara
  .then((data) => {
    console.log("This is inside of then", data);
  })
  .catch((err) => {
    console.log(err);
  });

const test = new Promise((resolve, reject) => {
  resolve();
});

test
  .then(
    new Promise((resolve, reject) => {
      console.log("1");
    })
      .then()
      .catch()
  )
  .catch();

// promisehell.callbackhell
new Promise((resolve, reject) => {
  resolve("promise1 resolved");
})
  .then((data) => {
    console.log(data);
    new Promise((resolve, reject) => {
      reject("promise2 rejected");
    })
      .then((data) => {
        console.log(data);
        new Promise((resolve, reject) => {
          resolve("promise3 resolved");
        })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// fetch Data

// fetch promise --> error တက်၇င်  --> resolve ကိုပဲ ခေါ်
// response.json() --> error တက်၇င် --> reject ကို ခေါ်
// sync ဆိုသည်မှာ စောင့်ပေးသည့် code
// async ဆိုသည်မှာ မစောင့်ပေးသည့် code

// const fetchData = () => {
//   const responsePromise = fetch("https://fakestoreapi.com/products");
//   responsePromise.then((response) => {
//     console.log(response);
//   });
// };
// fetchData();

const fetchData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      response
        .json()
        .then((data) => {
          displayData(data);
        })
        .catch((err) => {
          console.log("Inside catch...", err);
        });
    })
    .catch((err) => {
      console.log("Ouside catch: ", err);
    });
};

// async await

const fetchData = async () => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.products);
};

fetchData();
