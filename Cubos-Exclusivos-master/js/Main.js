$(document).ready(function() {

    const toTop = document.querySelector(".to-top");
    var content = document.querySelector(".content");


    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 928) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
    
    $("#toTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);

    })

    $("#toggletable").click(function() {
        $("table").fadeToggle("slow");

    })

    $("#showbutton").click(function() {
        $("form").fadeIn();
        $("#hidebutton").fadeIn();
        $("#showbutton").fadeOut();
        $(this).children('form').stop(true, true).fadeIn(300);
    })

    $(".minimize").click(function() {
        $("form").fadeOut();
        $("#hidebutton").fadeOut();
        $("#showbutton").fadeIn();
        $(this).children('form').stop(true, true).fadeIn(300);
    })

    $("form").submit(function(e) {
        alert('Sugerencia enviada.');
        e.preventDefault(e);
    })
    
    $(".flecha").click(function() {
        $(this).fadeOut();
        $(this).parent().css("display","none");
        $(this).parent().parent().children(".content").toggleClass("active");
    })
    
    $(".content").click(function() {
        this.classList.toggle("active");
        $(this).parent().children(".toggle").css("display","flex");
        $(this).parent().children(".toggle").children(".flecha").fadeIn();
        
    });

})




