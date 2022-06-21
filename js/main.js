
let nav = $("nav")
$(".toggle-menu-open , .close-icon").click(function () {
    let widthVal = $(nav).outerWidth();
    let leftVal = $(nav).css("left");
    if(leftVal == "0px") {
        $(nav).animate({left: `-${widthVal}px`},700);
    }else {
        $(nav).animate({left: `0`},700);
    }
})

$(".singers ul li h3").click(function () {
    $(this).next().slideToggle(1000).parent().siblings().find("p").slideUp(1000)
})

let countDown = new Date("7-18-2022").getTime();
function counter() {
    let timeNow = new Date().getTime();
    let diffrentTime = countDown - timeNow;
    let days = Math.floor(diffrentTime /1000 / 60 / 60 /24);
    let hours = Math.floor(diffrentTime % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(diffrentTime % ((1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(diffrentTime % ((1000 * 60)) / 1000);
    $("#days").html(`- ${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${minutes} m`);
    $("#seconds").html(`${seconds} s`);
    let out = setTimeout(counter,1000);
}
counter();

$("textarea").keyup(function () {
    let total = 99;
    let totalValue = $("textarea").val().split('');
    for (let i = -1; i < totalValue.length; i++) {
        if (totalValue.length <= total) {
            $(".character span").html(`${total - i}`)
        }else {
            $(".character span").html(`your available character finished`)
        }
        
    }
})
$("nav a[href^='#']").click(function (e) {
    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset} , 3000);
})
