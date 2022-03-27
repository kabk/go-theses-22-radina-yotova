var controller = new ScrollMagic.Controller();

			new ScrollMagic.Scene({
			// triggerElement: "#reveal1",
			triggerElement: "#triggerReveal0",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal0", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			// triggerElement: "#reveal1",
			triggerElement: "#triggerReveal1",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal1", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal2",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal2", "visible") // add class to reveal
			.addTo(controller);


			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal3",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal3", "visible") // add class to reveal
			.addTo(controller);


			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal4",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal4", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal5",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal5", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal6",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal6", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal7",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal7", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal8",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal8", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal9",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal9", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal10",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal10", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal11",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal11", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal12",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal12", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal13",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal13", "visible") // add class to reveal
			.addTo(controller);


			new ScrollMagic.Scene({
			triggerElement: "#triggerReveal14",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal14", "visible") // add class to reveal
			.addTo(controller);


var popupzero = $('#reveal0');
var popup = $('#reveal1');
var popuptwo = $('#reveal2');
var popupthree = $('#reveal3');
var popupfour = $('#reveal4');
var popupfive = $('#reveal5');
var popupsix = $('#reveal6');
var popupseven = $('#reveal7');
var popupeight = $('#reveal8');
var popupnine = $('#reveal9');
var popupten = $('#reveal10');
var popupeleven = $('#reveal11');
var popuptwelve = $('#reveal12');
var popupthirteen = $('#reveal13');
var popupfourteen = $('#reveal14');



	$( '.crosszero' ).click(function() {
	  	// popup.css('display', 'none');
		  popupzero.removeClass('visible');

		console.log("click reveal 1")
	});

	$( '.cross' ).click(function() {
	  	// popup.css('display', 'none');
		  popup.removeClass('visible');

		console.log("click reveal 1")
	});
	
	$( '.crosstwo' ).click(function() {
		// popuptwo.css('display', 'none');
		popuptwo.removeClass('visible');

	});

	$( '.crossthree' ).click(function() {
		// popupthree.css('display', 'none');
		popupthree.removeClass('visible');

	});

	$( '.crossfour' ).click(function() {
		// popupfour.css('display', 'none');
		popupfour.removeClass('visible');

	});

	$( '.crossfive' ).click(function() {
		// popupfive.css('display', 'none');
		popupfive.removeClass('visible');

	});

	$( '.crosssix' ).click(function() {
		// popupsix.css('display', 'none');
		popupsix.removeClass('visible');

	});

	$( '.crossseven' ).click(function() {
		// popupsix.css('display', 'none');
		popupseven.removeClass('visible');

	});

	$( '.crosseight' ).click(function() {
		// popupsix.css('display', 'none');
		popupeight.removeClass('visible');

	});

	$( '.crossnine' ).click(function() {
		// popupsix.css('display', 'none');
		popupnine.removeClass('visible');

	});

	$( '.crossten' ).click(function() {
		// popupsix.css('display', 'none');
		popupten.removeClass('visible');

	});

	$( '.crosseleven' ).click(function() {
		// popupsix.css('display', 'none');
		popupeleven.removeClass('visible');

	});

	$( '.crosstwelve' ).click(function() {
		// popupsix.css('display', 'none');
		popuptwelve.removeClass('visible');
	});
	

	$( '.crossthirteen' ).click(function() {
		// popupsix.css('display', 'none');
		popupthirteen.removeClass('visible');
	});

	$( '.crossfourteen' ).click(function() {
		// popupsix.css('display', 'none');
		popupfourteen.removeClass('visible');
	});

