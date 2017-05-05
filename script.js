
    $(document).ready(function(){    
      // scroll is still position
        	var scroll = $(document).scrollTop();
			var headerHeight = $('.header-container').outerHeight();
			//console.log(headerHeight);
			
			$(window).scroll(function() {
				// scrolled is new position just obtained
				var scrolled = $(document).scrollTop();
								
				// optionally emulate non-fixed positioning behaviour
			
				if (scrolled > headerHeight){
					$('.header-containerr').addClass('off-canvas');
				} else {
					$('.header-container').removeClass('off-canvas');
				}

			    if (scrolled > scroll){
			         // scrolling down
					 $('.header-container').removeClass('fixed');
			      } else {
					  //scrolling up
					  $('.header-container').addClass('fixed');
			    }				
				 
				scroll = $(document).scrollTop();	
			 });
    
    
 	});
