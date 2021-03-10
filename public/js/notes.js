const noteBox = document.querySelector('#noteBox');

class NoteCard {
    constructor(id, title, actualDate, description) {
        this.id = id;
        this.title = title;
        this.actualDate = actualDate;
        this.description = description;
    }

    render() {
        const element = document.createElement('div');

        element.classList.add('card');
        element.classList.add('mb-2');
        element.classList.add('note');

        element.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.actualDate}</h6>
                <p class="card-text">${this.description}</p>
                <a href="/edit/${this.id}" class="btn btn-dark">Edit</a>
            </div>
        `;

        noteBox.append(element);
    }
}

const categoriesParent = document.querySelector('#categories');

categoriesParent.addEventListener('click', async (event) => {
    if (event.target && event.target.classList.contains('has')) {
        const notes = document.querySelectorAll('.note');

        notes.forEach(note => note.remove());

        const res = await fetch(`/api/categories/notes/${event.target.getAttribute('data-id')}`);
        const {data} = await res.json();
        
        data.forEach(note => {
            new NoteCard(note._id, note.title, note.actualDate, note.description).render();
        });
    }

    if (event.target && event.target.classList.contains('hasnt')) {
        const notes = document.querySelectorAll('.note');

        notes.forEach(note => note.remove());

        const res = await fetch('/api/notes');
        const {data} = await res.json();
        
        data.forEach(note => {
            new NoteCard(note._id, note.title, note.actualDate, note.description).render();
        });
    }
});