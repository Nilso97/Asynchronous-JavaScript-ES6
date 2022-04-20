// Promises
const loginUserPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (error) reject(new Error('error in login!'));

            console.log('user logged!');
            resolve({
                email
            });
        }, 2000);
    });
}
loginUserPromise('nilsojunior90@gmail.com').then((user) => {
    console.log({
        user
    });
}).catch((error) => {
    console.log({
        error
    });
});

// Promise.all
const yt = new Promise((resolve) => {
    setTimeout(() => {
        resolve('videos from youtube');
    }, 3000);
});

const fb = new Promise((resolve) => {
    setTimeout(() => {
        resolve('posts from facebook');
    }, 3500);
});

Promise.all([yt, fb]).then((result) => {
    console.log({
        result
    });
});