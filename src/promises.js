// Promises
const userLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject(new Error("error in login!"));
      }

      resolve({
        email,
        password,
      });
    }, 1500);
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails");
      resolve({ title: "video title" });
    }, 2500);
  });
};

/* Callback Hell
const user = userLogin("test@test.com.br", "******")
  .then((user) => {
    console.log("user logged!", {
      user,
    });
  })
  .catch((error) => {
    console.log(error);
  });
  */

/*
userLogin("test@test.com.br", "******")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetails(videos[0]))
  .then((videoDetails) => console.log({ videoDetails }))
  .catch((error) => console.log(error));
*/

// Promise.all
const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("videos from youtube");
  }, 3000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("posts from facebook");
  }, 3500);
});

Promise.all([yt, fb]).then((result) => {
  console.log({ result });
});
