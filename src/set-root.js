/*
	newRoot
		- pass sep to ensure leading sep char
		- pass '' to remove leading sep char
		- also accept boolean for convenience; false = remove
*/

module.exports = function setRoot( directory, filename, sep, newRoot ) {
	let YES = [ true, sep ]
	let NO = [ false, '' ]

	let rootShouldBeOn
		= YES.includes(newRoot) ? true
		: NO.includes(newRoot) ? false
		: undefined

	if(rootShouldBeOn === undefined) throw new RangeError('newRoot must be either the correct sep as a string, the empty string, or a boolean')

	if( directory.charAt(0) === sep && !rootShouldBeOn ) directory = directory.slice(1)
	else
	if( directory.charAt(0) !== sep && rootShouldBeOn ) directory = sep + directory

	return { directory, filename, sep }
}
