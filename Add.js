let form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);
        let posting = "Posting"
        let heading = document.querySelector('h2');
        heading.innerHTML = `<h2>Blog ${posting}</h2>`;
        function handleSubmit(event) {
            event.preventDefault();
            let formData = new FormData(form);
            let data = Object.fromEntries(formData);
            let jsonData = JSON.stringify(data);
            fetch('http://localhost:3000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData
            }).then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log(error))

            window.location.href = './gpt.html';
        }
