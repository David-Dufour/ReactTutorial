export default class Book {
    constructor(title, year, author, description) {
        this.title = title;
        this.year = year;
        this.author = author;
        this.description = description;
    }

    getTitle() {
        return this.title;
    }

    getYear() {
        return this.year;
    }

    getAuthor() {
        return this.author;
    }

    getDescription() {
        return this.description;
    }
}