const getSegments = require('./get-segments')


module.exports = function getFolder( directory, basename, sep ) {
	let segments = getSegments(directory, basename, sep).reverse()
	if(segments[0] === basename) segments.shift()
	return segments[0] || ''
}
