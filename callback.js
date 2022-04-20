// Callbacks
const loginUser = (email, onSucess, onError) => {
    setTimeout(() => {
        const error = false;
        if (error) onError(new Error('error in login!'));
        console.log('user logged!');
        onSucess({
            email
        });
    }, 2000);
}

const getUserBooks = (email, books) => {
    setTimeout(() => {
        books(['book1', 'book2', 'book3']);
    }, 3000);
}

const userBookDetails = (email, details) => {
    setTimeout(() => {
        details({
            tittle: 'Harry Potter'
        });
    }, 4000);
}
const showUserEmail = loginUser('nilsojunior90@gmail.com', (returnUser) => {
    console.log({
        returnUser
    });
    getUserBooks(returnUser, (myBooks) => {
        console.log({
            myBooks
        })
    }, userBookDetails(returnUser, (bookDetails) => {
        console.log({
            bookDetails
        })
    }))
}, (error) => {
    console.log({
        error
    });
});