document.getElementById("data-btn").addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
})

document.getElementById("user-btn").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
})

document.getElementById("post-btn").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const divc = document.getElementById("postcontainer")
            for (const users of data) {
                const post = document.createElement('div')
                post.classList.add('post')
                post.innerHTML = `
                    <h2>${users.title}</h2>
                    <p>${users.body}</p>
                `
                divc.appendChild(post)
            }
        })
})


document.getElementById("submit-btn").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'food',
            body: 'bazar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
})

function getalbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showalbum(data))
}
// getalbum()
function showalbum(data) {
    const photocon = document.getElementById("photocontainer")
    for (const photos of data) {
        const photo = document.createElement("img")
        photo.setAttribute('src', `${photos.url}`)
        photo.classList.add("post")
        photocon.appendChild(photo)
    }
}
