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