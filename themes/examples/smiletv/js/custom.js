document.documentElement.className = 'js';
// Thumb images End
//carousel roundup list view
function xload(){
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
