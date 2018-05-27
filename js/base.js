;requirejs(['jquery-3.3.1','base'],function(){
    $('.li1').addClass('has-menu').append('<i class="fa fa-chevron-right"></i>');
    $('.li2').append('<i class="fa fa-chevron-right"></i>');
    $('.nav_list').on('mouseover','.has-menu',function(){
        $(this).children('i').hide();
        $(this).children('div').show();
        // $(this).removeChild('.fa');
    })
    .on('mouseout','.has-menu',function(){
        $(this).children('i').show();
        $(this).children('div').hide();
        // $(this).append('<i class="fa fa-chevron-right"></i>')
    });
    $('.nav_right').append("<img src='../img/nav_right.png'/>");

});