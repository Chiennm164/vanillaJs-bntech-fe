$(document).ready(function(){
    $(document).on('click', 'a[href="#project-popup"]', function(){
        let _this = $(this);
        let id = _this.attr('data-id');
        var formURL = 'article/ajax/article/project.html';
        $.post(formURL, {
            id:id},
            function(data){
                let response = JSON.parse(data);
                let slideItem = project_slide(JSON.parse(response.object.album));
                let textItem = project_text(response.object.title,response.object.description);
                $('.post-slide').html(slideItem);
                $('.post-text').html(textItem);
                owlCarousel_r();
            });
        return false;
    });
});

function owlCarousel_r(){
    $('.post-slide .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false,
            },
            600:{
                items:1,
                nav:false,
                dots:false,
            },
            1000:{
                items:1,
                nav:true,
                dots:false,
                loop:false
            }
        }
    })
}

function project_slide(listSlide){
    let html  = '';
    if(listSlide === null ){
        return html;
    }else{
        html = html + '<div class="owl-carousel">';
            for(let i = 0; i < listSlide.length; i++){
                html = html + '<div class="thumb-post">'
                    html = html + '<span class="img-cover">';
                        html = html + '<img src="'+listSlide[i]+'" alt="">';
                    html = html + '</span>';
                html = html + '</div>';
            }
        html = html + '</div>';
        return html;
    }
}

function project_text(title, description){
    let html = '<h3 class="title">'+title+'</h3>';
        html = html + '<div class="desc">'+description+'</div>';
    return html;
}

$('#project-popup').on({

    'show.uk.modal': function(){
       
    },

    'hide.uk.modal': function(){
        $('.post-slide').html('');
        $('.post-text').html('');
    }
});