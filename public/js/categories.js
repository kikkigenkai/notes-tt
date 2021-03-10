const categorieBox = document.querySelector('#categories');

class CategorieLink {
    constructor(id, cName) {
        this.id = id;
        this.cName = cName;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <button class="btn col-6 mb-3 has" data-id=${this.id}>${this.cName}</button>
        `;

        categorieBox.append(element);
    }
}

fetch('/api/categories')
        .then(res => res.json())
        .then(data => {
            data.data.forEach(item => {
                new CategorieLink(item._id, item.cName).render();
            });
        });