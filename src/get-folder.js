const getSegments = require('./get-segments')


module.exports = function getFolder( directory, filename, sep ) {
	let segments = getSegments(directory, filename, sep).reverse()
	if(segments[0] === filename) segments.shift()
	return segments[0] || ''
}
