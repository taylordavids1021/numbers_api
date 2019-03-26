

function numberApi() {
    let url ="http://numbersapi.com/random/trivia";

    $.ajax ({
        url: url,
        method: 'get',

        success: function(data) {
            console.log(data);
            $('#number').text(data);
            $('#url').attr('href', data.value);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

$(document).ready(function () {
    numberApi();
    $('button').on('click', numberApi());
});