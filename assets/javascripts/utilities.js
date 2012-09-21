/*jshint smarttabs:true, curly:false, browser:true */
/*global jQuery, $, App */

/**
 * Utilities functions.
 * @module utilities
 * @title Utility functions
 * @requires config
 */
(function() {

	/**
	 * Utilities.
	 * @class utilities
	 * @static
	 * @namespace App
	 */
	 App.utilities = {		
	 
	 	/**
		 * Delay a function.
		 * @method delay
		 * @for utility
		 * @namespace App.utilities
		 * @param {Function} callback The function to execute after the delay.
		 * @param {Integer} ms The delay in milliseconds.
		 * @static
		 */
		delay: (function() {
		
			var timer = 0;
			
			return function(callback, ms) {
			
				clearTimeout(timer);
				timer = setTimeout( callback, ms );
			};
		})(),
	 
	 	/**
	 	 * Initiates an module. This function is bound to a custom App:dependency event on the window.
	 	 * @method initModule
	 	 * @for App.utilities
	 	 * @namespace App.utilities
	 	 * @param {e} Object The App:dependency event.
	 	 * @param {module} String The module that is required to initiate.
	 	 * @param {selector} Object The jQuery object which holds the HTML of the module.
	 	 * @static
	 	 */
	 	initModule: function(e, module, selector) {
			if (App[module]) App[module].init(selector);
	 	},
			
		/**
		 * Format the first letter to uppercase on a string.
		 * @method upperCaseFirst
		 * @for App.utilities
		 * @namespace App.utilities
		 * @param {String} string The string to format.
		 * @return {String} The formatted string.
		 * @static
		 */
		upperCaseFirst: function(string) {
		
		    return string.charAt(0).toUpperCase() + string.slice(1);
		},
			
		/**
		 * Format the first letter of each word to uppercase on a string.
		 * @method capitalise
		 * @for App.utilities
		 * @namespace App.utilities
		 * @param {String} string The string to format.
		 * @return {String} The formatted string.
		 * @static
		 */
		capitalise: function(string) {
		
			var i = 0,
				words = string.split(' '); 
			
			for (i; i < words.length; i += 1) { 
			
				var word = words[i],
					first = word.substr(0,1),
					remainder = word.substr(1, word.length -1);
					
					words[i] = first.toUpperCase() + remainder;
			} 
			
			return words.join(' '); 
		}
	};
		
	/**
	 * Check whether a jQuery object contains text string.
	 * @method $(selector).Contains
	 * @for App.utilities
	 * @namespace jQuery
	 * @param {Object} a The HTML object to search within.
	 * @param {Integer} i The number...
	 * @param {Array} m An Array of text strings to match against.
	 * @return {Oject} jQuery object(s) that contain the text string.
	 * @static
	 */
	jQuery.expr[':'].Contains = function(a, i, m) {
		
		return (a.textContent || a.innerText || '').toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
}(App));