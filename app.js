$(document).ready(function () {
    let max_width = $(document).width();
    let max_height = $(document).height();
    $("#no_btn").on("click", function () {
        $("#yes_btn").css({
            width: function (index, value) {
                return parseFloat(value) + 1;
            },
            height: function (index, value) {
                return parseFloat(value) + 1;
            },
            "font-size": function (index, value) {
                return parseFloat(value) + 0.1;
            },
        });

        let selected_height = randomPos(max_height) - 10;
        let selected_width = randomPos(max_width) - 10;

        $(this).css({
            position: "absolute",
            top: selected_height,
            left: selected_width,
        });
    });

    $("#yes_btn").on("click", function () {
        alert("hehe, thank you <3");
    });

    function randomPos(number) {
        return Math.floor(Math.random() * number + 1);
    }
});
