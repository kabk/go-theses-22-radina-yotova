				document.addEventListener("DOMContentLoaded", function() {
				  var lazyloadImages;    

// 				  if ("IntersectionObserver" in window) {
// 				    lazyloadImages = document.querySelectorAll(".reveal-img");

// 				    var imageObserver = new IntersectionObserver(function(entries, observer) {
// 				      entries.forEach(function(entry) {
// 				        if (entry.isIntersecting) {
// 				          var image = entry.target;

// 						  var container = image.parentNode.parentNode;
// 				          if ( container.tagName.toLowerCase( ) == 'figure' ) 
// 				          	container = container.parentNode;
// console.log( '***' )
// 						  console.log( container.classList.contains( 'visible' ) );
// 						  if ( container.classList.contains( 'visible' ) ) {
// 				            image.src = image.dataset.src;
// 				            image.classList.remove("reveal-img");
// 				            imageObserver.unobserve(image);
// 			     	 	  }
// 				        }
// 				      });
// 				    });

// 				    document.addEventListener("scroll", function( ) {
// 				    	console.log( ' **********')
	
// 					} );


// 						lazyloadImages.forEach(function(image) {
// 					      imageObserver.observe(image);
// 					    });
// 				  } else {  
				    var lazyloadThrottleTimeout;
				    
				    function lazyload () {
				      if(lazyloadThrottleTimeout) {
				        clearTimeout(lazyloadThrottleTimeout);
				      }    

				      lazyloadThrottleTimeout = setTimeout(function() {
				      	lazyloadImages = document.querySelectorAll(".reveal-img");
				      	console.log( lazyloadImages );
				        var scrollTop = window.pageYOffset;
				        lazyloadImages.forEach(function(img) {

						  var container = img.parentNode.parentNode;
				          if ( container.tagName.toLowerCase( ) == 'figure' ) 
				          	container = container.parentNode;

 						  if ( container.classList.contains( 'visible' ) ) {

				            if(img.offsetTop < (window.innerHeight + scrollTop)) {
				              img.src = img.dataset.src;
				              img.classList.remove('reveal-img');
				            }
				        }
				        });
				        if(lazyloadImages.length == 0) { 
				          document.removeEventListener("scroll", lazyload);
				          window.removeEventListener("resize", lazyload);
				          window.removeEventListener("orientationChange", lazyload);
				        }
				      }, 20);
				    }

				    document.body.addEventListener("scroll", lazyload);
				    window.addEventListener("resize", lazyload);
				    window.addEventListener("orientationChange", lazyload);
				  // /}
				})

 				//  $('lazyreveal').on('load', function(){
					// $(this).addClass('loaded');
				 // });