const getDirectory = require('./get-directory')
const parseDFS = require('./parse-dfs')


const SEP_NIX = '/'
const SEP_WIN = '\\'
const PERMITTED_SEPS = [ SEP_NIX, SEP_WIN ]
const R_SEP_NIX = /\//gi
const R_SEP_WIN = /\\/gi

module.exports = function setSep( absolute, folders, filename, sep, newSep ) {
	if( typeof newSep !== 'string' )
		throw new TypeError('newSep must be a string')

	if( !PERMITTED_SEPS.includes(newSep) )
		throw new RangeError('newSep must be either backslash or forward-slash as a string')

	// older nodejs (< 14.6 ?) lacks String.prototype.replaceAll, so using a regex to convert old seps
	let oldSepRegex = sep === SEP_NIX
		? R_SEP_NIX
		: R_SEP_WIN

	let newDirectory = getDirectory(absolute, folders, filename, sep).replace(oldSepRegex, newSep)

	return parseDFS(
		newDirectory,
		filename,
		newSep
	)
}
