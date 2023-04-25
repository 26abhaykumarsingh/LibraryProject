let myLibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.toggleRead=function(){
    this.read=!this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

let newBookBtn = document.querySelector("#newbook");
newBookBtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#newbookform");
    newBookForm.style.display = "grid";
})

let form = document.querySelector("#newbookform");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
})

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let pages=document.querySelector("#noofpages").value;
    let read=document.querySelector("#readstatus").checked;
    let newBook=new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}

function render(){
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<myLibrary.length;i++){
        let book=myLibrary[i];
        let readstatus;
        if(book.read===true) readstatus="Read";
        else readstatus="Unread";
        let bookel=document.createElement("div");
        bookel.innerHTML=`<div class="cardtitle">${book.title}</div>
        <div class="cardauthor"><i>${book.author}</i></div>
        <div class="cardpages">${book.pages} Pages</div>
        <div class="cardreadstatus" onclick=toggleRead(${i})>${readstatus}</div>
        <div class="cardremove" onclick=removeBook(${i})>Remove</div>`;
        bookel.classList.add("card");
        container.appendChild(bookel);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

document.addEventListener("mousedown", function(e){
    let tar = e.target;
    if(form!=tar && !form.contains(tar)){
        form.style.display="none";
    }
    
})



