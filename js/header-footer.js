    //螢幕切換
        $(window).resize(function(){
            if($(window).outerWidth() >768){
                $("header>.container>.nav").show();
                $("header>.container>.member-cart>button").hide();
            }else{
                $("header>.container>.nav").hide();
                $("header>.container>.member-cart>button").show();
                $(".member-cart>button>i").removeClass("fa-times").addClass("fa-bars");
            }//if else end
        }) //window resize end
        
    //選單欄縮放
        $("header>.container>.member-cart>button>i").click(function(){
            $("header>.container>.nav").animate({width: "toggle"});
            
            if($(this).hasClass("fas fa-bars")){
                 $(this).removeClass("fa-bars").addClass("fa-times");
               }else{
                $(this).removeClass("fa-times").addClass("fa-bars");
               }
        });//button i click end 