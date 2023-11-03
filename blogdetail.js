const blogDetails = document.querySelector('.blog-detail');

const url = 'http://localhost:3000/blogs/';

const getBlogDetail = async () => {
    let query  = new URLSearchParams(window.location.search);
    let parameters = Object.fromEntries(query.entries());

    let data = await fetch(url + parameters.id);
    let resData = await data.json();

    blogDetails.innerHTML = `
    <h2>${resData.title}</h2>
    <p>${resData.content}</p>
    <div class="update-delete">
    <button type="update" id="update" class="btn-update">Update<button>
    <button type="delete" class="btn-delete">Delete<button>
    </div>
    `;
    let update = document.querySelector("#update");
    update.addEventListener("click", ()=>{
        blogDetails.innerHTML =`
        <h2>Blog Updating</h2>
        <form id="contact-form" method="">
            <div class="form-group">
                <label for="name">Title:</label>
                <input type="text" id="name" name="title" placeholder="Title" value="${resData.title}">
            </div>
            <div class="form-group">
                <label for="message">Content</label>
                <textarea id="message" name="content" rows="5" placeholder="Your Update Message" value="${resData.Content}"></textarea>
            </div>
            <button type="submit" class="btn-form-update">Update</button>
        </form>`;
            let form = document.querySelector('form');
            form.addEventListener('submit', handleSubmit);
            function handleSubmit(event) {
            event.preventDefault();
            let formData = new FormData(form);
            let data = Object.fromEntries(formData);
            let jsonData = JSON.stringify(data);
            fetch(url + parameters.id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData
            }).then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log(error))
        }        
        
});

    let deletebtn = document.querySelector('.btn-delete');
    deletebtn.addEventListener('click', async () => {
         await fetch(url + parameters.id,{method: 'DELETE'});
         window.location.href = "./gpt.html";
    });
    
    
};
getBlogDetail();




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


// const updateBlog = () => {
//     blogDetails.addEventListener('update', updateBlog);
//     function updateBlog() {
//         console.log("Updating blog");
//     }
// };

// updateBlog();