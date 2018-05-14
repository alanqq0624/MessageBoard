$(document).ready(function () {
    $("#submit").click(function (event) {
        event.preventDefault(); //取消reload
        $.ajax({
            method: "post",
            url: "./ajax_data",
            data: {
                message: $("#send input[name=message]").val(),
            },
            success: function (receive) {
                var time = new Date();
                $("#board").append("<p>"+receive+"</p>");
                document.querySelector('#board p:last-of-type').scrollIntoViewIfNeeded();
                document.getElementById('message').value = '';
            }
        })
    })
})