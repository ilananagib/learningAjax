console.log('Client is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#quoteButton').on('click', clickAjax);
    $('#submitButton').on('click', addNewQuote);
    getAllQuotes();
}

function getAllQuotes() {
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
        .then(function (response) {
            $('#randomQuote').text(response.quote + ' ' + response.author);

        });
}

function clickAjax() {
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
        .then(function (response) {
            $('#randomQuote').text(response.quote + ' ' + response.author);


        });
}

function addNewQuote() {
    const newQuoteObj = { quote: $('#newQuote').val(), author: $('#newAuthor').val() };
    console.log(newQuoteObj);
    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: newQuoteObj
    })
    .then(function (response) {
        console.log(response);
        getAllQuotes();
    });
}

