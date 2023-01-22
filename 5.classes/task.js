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
        index = books.find(e => e[type] === value);

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
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }

        if (!(subject in this.marks)) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        let averageBySubject;
        if (!(subject in this.marks)) {
            averageBySubject = 0;
        } else {
            averageBySubject = this.marks[subject].reduce((a, b) => a + b, 0) / this.marks[subject].length;
        }

        return averageBySubject;
    }

    getAverage() {
        let predmet = Object.keys(this.marks);
        let average = 0;
        
        if (predmet.length === 0) {
            average = 0;
        } else {
        let averageBySubject = [];
        predmet.forEach(item => {
            averageBySubject.push(this.getAverageBySubject(item))        
        });

        average = averageBySubject.reduce((a,b) => a+b, 0) / predmet.length;
    }

        return average;
    }
}