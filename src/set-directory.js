const parseDFS = require('./parse-dfs')

module.exports = function setDirectory( directory, filename, sep, newDirectory ) {
	if( typeof newDirectory !== 'string' ) throw new TypeError('newDirectory must be a string')

	return parseDFS( newDirectory, filename, sep )
}
