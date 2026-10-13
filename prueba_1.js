function book(title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = read;

    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read? 'read': 'not read yet'}`;
    };

}

theHobbit = new book("The Hobbit", 'J.R.R Tolkien', 299, true)

console.log(theHobbit.info())

