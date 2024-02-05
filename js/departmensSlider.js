const swiper = new Swiper("#departmens", {
	loop: true,
	effect: "slide",

	pagination: {
		el: ".swiper-pagination",
	},
	// autoplay: {
	// 	//auto play
	// 	delay: 5000,
	// },
	loop: true,
	grabCursor: true, //grab cursor
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	touchRatio: 1.5,
	touchAngle: 180,
	grabCursor: true,
	speed: 800,
});

