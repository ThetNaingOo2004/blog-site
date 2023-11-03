let blogElement = document.querySelector('.blogs');

const url = 'http://localhost:3000/blogs';


const fetchData = async () => {
    let data = await fetch(url);
    let blogs = await data.json();

    ShowData(blogs)
};

fetchData();


const ShowData = (blogdata) => {
    blogdata.forEach(item => {
        let blog = document.createElement('article');
        blog.classList.add('blog-post');

        blog.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <a href="blogdetail.html?id=${item.id}" class="read-more">Read More...</a>
        `;
        blogElement.appendChild(blog);
    })
};




/////////////// Navbar & Footer //

document.addEventListener("DOMContentLoaded", () => {
    // Load the Navbar Component
    fetchComponent("./navbar.html", "navbar-container");

    // Load the Footer Component
    fetchComponent("./footer.html", "footer-container");
});

function fetchComponent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error fetching component: ${error}`);
        });
}


