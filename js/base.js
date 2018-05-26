;requirejs(['jquery-3.3.1','base'],function(){
    $('.nav_list').find('li').has('ul').addClass('has-menu').append('<i class="fa fa-chevron-right"></i>');
            $('.nav_list').on('mouseover','.has-menu',function(){
                clearInterval(this.timer);
                $(this).children('ul').show(0);
            })
            .on('mouseout','.has-menu',function(){
                this.timer = setTimeout(()=>{
                    $(this).children('ul').hide();
                }, 0);
                
            });
});