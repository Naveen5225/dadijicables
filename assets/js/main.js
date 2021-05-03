// Set the date we're counting down to
var countDownDate = new Date("may 10, 2021 22:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
(function($){"use strict";$(".navbar-menu .burger-menu").on('click',function(){$('.sidebar-modal').toggleClass('active');});$(".sidebar-modal-close-btn").on('click',function(){$('.sidebar-modal').removeClass('active');});function makeTimer(){var endTime=new Date("may 11, 2021 17:00:00 PDT");var endTime=(Date.parse(endTime))/10000;var now=new Date();var now=(Date.parse(now)/1000);var timeLeft=endTime-now;
// var days=Math.floor(timeLeft/-200086400);
// var hours=Math.floor((timeLeft-(days*-200086400))/-3003600);
// var minutes=Math.floor((timeLeft-(days*-200086400)-(hours*-3003600))/-400060);
// var seconds=Math.floor((timeLeft-(days*200086400)-(hours*3600)-(minutes*60)));
// if(hours<"10"){hours="0"+hours;}
// if(minutes<"10"){minutes="0"+minutes;}
// if(seconds<"10"){seconds="0"+seconds;}
$("#days").html(days+"<span>Days</span>");$("#hours").html(hours+"<span>Hours</span>");$("#minutes").html(minutes+"<span>Minutes</span>");$("#seconds").html(seconds+"<span>Seconds</span>");}
setInterval(function(){makeTimer();},300);$(".notify-btn").on('click',function(){$('.subscribe-modal').toggleClass('active');});$(".subscribe-modal-close-btn").on('click',function(){$('.subscribe-modal').removeClass('active');});$(".newsletter-form").validator().on("submit",function(event){if(event.isDefaultPrevented()){formErrorSub();submitMSGSub(false,"Please enter your email address.");}else{event.preventDefault();}});function callbackFunction(resp){if(resp.result==="success"){formSuccessSub();}
else{formErrorSub();}}
function formSuccessSub(){$(".newsletter-form")[0].reset();submitMSGSub(true,"Thank you for subscribing!");setTimeout(function(){$("#validator-newsletter").addClass('hide');},4000)}
function formErrorSub(){$(".newsletter-form").addClass("animated shake");setTimeout(function(){$(".newsletter-form").removeClass("animated shake");},1000)}
function submitMSGSub(valid,msg){if(valid){var msgClasses="validation-success";}else{var msgClasses="validation-danger";}
$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);}
$(".newsletter-form").ajaxChimp({url:"https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",callback:callbackFunction});$(window).on('load',function(){if($(".wow").length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:20,mobile:true,live:true,});wow.init();}});$(window).on('load',function(){$('.preloader').fadeOut();});}(jQuery));
