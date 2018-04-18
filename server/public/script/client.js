console.log('Client is loaded');

$(document).ready(onReady);
    
function onReady(){
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
    .then(function(response) {
        $('#randomQuote').text(response.quote + ' ' + response.author);
       
    });

    console.log('jQuery has been loaded');
    $('#quoteButton').on('click', clickAjax);

    function clickAjax(){
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
    .then(function(response) {
        $('#randomQuote').text(response.quote + ' ' + response.author);
    
        
    });
}
}
