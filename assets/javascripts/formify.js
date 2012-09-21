/*jshint smarttabs:true */
/*global $, App, jQuery */

/**
 * Set default options for the form validation global behaviour.
 * @module validation
 * @title jQuery Validator
 * @requires config, utilities
 */
(function() {	

	/**
	 * Validation library.
	 * @class jQuery.validator
	 * @static
	 * @namespace jQuery
	 */	

	/**
	 * Set options for the validator global behaviour.
	 * @class jQuery.validator.defaults
	 * @for jQuery.validator
	 * @static
	 * @namespace $.validator
	 */
	$.extend($.validator.defaults, {
	
		/**
		 * Hides error message within the element label and hides offscreen.
		 * @method errorPlacement
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @param {Object} error HTML element within defined error message.
		 * @param {Object} element HTML element that did not pass the validation rule.
		 * @static
		 */
		errorPlacement: function(error, element) {
		
			$('label[for='+element.attr('id')+']').prepend(error.addClass('access'));
			
		},
		
		/**
		 * When form is submitted as invalid. Appends an error summary at the top of the form 
		 * updates the hash location of the window to notify a user the form submission failed.
		 * @method invalidHandler
		 * @for jQuery.validator.defaults
		 * @namespace $.validator.defaults
		 * @param {Object} form HTML element of the form that was submitted.
		 * @param {Object} validator Validator object of current form.
		 * @static
		 */
		invalidHandler: function(validate, validator) {
		
			var errors = App.config.errors,
				form = $(validator.currentForm),
				formId = 'form-errors-'+validator.numberOfInvalids(),
				li = '<li><a href="#{id}">{error}</a></li>',
				title = errors.heading.replace(/\{number\}/, validator.numberOfInvalids()),
				view = '<div class="error-summary" id="' + formId + '">';
				view +=		'<h2><span class="access">' + errors.error + ' - </span>' + title + '</h2>';
				view +=		'<p>' + errors.summary + '</p>';
				view +=		'<ul class="list-plain"></ul>';
				view +=	'</div>';
				view = $(view);
				
			// If no summary is find first focusable and exit
			if (form.hasClass('no-summary')) {
				form.find(':focusable').eq(0).focus();
				return;
			}
	
			// Loop through the error messages and create the error list
			$.each(validator.invalidElements(), function() {
				
				var error = li,
					element = $(this),
					id = element.attr('id'),
					name= element.attr('name');
				
				// Update the error list view and prepend to view
				error = error.replace(/\{id\}/, id);
				error = error.replace(/\{error\}/, validator.invalid[name]);
				error = $(error);
				
				// Click an error sends a user to the errored field
				error.children('a').bind('click', function(e) {
					e.preventDefault();
					$($(this).attr('href')).focus();
				});
				
				view.find('ul').append(error);
			});
			
			// Remove the notification error box and update
			form.prev('.error-summary').remove();
			form.before(view);
			
			// Focus a user to the summary error box
			window.location.hash = formId;
			
		},
		
		/**
		 * Form element is valid, remove any HTML, events and classes related to error state.
		 * @method success
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @param {Object} error HTML label element of the valid element.
		 * @static
		 */
		success: function(error) {
				
			// Remove any previous errors
			$('#'+error.attr('for')).closest('.form-row').find('.error-message').remove();

		},
			
		/**
		 * Retains default functionality from validation. Additionally adds error span above input and label.
		 * Able to configure errors messages to show in input field with additional classes error-inline.
		 * @method showErrors
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @param {Object} list The list of error messages.
		 * @param {Array} map List of mapped object error.
		 * @static
		 */
		showErrors: function(list, map) {
			
			// Keep the default functionality
			this.defaultShowErrors();
			
			// Loop through the error map
			$.each(map, function() {
			
				var row = $(this.element).closest('.form-row');
			
				// Remove any previous errors and add new one
				row.find('.error-message').remove();
				row.prepend('<span class="error-message">'+this.message+'</span>');		
			});
		},
		
		/**
		 * Error element is a span.
		 * @property errorElement
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type String
		 */
		errorElement: 'span',
		
		/**
		 * Error class is error.
		 * @property errorClass
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type String
		 */
		errorClass: 'error',
		
		/**
		 * Sets the focus invalid property.
		 * @property focusInvalid
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type Boolean
		 */
		focusInvalid: false,
		
		/**
		 * Stop the framework from validating element on blur.
		 * @property onfocusout
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type Boolean
		 */
		onfocusout: false,
		
		/**
		 * Stop the submit validation from firing automatically.
		 * We want to control this ourselves within App.validate.init()
		 * @property onsubmit
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type Boolean
		 */
		onsubmit: false,
		
		/**
		 * Valid class is valid.
		 * @property validClass
		 * @for jQuery.validator.defaults
		 * @namespace jQuery.validator.defaults
		 * @type String
		 */
		validClass: 'valid'
		
	});

	/**
	 * Is valid postcode.
	 * @method addMethod
	 * @for jQuery.validator
	 * @namespace jQuery.validator
	 * @param {String} value Value of form element.
	 * @return {Boolean}
	 * @static
	 */
	$.validator.addMethod('postcode', function(value) {
	
		var valid = true;
		
		if (value !== '') valid = App.config.patterns.postcode.test(value);
		
		return valid;
		
	}, App.config.errors.postcode);
	
	/**
	 * Is valid email address.
	 * @method email
	 * @for jQuery.validator
	 * @namespace jQuery.validator
	 * @param {String} value Value of form element.
	 * @param {Object} element The HTML form element.
	 * @return {Boolean}
	 * @static
	 */
	$.validator.addMethod('email', function(value, element) {
	
		var valid = true;
		
		if (value !== '' && value !== $(element).attr('data-watermark')) valid = App.config.patterns.email.test(value);
		
		return valid;
		
	}, App.config.errors.email);
	
	/**
	 * Is a number.
	 * @method number
	 * @for $.validator
	 * @namespace $.validator
	 * @param {String} value Value of form element.
	 * @param {Object} element The HTML form element.
	 * @return {Boolean}
	 * @static
	 */
	$.validator.addMethod('number', function(value, element) {
	
		var valid = true;
		
		if (value !== '' && value !== $(element).attr('data-watermark')) valid = !isNaN(value);
		
		return valid;
		
	}, App.config.errors.number);
	
	/**
	 * Ensure the value does not match the watermark if present.
	 * @method watermark
	 * @for jQuery.validator
	 * @namespace jQuery.validator
	 * @param {String} value Value of form element.
	 * @param {Object} element The HTML form element.
	 * @return {Boolean}
	 * @static
	 */
	 $.validator.addMethod('watermark', function(value, element) {
	 
		var valid = true,
			field = $(element);
		
		// Only invalidate if the field is required
		if (field.hasClass('required') && value === field.attr('data-watermark')) valid = false;
		
		return valid;
		
	}, App.config.errors.required);
	
	/**
	 * Ensure that the current element matches the value of specified other.
	 * Element must have data-match="[ID]" of element to match value with.
	 * @method match
	 * @for jQuery.validator
	 * @namespace jQuery.validator
	 * @param {String} value Value of form element.
	 * @param {Object} element The HTML form element.
	 * @return {Boolean}
	 * @static
	 */
	 $.validator.addMethod('match', function(value, element) {
	 
		var valid = true,
			field = $(element);
			
	 	if (value !== '' && value !== field.attr('data-watermark')) valid = value === $('#'+field.attr('data-match')).val() ? true : false;
	 	
		return valid;
		
	}, App.config.errors.match);
	
	/**
	 * The following HTML classes have been mapped to validation methods.<br>
	 * HTML Class : email - Validates against the email rule.<br>
	 * HTML Class : postcode - Validates against the postcode rule.<br>
	 * HTML Class : telephone - Validates against the telephone rule.<br>
	 * HTML Class : watermark - Validates against the watermark rule.<br>
	 * HTML Class : match - Validates against the match rule.<br>
	 * HTML Class : letters - Validates against the letters only rule.<br>
	 * HTML Class : numbers - Validates against the numbers only rule.<br>
	 * @class $.validator.classRuleSettings
	 * @for $.validator
	 * @namespace $.validator
	 * @static
	 */
	 $.validator.addClassRules({
		
		/**
		 * Email rule is added to any element with class email.
		 * @property email
		 * @for jQuery.validator.classRuleSettings
		 * @namespace jQuery.validator.classRuleSettings
		 * @type Object
		 */
		'email': {
			email: true
		},

		/**
		 * Match rule is added to any element with class match.
		 * @property match
		 * @for jQuery.validator.classRuleSettings
		 * @namespace jQuery.validator.classRuleSettings
		 * @type Object
		 */
		'match': {
			match: true
		},
			
		/**
		 * Postcode rule is added to any element with class postcode.
		 * @property postcode
		 * @for jQuery.validator.classRuleSettings
		 * @namespace jQuery.validator.classRuleSettings
		 * @type Object
		 */
		'postcode': {
			postcode: true
		},
		
		/**
		 * Watermark rule is added to any element with class watermark.
		 * @property watermark
		 * @for jQuery.validator.classRuleSettings
		 * @namespace jQuery.validator.classRuleSettings
		 * @type Object
		 */
		 'watermark': {
			watermark: true
		}
		
	});
	
	// Overwrite the default required message
	$.extend($.validator.messages, {
		required: App.config.errors.required
	});
	
}($));

