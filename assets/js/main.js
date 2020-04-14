$(document).ready(function(){
 //start of validation singnip3 form

 $('.signuppage-btn').click(function(){
    var name = $('#step3-name').val();
    var pass = $('#step3-password').val();
    if(name == ''){
        var errtext = ' نام و نام خانوادگی را وارد کنید'
        $('#name-err').append(errtext) 
       return false
    }
    

    if(pass == ''){
        var errtext = ' کد را وارد کنید'
        $('#pass-err').append(errtext) 
       return false
    }
   
})

//end of validation singnip3 form


//start of validation singnip2 form

    $('.signuppage-btn').click(function(){
        var code = $('#register-code').val();
        if(code == ''){
            var errtext = ' کد را وارد کنید'
            $('.err').append(errtext) 
           return false
        }
        
    })

//end of validation singnip2 form
    
//start of validation singnip1 form

    $('.signuppage-btn').click(function(){
        var phone = $('#signup-phone').val();
        if(phone == ''){
            var errtext = 'شماره موبایل را وارد کنید'
            $('.err').append(errtext) 
           return false
        }
        
    })

 //end of validation singnip1 form
    
//start of validation login form

    $('.loginpage-btn').click(function(){
        var phone = $('#loginform-phone').val();
        var pass = $('#loginform-pass').val();
        if(phone == ''){
            var errtext = 'شماره موبایل را وارد کنید'
            $('#phone-err').append(errtext) 
           return false
        }
        if(pass == ''){
            var errtext = 'رمز  را وارد کنید'
            $('#pass-err').append(errtext) 
           return false
        }
    })

//start of validation login form
    
    
 //start of humburger menu
    $(document).ready(function(){
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });
    //end of humburger menu
    

//start of cloning primary menu in humburger menu

    var primaryMenu = $('.primary-menu').clone();
    $(primaryMenu).addClass('primary-menu-res');
    $(primaryMenu).addClass('order-2');
    $('.primary-menu-container').append(primaryMenu);
    
    //start of cloning primary menu in humburger menu

    //start of overlay menu
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('navbar-return')
        $('.menu-overlay').toggleClass('menu-overlay-show')

    })
    $('.menu-overlay').click(function(){
        $(this).toggleClass('menu-overlay-show')
        $('.navbar-collapse').toggleClass('navbar-return')
    })
    //end of overlay menu

    //start of paly video in details

    $('.video-play-tog').click(function(){
        var myVideo =   $('.main');
        if (myVideo.get(0).paused) {
            myVideo.get(0).play(); 
            myVideo.attr('controls' ,'controls')
            myVideo.css('z-index' , '10000')
            $('.details-video-item').fadeOut();
            $('.watermark').fadeOut();

          }
     
       
    })



    //end of play video in details

    //start of first sldier
    $('.owl-bestofsell-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img class='owl-nav-img' src='assets/img/PNG/ic-chevron-left-dark.png'>","<img class='owl-nav-img' src='assets/img/PNG/ic-chevron-right-dark.png'>"],
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    //end of first sldier 


    //start of second sldier
    $('.owl-bestofsell-cards').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        rtl:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
    //end of second sldier


    //start of change bookmark color in details page
    $('.details-bookmark-img').click(function(){
        var src = ($(this).attr("src") === "assets/img/PNG/ic-bookmark-dark.png")
    ? "assets/img/PNG/ic-bookmarked-accent.png" 
    : "assets/img/PNG/ic-bookmark-dark.png";
$(this).attr("src", src);
    })
    //end of change bookmark color in details page


   //start of change bookmark color in details page

$('.item-bookmark-img').click(function(){
    var src = ($(this).attr("src") === "assets/img/PNG/ic-bookmark-dark.png")
    ? "assets/img/PNG/ic-bookmarked-accent.png" 
    : "assets/img/PNG/ic-bookmark-dark.png";
$(this).attr("src", src);
})
//end of change bookmark color in details page

    //start of search item slider
    $('.owl-search-result').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:false,
        autoplayHoverPause:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    //end of search item slider


    //start of details owl carousel
    $('.details-owl').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        navText: ["<img class='owl-details-nav' src='assets/img/PNG/ic-chevron-left-dark.png'>","<img class='owl-details-nav' src='assets/img/PNG/ic-chevron-right-dark.png'>"],
        responsive:{
            0:{
                items:3
            },
            350:{
                items:4
            },
            500:{
                items:5
            },
            769:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    //end of details owl carousel


    //start of loading progress
$('.load-more').click(function(){
    $('.loading-more').css('display' , 'block')

    $(this).css('display' , 'none');
})
    //end of of loading progress



    //change image thumb and main image in details page
        $('.details-img-thumb').click(function(){
            let srcval=  $(this).attr('src');
            $('.details-main-img .main').attr('src'  , srcval)
            
        })
     //change image thumb and main image in details page


})



var timer2 = "3:00";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);