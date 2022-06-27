// Callback
const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      return onError(new Error("error in login!"));
    }

    console.log("user logged!");
    onSucess({ email, password });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback([ "video1", "video2", "video3" ]);
  }, 2000);
};

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500);
};

const user = loginUser(
  "test@test.com.br",
  "******",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log(user.email);
      console.log({ videos });
      
      getVideoDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails });
      });
    });
  },
  (error) => {
    console.log(error);
  }
);