(function() {

	/**
	 * Adds the global validation rules to any form element with class validate.
	 * @class formify
	 * @static
	 * @namespace App
	 */
	App.formify = {		
	
		/**
		 * Adds the global validation rules to any form element with class validate.
		 * Attaches function for focusin and focusout events on form elements.
		 * @method init 
		 * @for App.formify
		 * @namespace App.formify
		 * @param {Object} selector Optional jQuery form element to add the validation rules to.
		 * @static
		 */
		init: function(selector) {
			
			var formify = this,
				forms = selector ? selector.find('.formify') : $('.formify');
			
			// Loop through each validate form applying the rules
			forms.each(function() {
				
				var form = $(this);
				
				// Bind the submit and reset functions
				form.on('submit', $.proxy(formify.submitForm, this));
				form.on('click', 'button[type=reset]', $.proxy(formify.resetForm, this));
				
			});

			// Bind the highlighting
			forms.on('focusin focusout', 'input, textarea, select', formify.highlight);
			
			// Add the watermarks
			forms.find('.watermark').each(function() {
			
				var watermark = $(this);
				
				if (watermark.val() === '') watermark.val(watermark.attr('data-watermark'));
				
			});
			
			// Map the custom error messages
			forms.validate({
				messages: App.config.forms.messages
			});
			
			// Add the count down text for any fields
/*
			form.find('.counter').each(function() {
				var field = $(this),
					total = field.attr('maxlength') || App.config.forms.maxlength;
				field.after('<span class="count">'+App.config.strings.characters+' <span class="total">'+total+'</span></span>');
				field.on('change keyup', App.validate.counter);
			});
*/
		},
		
		/**
		 * Invoke the jQuery validation on our form ensuring any hidden fields or expandables are open.
		 * @method submitForm
		 * @for App.formify
		 * @namespace App.formify
		 * @param {Object} e The click event.
		 * @static
		 */
		submitForm: function(e) {
		
			var form = $(this);
			
			e.preventDefault();
			
			// If the value of a watermarked field matches the watermark clear it so that it does not submit
			form.find('.watermark').each(function() {
			
				var watermark = $(this);
				
				if (watermark.val() === watermark.attr('data-watermark')) watermark.val('');
			});
			
			// Valid date our form
			form.valid();
			
			// If the form is valid, submit that baby
			if (form.validate().form()) this.submit();
		},
		
		/**
		 * Resets the form. Clearing any validation errors and resetting the watermarks if present.
		 * @method resetForm
		 * @for App.formify
		 * @namespace App.formify
		 * @param {Object} e The event that invoked the method.
		 * @static
		 */
		resetForm: function(e) {
		
			var form = $(this);
		
			if (e) e.preventDefault();
			
			// Reset the form of validation errors and default clearing
			form.validate().resetForm();
			this.reset();
			
			// Add back in the watermarks
			form.find('.watermark').each(function() {
				$(this).val($(this).attr('data-watermark')).removeClass('watermark-removed');
			});
			
			// Clear the errors messages
			form.find('.error-message').remove();
			form.prev('.error-summary').remove();
		},
		
		/**
		 * Counts down functionality for text areas. Countsdown from the HTML maxlength attribute
		 * for every character a user enters and display below the field.
		 * @method counter
		 * @for App.formify
		 * @namespace App.formify
		 * @param {Object} e The keyup or change event.
		 * @static
		 */
/*
		 counter: function(e) {
		 	var field = $(this),
		 		total = field.attr('maxlength') || App.config.forms.maxlength,
		 		remaining = total - field.val().length;
			field.next('.count').children('.total').text(remaining);
		 },
*/
		
		/**
		 * Adds or removes the watermark from the form element and validates the form rules on the field on focusout.
		 * Add a class soft validate to not validate the field on focusout.
		 * @method highlight
		 * @for App.formify
		 * @namespace App.formify
		 * @param {Object} e The focusin or focusout event.
		 * @static
		 */
		highlight: function(e) {
		
			var field = $(this),
				watermark = field.attr('data-watermark');
				
			if (e.type === 'focusout') {
			
				// Add/remove the watermark
				if (field.hasClass('watermark') && field.is('select') && field.val() === '') field.removeClass('watermark-removed');
				else if (watermark && field.val() === '') field.val(watermark).removeClass('watermark-removed');
				else if (watermark) field.addClass('watermark-removed');
				
				// Validate the value
				field.valid();
			}
			else if (e.type === 'focusin') {
			
				// Remove the watermark
				if (field.hasClass('watermark') && field.val() === watermark || field.is('select')) {
				
					if (!field.is('select')) field.val('');
					field.addClass('watermark-removed');
				}
			}
		}
	};
}(App));