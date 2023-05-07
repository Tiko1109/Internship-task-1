fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(user => {
        const addName = `<li><span class="name">${user.name}</span></li>`;
        const addMail = `<li><adress class="email">${user.email}</adress></li>`;

        document.querySelector('.names').insertAdjacentHTML('afterbegin', addName);
        document.querySelector('.emails').insertAdjacentHTML('afterbegin', addMail);
    })
})

.catch(error => console.log(error))
