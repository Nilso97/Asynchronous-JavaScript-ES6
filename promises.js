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