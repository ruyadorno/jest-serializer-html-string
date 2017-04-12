'use string';

var html = require('html');
var isHtml = require('is-html');

module.exports = {
	test: function (val) {
		return isHtml(val);
	},
	print: function (val) {
		return html.prettyPrint(val, {
			'indent_size': 2, // eslint-disable-line quote-props
			unformatted: []
		});
	}
};
