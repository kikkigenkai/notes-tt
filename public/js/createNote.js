const form = document.querySelector('form');

const postNote = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data 
    });

    return await res.json();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());

    if (formData.title.trim().length < 3) {
        alert('Title too short');
    } else if (formData.description.trim().length < 3) {
        alert('Description too short');
    } else {
        postNote('/api/notes', JSON.stringify(formData))
        .then().then(data => {
            document.location.href = '/';
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            form.reset();
        });
    }
});