jQuery(document).ready(function() {
	var pageHeight = $(window).height();
	$('header').css({'height': pageHeight});


	$(window).resize(function() {
		var pageHeight = $(window).height();
		$('header').css({'height': pageHeight});
	});

/****************************************
			Newsletter Validation
*****************************************/
	$('#NewsletterForm').validate({
		rules: {
			NewsletterEmail: {
				required: true,
				email: true
			}
		},
		highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    	label.text('OK!').addClass('valid').closest('.control-group').addClass('success');
	    },
	    submitHandler: function(){
	    	//REPLACE your-serverside-script.php WITH YOUR SCRIPT TO RESIGTER EMAIL SUBSCRIPTION
	    	$.post('your-serverside-script.php', $('#NewsletterForm').serialize(), function(data) {
	    		$('#NewsletterFormContainer').html('<div class="alert alert-success"><p>Thanks to subscribe your email</p></div>');
	    	});
	    	return false;
    	}
	});

/****************************************
			Contact Form Validation
*****************************************/
	$('#ContactForm').validate({
		rules: {
			ContactSubject: {
				minlength: 2,
				required: true
			},
			contactemail: {
				required: true,
				email: true
			},
			contactmessage: {
				minlength: 2,
				required: true
			}
		},
		highlight: function(label) {
	    	$(label).closest('.control-group').addclass('error');
	    },
	    success: function(label) {
	    	label.text('ok!').addclass('valid').closest('.control-group').addclass('success');
	    },
	    submithandler: function(){
  $.ajax({
      type: "GET", // GET & url for json slightly different
      url: "http://XXXXXXXX.list-manage2.com/subscribe/post-json?c=?",
        data: $('#ContacForm').serialize(),
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server."); },
      success     : function(data) {
          if (data.result != "success") {

            alert("hello! i am an alert box!");
              // Something went wrong, parse data.msg string and display message
          } else {
              // It worked, so hide form and display thank-you message.
          }
      }
  });
	
    	}
	});
});

/*********************************
 * Smooth Scrolling
 ********************************/
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
