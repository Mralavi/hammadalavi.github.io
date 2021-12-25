Vue.component('info-box', {
    props: ["icon", "header", "value"],
    template: `
    <div class="info-box">
        <div class="info-box-icon" v-html="icon"></div>
        <div class="info-box-content">
            <div class="info-box-header">
                {{header}}
            </div>
            <div class="info-box-value">
                {{value}}
            </div>
        </div>
    </div>
    `
})
new Vue({
    el: '#app',
    data() {
        return {
            educations_list: [
                {
                    ed_cover: "./assets/images/bg.jpg",
                    ed_caption: "This is a Random Photo"
                },
                {
                    ed_cover: "./assets/images/profile.jpg",
                    ed_caption: "This is a Random Photo2"
                },
                {
                    ed_cover: "./assets/images/profile3.jpg",
                    ed_caption: "This is a Random Photo3"
                },
            ],
            portfo_list: [
                {
                    po_cover: "assets/images/profile3.jpg",
                    po_caption: "THIS is A Test"
                },
                {
                    po_cover: "assets/images/profile.jpg",
                    po_caption: "THIS is A Test"
                },
                {
                    po_cover: "assets/images/bg.jpg",
                    po_caption: "THIS is A Test"
                },
            ],
            info_box:{
                info_box_list:[
                    {
                        icon: "<ion-icon name='location-outline'></ion-icon>",
                        header: "Address",
                        value: "Iran. Bonab"
                    },
                    {
                        icon: "<ion-icon name='at-outline'></ion-icon>",
                        header: "Email",
                        value: "mr.tahadostifam@gmail.com"
                    },
                    {
                        icon: "<ion-icon name='checkmark-outline'></ion-icon>",
                        header: "Freelance",
                        value: "Available"
                    },
                    {
                        icon: "<ion-icon name='call-outline'></ion-icon>",
                        header: "Phone",
                        value: "+98 9368392346"
                    },
                ]
            }
        }
    }
})

$(document).ready(function () {
    let content_page = $('.content-page');
    $('.navbar_link').click(function (e) { 
        let to_page_id = $(this).attr('to-page');
        let page_to_show = $('.content-page#' + to_page_id);
        if ($(this).attr('class') != 'navbar_link active_link') {
            $('.navbar_link').removeClass('active_link');
            $(this).addClass('active_link');
            
            content_page.css('display', 'none');
            page_to_show.css('opacity', '0')
                        .css('display', 'block');
            page_to_show.animate({
                opacity: '100%'
            }, 200);
        }
    });
    $('#--menu').click(function (e) { 
        let menu_button = $('#--menu');
        let navbar = $('#n-avbar');

        if (dw <= 800) {
            if (navbar.css('display') == 'none') {
                navbar.css('display', 'block')
                      .css('opacity', '0')
                      .animate({
                        opacity: '100%'
                      }, 200);
                    $('#--menu').toggleClass('active_menu');
            }
            else {
                navbar.animate({
                    opacity: '0%'
                }, 200, function () {
                    navbar.css('display', 'none');
                });
                $('#--menu').toggleClass('active_menu');
            }
        }
    });
    $('.navbar_link').click(function (e) { 
        $('#--menu').click();
    });
    $('.n-avbar .navbar_link').hover(function (e) { 
        if (dw > 800) {
            $(this).find('.popup-hover').css('display', 'block')
                        .css('margin-left', '10px')
                        .animate({
                            marginLeft: 0
                        }, 200);
        }
    });
    $('.n-avbar .navbar_link').mouseleave(function (e){
        $(this).find('.popup-hover').css('display', 'none');
    });
    let dw = 0;
    function __resize() {
        let navbar = $('#n-avbar');
        dw = window.innerWidth;
        if (dw <= 800) {
            navbar.attr('class', 'n-avbar-mb');
            navbar.css('display', 'none');
            $('#--menu').removeClass('active_menu');
            $('--menu').css('display', 'inline-block');
        }
        else {
            navbar.attr('class', 'n-avbar');
            navbar.css('display', 'block');
            navbar.css('opacity', '100%');
            $('--menu').css('display', 'none');
        }
    }
    __resize();
    $(window).resize(function () { 
        __resize();
    });
});