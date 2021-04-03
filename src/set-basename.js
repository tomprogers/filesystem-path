const getExt = require('./get-ext')
const parseDFS = require('./parse-dfs')


module.exports = function setBasename( directory, filename, sep, newBasename = '' ) {
	if( typeof newBasename !== 'string' )
		throw new TypeError('newBasename must be a string')

	return parseDFS(
		directory,
		newBasename + getExt(directory, filename, sep),
		sep
	)
}
