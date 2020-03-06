let price1 = parseInt($(".price1").text());
let price2 = parseInt($(".price2").text());
let price3 = parseInt($(".price3").text());

let p_price = parseInt($(".p_price").text());
let t_price = parseInt($(".t_price").text());

$(".qty-input div").click(function () {
    let input_value1 = parseInt($(".input1").val());
    let input_value2 = parseInt($(".input2").val());
    let input_value3 = parseInt($(".input3").val());

    let fprice1 = parseInt($(".fprice1").text());
    let fprice2 = parseInt($(".fprice2").text());
    let fprice3 = parseInt($(".fprice3").text());

    

    fprice1 = input_value1 * price1;
    fprice2 = input_value2 * price2;
    fprice3 = input_value3 * price3;
    p_price = fprice1+fprice2+fprice3;
    t_price = fprice1+fprice2+fprice3+100;
    $(".fprice1").text(fprice1);
    $(".fprice2").text(fprice2);
    $(".fprice3").text(fprice3);
    $(".p_price").text(p_price);
    $(".t_price").text(t_price);
})

$(".delete1").click(function(){
    let dprice1 = parseInt($(".fprice1").text());
    p_price = p_price-dprice1;
    t_price = t_price-dprice1
    $(".p_price").text(p_price);
    $(".t_price").text(t_price);
})

$(".delete2").click(function(){
    let dprice2 = parseInt($(".fprice2").text());
    p_price = p_price-dprice2;
    t_price = t_price-dprice2;
    $(".p_price").text(p_price);
    $(".t_price").text(t_price);
})
$(".delete3").click(function(){
    let dprice3 = parseInt($(".fprice3").text());
    p_price = p_price-dprice3;
    t_price = t_price-dprice3;
    $(".p_price").text(p_price);
    $(".t_price").text(t_price);
})