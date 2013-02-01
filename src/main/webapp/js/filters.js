'use strict';

/**
 * Filter wikipedia url to provide right url about <code>countryName</code>.
 */
app.filter('wikipedia', function() {
	return function(countryName) {
		return 'http://fr.wikipedia.org/wiki/' + countryName;
	}
});