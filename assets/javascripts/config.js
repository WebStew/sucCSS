/*jshint smarttabs:true, curly:false, browser:true */
/*global jQuery, $ */
	
/**
 * Configuration settings.
 * @module config
 * @title Configuration
 */
 (function() {
 
	 
	/**
	 * Configuration settings.
	 * @class config
	 * @static
	 * @namespace App
	 */
	App.config = {};
	
 }(App));
 
(function() {

	var config = App.config;
	
	/**
	 * HTML strings.
	 * @class html
	 * @for App.config
	 * @namespace App.config
	 * @static
	 */
	config.html = {
		
		/**
		 * AJAX anitmated loading GIF
		 * @property loader
		 * @namespace App.config.html
		 * @type string
		 */
		loader : '<img src="/assets/images/loading.gif" alt="Please wait while the content loads..." class="loading">'
		
	};
	
	/**
	 * Map of all the form error messages.
	 * @class errors
	 * @for App.config
	 * @namespace App.config
	 * @static
	 */
	config.errors = {
		 
		/**
		 * Please ensure you entet address line 1 of your address.
		 * @property address-1
		 * @namespace App.config.errors
		 * @type String
		 */
		'address-1': 'Please ensure you enter address line 1 of your address.',
		 
		/**
		 * Please ensure you enter your age.
		 * @property age
		 * @namespace App.config.errors
		 * @type String
		 */
		age: 'Please ensure you enter a valid age.',
		
		/**
		 * Please ensure you enter your country of residence.
		 * @property country
		 * @namespace App.config.errors
		 * @type String
		 */
		country: 'Please ensure you enter your country of residence.',
		
		/**
		 * Please ensure you enter your county.
		 * @property county
		 * @namespace App.config.errors
		 * @type String
		 */
		county: 'Please ensure you enter your county.',
		
		/**
		 * Please ensure you enter a valid email address.
		 * @property email
		 * @namespace App.config.errors
		 * @type String
		 */
		email: 'Please ensure you enter a valid email address.',
		
		/**
		 * Error!
		 * @property error
		 * @namespace App.config.errors
		 * @type String
		 */
		error: 'Error!',
		
		/**
		 * Please ensure your email addresses match.
		 * @property email-match
		 * @namespace App.config.errors
		 * @type String
		 */
		'email-match': 'Please ensure your email addresses match.',
		
		/**
		 * Please ensure you select a gender.
		 * @property gender
		 * @namespace App.config.errors
		 * @type String
		 */
		gender: 'Please ensure you select a gender.',
		
		/**
		 * Unfortunately there are {number} error(s) on the form.
		 * @property heading
		 * @namespace App.config.errors
		 * @type String
		 */
		heading: 'Unfortunately there are {number} error(s) on the form.',
		
		/**
		 * Please ensure the value matches with the above.
		 * @property match
		 * @namespace App.config.errors
		 * @type String
		 */
		match: 'Please ensure the value matches with the above.',
		 
		/**
		 * Please ensure you enter your first name.
		 * @property name-first
		 * @namespace App.config.errors
		 * @type String
		 */ 
		'name-first': 'Please ensure you enter your first name.',
		 
		/**
		 * Please ensure you enter your last name.
		 * @property name-last
		 * @namespace App.config.errors
		 * @type String
		 */ 
		'name-last': 'Please ensure you enter your last name.',
		
		/**
		 * Please ensure you enter a number.
		 * @property number
		 * @namespace App.config.errors
		 * @type String
		 */ 
		number: 'Please ensure you enter a number.',
		
		/**
		 * Please ensure you enter a password.
		 * @property password
		 * @namespace App.config.errors
		 * @type String
		 */ 
		password: 'Please ensure you enter a password.',
		
		/**
		 * Please ensure you passwords match.
		 * @property password-match
		 * @namespace App.config.errors
		 * @type String
		 */ 
		'password-match': 'Please ensure you passwords match.',
		
		/**
		 * Please ensure you enter a valid postcode.
		 * @property postcode
		 * @namespace App.config.errors
		 * @type String
		 */ 
		postcode: 'Please ensure you enter a valid postcode.',
	
		/**
		 * Please ensure you enter a value, this field is required.
		 * @property required
		 * @namespace App.config.errors
		 * @type String
		 */
		required: 'Please ensure you enter a value, this field is required.',
		
		/**
		 * Please correct the following errors and resubmit the form :
		 * @property summary
		 * @namespace App.config.errors
		 * @type String
		 */ 
		summary: 'Please correct the below errors and resubmit the form.',
		
		/**
		 * Sorry there was a technical error, please try again.
		 * @property technical
		 * @namespace App.config.errors
		 * @type 
		 */
		technical: 'Sorry there was a technical error, please try again.',
		
		/**
		 * Please ensure you select a title.
		 * @property title
		 * @namespace App.config.errors
		 * @type String
		 */
		title: 'Please ensure you select a title.',
		
		/**
		 * Please ensure you enter your town.
		 * @property town
		 * @namespace App.config.errors
		 * @type String
		 */
		town: 'Please ensure you enter your town.'
		
	};
		
	/**
	 * Regular expressions.
	 * @class patterns
	 * @for App.config
	 * @namespace App.config
	 * @static
	 */
	config.patterns = {
		
		/**
		 * Matches email address :<br><br>
		 * /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
		 * @property email
		 * @namespace App.config.patterns
		 * @type Regex
		 */
		email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
			
		/**
		 * Matches UK postcode :<br><br>
		 * /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/
		 * @property postcode
		 * @namespace App.config.patterns
		 * @type Regex
		 */
		postcode: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/,
		
	};
	
}(App));

(function() {
	
	var messages = App.config.errors;
	
	/**
	 * Configuration attributes for forms.
	 * @class forms
	 * @for App.config
	 * @namespace App.config
	 * @static
	 */
	App.config.forms = {
		
		/**
		 * Maps the custom error messages to the form validation.
		 * @class messages
		 * @for App.config.forms
		 * @namespace App.config.forms
		 * @static
		 */
		messages: {
			'address-line-1': messages['address-1'],
			age: messages.age,
			country: messages.country,
			county: messages.county,
			email: {
				email: messages.email,
				required: messages.email,
				watermark: messages.email 
			},
			'email-confirm': {
				match: messages['email-match'],
				required: messages.email,
				watermark: messages.email 
			},
			'first-name': messages['name-first'],
			gender: messages.gender,
			'last-name': messages['name-last'],
			password: messages.password,
			'password-confirm': {
				match: messages['password-match'],
				required: messages.password
			},
			'post-code': messages.postcode,
			title: messages.title,
			town: messages.town
		}
	};
	
}(App));