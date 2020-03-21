$(document).ready(function () {
    $("input:radio[name=radio]").click(function () {
        if ($(this).attr('id') === 'o') {
            $('#myModal').modal(focus);

            // if (pageNumber === null || pageNumber == undefined) {
            //     location.href = "/index.html#2";
            // }
            // else {
            //     location.href = "/index.html#" + (Number(pageNumber) + 1);
            // }
        } else {
            alert("틀렸습니다!");
        }
    });
});


$("#nextButton").click(function(){
    $('#myModal').modal('hide');
    var pageNumber = window.location.href.split("#")[1];
    if (pageNumber === null || pageNumber == undefined) {
        location.href = "/index.html#2";
    }
    else {
        location.href = "index.html#" + (Number(pageNumber) + 1);
    }
});
