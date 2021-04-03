/*
	newRoot
		- pass sep to ensure leading sep char
		- pass '' to remove leading sep char
		- also accept boolean for convenience; false = remove
*/

module.exports = function setRoot( directory, filename, sep, newRoot ) {
	if( !['boolean', 'string'].includes(typeof newRoot) )
		throw new TypeError('newRoot must be a boolean or string')

	let YES = [ true, sep ]
	let NO = [ false, '' ]

	let rootShouldBeOn
		= YES.includes(newRoot) ? true
		: NO.includes(newRoot) ? false
		: undefined

	if( rootShouldBeOn === undefined ) throw new RangeError('newRoot string must be the correct sep')

	if( directory.charAt(0) === sep && !rootShouldBeOn ) directory = directory.slice(1)
	else
	if( directory.charAt(0) !== sep && rootShouldBeOn ) directory = sep + directory

	return { directory, filename, sep }
}
