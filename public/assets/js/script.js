$(function () {
    $('select').formSelect();

    $('.add').keypress(function (e) {
        // Enter key corresponds to number 13 
        if (e.which === 13) {
            $('.add').submit();
            const newBurger = {
                burger_name: $("#burger").val().trim(),
            };
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(() => {
                // Reload the page to get the updated list
                location.reload();
            });
            return false;
        }
    });

    $('select').on('change', function (e) {
        const id = $(this).val();

        const newDevourState = {
            devoured: 0
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
        return false;
    });

    $('li img').click(function () {
        const burger = $(this).siblings().text();

        $.ajax("/api/burgers/" + burger, {
            type: "DELETE"
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $('.devour').click(function () {
        $(this).parent('li').remove();
        const id = $(this).attr("data-id");

        const newDevourState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
