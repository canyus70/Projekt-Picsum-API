const gallery = document.body.querySelector(".gallery");

fetch("https://picsum.photos/v2/list")
    .then(response => {
        if(response.ok === false) {
            throw new Error ("OMG: ALARM ALARM")
        }
        return response.json();
    })
    .then(author => {

        author.forEach(singleAuthor => {
            const neuesDiv = document.createElement("div");
            neuesDiv.classList.add("content")
            neuesDiv.innerHTML =`
            <figure>
            <img src="${singleAuthor.download_url}">
            <figcaption>${singleAuthor.author}</figcaption>
            </figure>
            <button onclick="window.open('${singleAuthor.url}')" class="button">See more</button>
            `;
            gallery.appendChild(neuesDiv)
        });
    })
    // .catch(error => {
    //     console.error('ALARM ALARM ALARM:', error);
    // });