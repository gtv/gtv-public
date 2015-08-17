document.documentElement.className = 'js';
// Thumb images End
//carousel roundup list view
function xload() {
	$('.carousel.roundup-list-view .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	});
	jQuery('.mosaic-view').each(function(){
	   if(jQuery(this).attr('data-scroll') === 'true'){
	       jQuery(this).mCustomScrollbar({
	           horizontalScroll:true,
	           theme:"dark",
	           scrollInertia:75,
	           advanced:{
	               autoExpandHorizontalScroll:true
	           },
	           	callbacks:{
	               	whileScrolling: function(){
	                   	echo.init({
	                   	    offset: 100,
	                   	    throttle: 250,
	                   	    unload: false
	                   	});
	               	}
	           	}
	           
	       });
	   }else if(jQuery(this).attr('data-scroll') === 'false'){
	       jQuery(this).mCustomScrollbar("destroy");
	   }
	});
	jQuery(".ts-featured-area .nav-tabs.is-scrollable, .scroll-view").mCustomScrollbar({
		horizontalScroll:true,
		theme:"dark",
		scrollInertia:75,
		advanced:{
			autoExpandHorizontalScroll:true
		},
		callbacks:{
			onScroll: function(){
			}
		}
	});
	jQuery(window).on('resize orientationchange', function(){
		mosaicViewScroller();
		setScrollContainerWidth();
	});
	setScrollContainerWidth();
    ts_video_view();
    setTimeout(function(){
        jQuery('.mosaic-view').mCustomScrollbar("update");
    },100);
    mosaicViewScroller();
}
$(function () {  
  $('.popover-html').popover({ html : true, trigger: "hover" });
  var popoverHide = $.fn.popover.Constructor.prototype.hide;
    $.fn.popover.Constructor.prototype.hide = function() {
        if (this.options.trigger === "hover" && this.tip().is(":hover")) {
            var that = this;
            // try again after what would have been the delay
            setTimeout(function() {
                return that.hide.call(that, arguments);
            }, that.options.delay.hide);
            return;
        }
        popoverHide.call(this, arguments);
    };
})
var $dc = $(document);
$dc.ready(function($) {
    $dc.on('touchstart click', "#click-more", function(event) {
	   if($('.thumbnails-carousel').hasClass('caurosel-expand')){
			$('.thumbnails-carousel').removeClass('caurosel-expand');
		} else {
			$('.thumbnails-carousel').addClass('caurosel-expand');
		}
		if($('span#click-more i').hasClass('fa-angle-down')){
			$('span#click-more i').removeClass('fa-angle-down').addClass('fa-angle-up');
		} else {
			$('span#click-more i').removeClass('fa-angle-up').addClass('fa-angle-down');
		}
    });
});
jQuery(function ($) {
      $('.navbar-toggle').click(function() {
	   	$('#wrapper').addClass('menu-expand');
		$('body').addClass('menu-expand');
	 });
	  $('.canvas-close').click(function() {
	   	$('#wrapper').removeClass('menu-expand');
		$('body').removeClass('menu-expand');
	 });
	 
	 $('textarea').click(function() {
	   	$('.field-hide').addClass('field-display');
		$('.submit-hide').addClass('field-display');
	 });	 
});
var $dc = $(document);
$dc.ready(function($) {
    $dc.on('touchstart click', ".share-more", function(event) {
	   if($('.social-share-block').hasClass('show')){
			$('.social-share-block').removeClass('show');
		} else {
			$('.social-share-block').addClass('show');
		}		
    });
});
var $dc = $(document);
$dc.ready(function($) {
    $dc.on('touchstart click', ".video-content-open", function(event) {
	   if($('.description').hasClass('show')){
			$('.description').removeClass('show');
		} else {
			$('.description').addClass('show');
		}		
    });
});
$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
function setScrollContainerWidth() {
    jQuery('.scroll-container').each(function(){
        // Set this element
        var element = jQuery(this);

        // Get the width of the parent.
        var elementParent = jQuery(element).parent().parent().parent().parent();
        var parentWidth = jQuery(elementParent).width();
        
        // Check if grid or thumb view
        if ( jQuery(elementParent).hasClass('ts-grid-view') && jQuery(window).width() > 1024 || jQuery(elementParent).hasClass('ts-thumbnail-view') && jQuery(window).width() > 1024 ) {

            // Set the width of the scroller.
            if ( jQuery(elementParent).hasClass('no-gutter') ) {
                jQuery(element).css('width', parentWidth);
            } else{
                jQuery(element).css('width', parentWidth + 39);
            }
        } else {
            jQuery(element).css('width', 1200);
        }
        // Check if mosaic view
        if ( jQuery(elementParent).find('.mosaic-view').length > 0 && jQuery(window).width() < 1024 ) {
            jQuery(element).css('width', 800);
        }
    });
}
function mosaicViewScroller(){
    //Check if mosaic view have scroll
    jQuery('.mosaic-view').each(function(){
        if(jQuery(this).attr('data-scroll') === 'true'){
            jQuery(this).mCustomScrollbar({
                    horizontalScroll: true,
                    theme: "dark",
                    scrollInertia: 75,
                    advanced:{
                        autoExpandHorizontalScroll:true
                    },
                    callbacks:{
                        onScroll: function(){
                        }
                    }
                });
        }
    });
}
function ts_video_view(){
    jQuery('.ts-tab-subnav .nav-tabs li').on('click', function(){
        jQuery('.ts-tab-subnav .nav-tabs li.active').removeClass('active');
        setTimeout(function(){
            resizeVideo();
        },400);
    });
    jQuery("li.has-submenu[role='item']").on("click", function (e){
        e.preventDefault();
        jQuery(this).toggleClass('openned');
    });  
    jQuery(".ts-tab-subnav .nav-tabs.is-scrollable, .scroll-view").mCustomScrollbar({
        horizontalScroll:true,
        theme:"dark",
        scrollInertia:75,
        advanced:{
            autoExpandHorizontalScroll:true
        },
        callbacks:{
            onScroll: function(){
            }
        }
    });
}