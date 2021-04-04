const getFolders = require('./get-folders')


module.exports = function getSegments( directory, filename, sep ) {
	let segments = getFolders(directory, filename, sep)
	if( filename ) segments.push(filename)

	return segments
}
