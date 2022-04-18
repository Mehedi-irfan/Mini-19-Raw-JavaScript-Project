//Need to all id assign in variable
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


//Now Need to the catch the button and get the event listner 
btn.addEventListener('click', function (e) {
    e.preventDefault();

    //Validation the form
    if (title.value == ' ' && author.value == '' && year.value == '') {
        alert("Please Enter The Value");
    }
    else {
        const newRow = document.createElement('tr');

        //Create new table for set the new value
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        //append the all table row child on the tabel heading
        bookList.appendChild(newRow);

        //Clear the all input field
        title.value = '';
        author.value = '';
        year.value = '';
    }
})
