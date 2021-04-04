const parseDFS = require('./parse-dfs')


const SEP_NIX = '/'
const SEP_WIN = '\\'
const PERMITTED_SEPS = [ SEP_NIX, SEP_WIN ]

module.exports = function setSep( directory, filename, sep, newSep ) {
	if( typeof newSep !== 'string' )
		throw new TypeError('newSep must be a string')

	if( !PERMITTED_SEPS.includes(newSep) )
		throw new RangeError('newSep must be either backslash or forward-slash as a string')

	// older nodejs lacks String.prototype.replaceAll, so using a regex to convert old seps
	let escapedOldSep = sep.replace(/\\/, '\\\\') // backslashes need extra escaping as regex chars
	let rOldSep = new RegExp(escapedOldSep, 'gi')

	return parseDFS(
		directory.replace(rOldSep, newSep),
		filename,
		newSep
	)
}
