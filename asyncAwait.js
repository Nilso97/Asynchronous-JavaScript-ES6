const loginUser = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (error) reject(new Error('error in login!'));

            resolve({
                email
            });
        }, 2000);

        console.log('Awaiting');
    });
}

const displayUser = async () => {
    try {
        const user = await loginUser('nilsojunior90@gmail.com');

        console.log({
            user
        });
    } catch (error) {
        console.log({
            error
        });
    }
}

displayUser();