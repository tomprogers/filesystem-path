const setAbsolute = require('./set-absolute')


module.exports = function setRoot( absolute, folders, filename, sep, newRoot ) {
	if( !['boolean', 'string'].includes(typeof newRoot) )
		throw new TypeError('newRoot must be a boolean or string')

	let YES = [ true, sep ]
	let NO = [ false, '' ]

	let rootShouldBeOn
		= YES.includes(newRoot) ? true
		: NO.includes(newRoot) ? false
		: undefined

	if( rootShouldBeOn === undefined )
		throw new RangeError('newRoot string must be the correct sep')

	return setAbsolute(absolute, folders, filename, sep, rootShouldBeOn)
}
