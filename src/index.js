const FilesystemPath = require('./filesystem-path')


if( typeof define === 'function' && define.amd ) {
	define([], () => FilesystemPath)

} else if( typeof module === 'object' && module.exports ) {
	module.exports = FilesystemPath

}
