const getDirectory = require('./get-directory')
const getExt = require('./get-ext')
const parseDFS = require('./parse-dfs')


module.exports = function setBasename( absolute, folders, filename, sep, newBasename = '' ) {
	if( typeof newBasename !== 'string' )
		throw new TypeError('newBasename must be a string')

	return parseDFS(
		getDirectory( absolute, folders, filename, sep),
		newBasename + getExt(absolute, folders, filename, sep),
		sep
	)
}
