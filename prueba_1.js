const library = []

function addToLibrary(library, book_obj){
    if (book_obj instanceof book){
        library.push(book_obj)
    }else{
        alert("The book you're trying to add is not a book object, please check")
    }
}

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
dune = new book("Dune", 'Frank Herbert', 600, true)
lotr = new book("The Lord Of The Rings", 'J.R.R Tolkien', 600, true)
redDragon = new book("The Red Dragon", 'Unknown', 299, false)


addToLibrary(library, theHobbit)
addToLibrary(library, dune)
addToLibrary(library, lotr)
addToLibrary(library, redDragon)

let index = 0

function infoCard(book_obj){
    return `
    <img src="" alt="Imagen de ${book_obj.title}">
    <h1>${book_obj.title}</h1>
    <span>${book_obj.pages}</span>
    <span>¿Leído? : ${book_obj.read}</span>
    `
}

function menos(){
    let card = document.getElementById("main_card")

    let cardData = library.at(index - 1);

    document.getElementById("main_card").innerHTML = infoCard(cardData)

    if (index < 0){
        index = library.length
    }else{
        index -= 1
    }
}

function mas(){
    if (index >= library.length - 1){
        index = 0
    }else{
        index += 1
    }

    let cardData = library.at(index)

    //Inseguro, es mejor usar textContent para cada parte del html
    document.getElementById("main_card") = infoCard(cardData)
}

library.forEach(function(books){
    console.log(books.info());
})
