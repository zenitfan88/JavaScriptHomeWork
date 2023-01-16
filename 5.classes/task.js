class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
    }

    set state (state) {
        if (state <0) {
            state = 0;
        } else if (state >100) {
            state = 100;
        } else {
            state;
        }
        this._state = state;
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const books = this.books;
        let index;
        if (type === "name") {
           index = books.find(e => e.name === value);        
        } else if (type === "releaseDate") {
           index = books.find(e => e.releaseDate === value);
        } else if (type === "author") {
           index = books.find(e => e.author === value);
        } else if (type === "pagesCount") {
            index = books.find(e => e.pagesCount === value);
        } else if (type === "type") {
            index = books.find(e => e.type === value);
        }

        if (index === undefined) {
            index = null;
        } 

        return index;
    }

    giveBookByName(bookName) {
        let books = this.books;
        let deleteBook;
        let index = books.findIndex(e => e.name === bookName);

        if (index !== -1) {
            deleteBook = books[index];
        } else {
            deleteBook = null;
        }
        
        books.splice(index, 1);
        return deleteBook;
    }
}

class Student {
    constructor (name) {
        this.name = name;
        this.journal = {};
    }

    addMark(mark, subject) {
        if (!(subject in this.journal)) {
            this.journal[subject] = [];
        }

        if (mark >= 2 && mark <= 5) {
            this.journal[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        let averageBySubject;
        if (!(subject in this.journal)) {
            averageBySubject = 0;
        } else {
            averageBySubject = this.journal[subject].reduce((a, b) => a + b, 0) / this.journal[subject].length;
        }

        return averageBySubject;
    }

    getAverage() {
        let predmet = Object.keys(this.journal);
        let averageBySubject = [];
        predmet.forEach(item => {
            averageBySubject.push(this.getAverageBySubject(item))        
        });

        let average = averageBySubject.reduce((a,b) => a+b, 0) / predmet.length;
        return average;
    }
}