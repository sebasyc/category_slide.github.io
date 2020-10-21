$(document).ready( function () {
    $('.slide-category .item-title').click(function(){
        $('.slide-category .slide-sub-category').slideUp()
        $(this).parent().toggleClass('open').siblings().removeClass('open')
        if($(this).next().is(':visible')){
            $(this).next().slideUp()
        } else {
            $(this).next().slideDown()
        }
    })
})