const FilesystemPath = require('./filesystem-path')

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory()
	}
}(function () {
	// Just return a value to define the module export.
	// This example returns an object, but the module
	// can return a function as the exported value.
	return FilesystemPath
}))
