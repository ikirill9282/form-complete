$(document).ready(function () {
    var token = '1c9f461d086a939e39c05e32cdcba9eb7dce9a26'
    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type: "PARTY",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});