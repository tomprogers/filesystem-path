const getBasename = require('./get-basename')
const parseDFS = require('./parse-dfs')


const dot = '.'

module.exports = function setExt( directory, filename, sep, newExt ) {
	if( typeof newExt !== 'string' )
		throw new TypeError('newExt must be a string')

	// leading dot: no wrong answer -- we'll add one if needed
	// TODO: decide on correct behavior for when newExt is JUST dots, and nail down
	while( newExt.startsWith(dot) )
		newExt = newExt.slice(1)
	if( newExt ) newExt = dot + newExt

	return parseDFS(
		directory,
		getBasename(directory, filename, sep) + newExt,
		sep
	)
}
