/*jshint smarttabs:true, curly:false, browser:true */
/*global jQuery, $, App */

jQuery(function($) {

	// Fire module onload events ensuring there are no duplicates in modules array
	App.modules = {};
	$.each(modules, function(key, value) {
		
		if (!App.modules[value] && App[value]) {
			App.modules[value] = value;
			App[App.modules[value]].init();
		}
		
	});
	
	// Listen to any dependencies that need to be initiated
	$(window).on('App:dependency', App.utilities.initModule);
});