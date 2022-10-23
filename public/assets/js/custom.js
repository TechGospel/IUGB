(function ($) {
	'use strict';
	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: '991',
	});

	// Sticky, Go To Top JS
	$(window).on('scroll', function () {
		// Header Sticky JS
		if ($(this).scrollTop() > 150) {
			$('.navbar-area').addClass('is-sticky');
		} else {
			$('.navbar-area').removeClass('is-sticky');
		}
	});

	// Preloader
	$(window).on('load', function () {
		$('.preloader-area').fadeOut();
	});

	//odometer js
	$('.odometer').appear(function (e) {
		var odo = $('.odometer');
		odo.each(function () {
			var countNumber = $(this).attr('data-count');
			$(this).html(countNumber);
		});
	});

	// Others Option For Responsive JS
	$('.others-option-for-responsive .dot-menu').on('click', function () {
		$('.others-option-for-responsive .container .container').toggleClass(
			'active'
		);
	});

	//* magnific popup
	$(document).ready(function () {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 100,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	});

	// Subscribe form JS
	$('.newsletter-form')
		.validator()
		.on('submit', function (event) {
			if (event.isDefaultPrevented()) {
				// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, 'Please enter your email correctly.');
			} else {
				// everything looks good!
				event.preventDefault();
			}
		});
	function callbackFunction(resp) {
		if (resp.result === 'success') {
			formSuccessSub();
		} else {
			formErrorSub();
		}
	}
	function formSuccessSub() {
		$('.newsletter-form')[0].reset();
		submitMSGSub(true, 'Thank you for subscribing!');
		setTimeout(function () {
			$('#validator-newsletter, #validator-newsletter-2').addClass(
				'hide'
			);
		}, 4000);
	}
	function formErrorSub() {
		$('.newsletter-form').addClass('animated shake');
		setTimeout(function () {
			$('.newsletter-form').removeClass('animated shake');
		}, 1000);
	}
	function submitMSGSub(valid, msg) {
		if (valid) {
			var msgClasses = 'validation-success';
		} else {
			var msgClasses = 'validation-danger';
		}
		$('#validator-newsletter, #validator-newsletter-2')
			.removeClass()
			.addClass(msgClasses)
			.text(msg);
	}

	// Input Plus & Minus Number JS
	$('.input-counter').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.on('click', function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find('input').val(newVal);
			spinner.find('input').trigger('change');
		});
		btnDown.on('click', function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find('input').val(newVal);
			spinner.find('input').trigger('change');
		});
	});

	// Count Time
	function makeTimer() {
		var endTime = new Date('September 20, 2023 17:00:00 PDT');
		var endTime = Date.parse(endTime) / 1000;
		var now = new Date();
		var now = Date.parse(now) / 1000;
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < '10') {
			hours = '0' + hours;
		}
		if (minutes < '10') {
			minutes = '0' + minutes;
		}
		if (seconds < '10') {
			seconds = '0' + seconds;
		}
		$('#days').html(days + '<span>Days</span>');
		$('#hours').html(hours + '<span>Hours</span>');
		$('#minutes').html(minutes + '<span>Minutes</span>');
		$('#seconds').html(seconds + '<span>Seconds</span>');
	}
	setInterval(function () {
		makeTimer();
	}, 0);

	// AJAX MailChimp JS
	$('.newsletter-form').ajaxChimp({
		url: '', // Your url MailChimp
		callback: callbackFunction,
	});

	// Go to Top
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	// Click Event
	$('.go-top').on('click', function () {
		$('html, body').animate({ scrollTop: '0' }, 500);
	});

	//Year
	try {
		document.getElementById('year').innerHTML = new Date().getFullYear();
	} catch (err) {}
})(jQuery);

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('sanu_theme', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('sanu_theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('sanu_theme') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-light');
			document.getElementById('slider').checked = true;
		}
	})();
} catch (err) {}
