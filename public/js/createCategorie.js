const form = document.querySelector('form');

const postCategorie = async (url, data) => {
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

    if (formData.cName.trim().length < 3) {
        alert('Name too short');
    } else if (formData.cName.length > 15) {
        alert('Name too long, max 15 characters');
    } else {
        postCategorie('/api/categories', JSON.stringify(formData))
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