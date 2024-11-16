$(function () {
    $('.questions__expand').on('click', function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find('>:nth-child(2)');

        if ($expand.text() == '+') {
            $expand.text('-');
        } else {
            $expand.text('+');
        }
    });
});
