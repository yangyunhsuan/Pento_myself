$(".more").click(function() {
    var input_value = parseInt($(this).parent().children("input").val());
    if (input_value < 20) {
        $(this).parent().children("input").val(input_value + 1);
    }
});
$(".less").click(function() {
    var input_value = parseInt($(this).parent().children("input").val());
    if (input_value > 1) {
        $(this).parent().children("input").val(input_value - 1);
    }
});

function ValidateNumber(e, pnumber) {

    if (!/^\d+$/.test(pnumber)) {
        $(e).val(/^\d+/.exec($(e).val()));
    }
    return false;
}