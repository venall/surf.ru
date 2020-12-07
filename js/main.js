$(function(){
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		// useCSS:true,
		prevArrow:'<img src="img/arrows-left.svg" class="slider-arrows slider-arrows__left" alt="">',
		nextArrow:'<img src="img/arrows-right.svg" class="slider-arrows slider-arrows__right" alt="">',
		asNavFor: '.slider-dotshead',

	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
		responsive: [
		    {
		      breakpoint: 961,
		      settings: "unslick"
		    },
		] 
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:'<img src="img/arrows-left.svg" class="slider-arrows slider-arrows__left" alt="">',
		nextArrow:'<img src="img/arrows-right.svg" class="slider-arrows slider-arrows__right" alt="">',
		asNavFor: '.slider-map',
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 1210,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
			 {  breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
			   breakpoint: 720,
		      settings: {
		        slidesToShow: 1,
		        centerMode: true,
		      }
		    },
		    {
			   breakpoint: 426,
		      settings: {
		        slidesToShow: 1,
		        centerMode: false,
		      }
		    },
		]

	});
	$('.slider-map').slick({
		slidesToShow: 8, 
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 1103,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
			 {
			   breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        centerMode: true,
		      }
		    },
		    {
			   breakpoint: 720,
		      settings: {
		        slidesToShow: 1,
		        centerMode: true,
		      }
		    },
		]
	});
	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow:'<img src="img/arrows-left.svg" class="slider-arrows slider-arrows__left" alt="">',
		nextArrow:'<img src="img/arrows-right.svg" class="slider-arrows slider-arrows__right" alt="">',
	});





	    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    $('.quantity-button').on('click', function(){
    	let  summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    	$('.summ').html('$' + summ);
    });
    let  summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);

    $(".surfboard-box__circle").on("click",function(){
    	$(this).toggleClass("active")
    });

    $(".menu-btn").on("click", function (){
    	$(".menu").toggleClass("active");
    });
    new WOW().init();
});

// var circle = document.querySelectorAll(".surfboard-box__circle");
// for (var i = 0; i < circle.lenght; i++){
// 	circle[i].onclick = function(){
// 		circle.classList.toggle("active");
// 	};
// }

// circle.onclick = function(){
// 	circle.classList.toggle("active");
// }
// alert(circle);
// document.addEventListener("DOMContentLoaded", ready);
// var btns = document.getElementsByClassName("quantity-button");
// var btns = document.querySelector(".bt");
// var nights = document.querySelector(".nights");
// var nightsV = document.querySelector(".nights").value; // получение value
// var summ = document.querySelector(".summ");
// var summN = document.querySelector(".summ").dataset.nights; // получение дата атрибута
// var summG = document.querySelector(".summ").dataset.guests; // получение дата атрибута
// var guests = document.querySelector(".guests");
// var guestsV = document.querySelector(".guests").value;

// function btn(){
// 	var r = nightsV * summN + (guestsV - 1) * summG;
// 	summ.innerText = r;
// }
// btn()
// btns.onclick = function(){
// 	// btn()
// 	// alert("hi");
// 	// guests.setAttribute('value', 9);

// 	let r = nightsV * summN + (guestsV - 1) * summG;
// 	summ.innerText = "$" + r;
// 	alert("hi");
// 	// document.write(guestsV);
// }
// btns.onclick = function () {
// 	// document.write(summG);
// }

// alert('Hello, world');

// var h = "sam";
// var q = 3;
// document.write("hello " + h + q);
// // alert(h);

// var alpha = "ABCDEFG";
// var length = alpha.length;
// document.write("<br>" + length);

// var result = alpha.substring(1,5); //отсчёт начинается с 0, ыв конце цифра не входит
// document.write("<br>" + result);

// var a1 = ["dog", "cat", 3, 1, false];
// // a1[0] = "cat";
// // a1[1] = "dog";
// // a1[2] =  95;
// // a1[5] = true;
// document.write("<br>" + a1[0]);

// function sayHello(){
// 	document.write("<br>darova");
// }
//  sayHello();

