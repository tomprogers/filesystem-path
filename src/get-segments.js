module.exports = function getSegments( absolute, folders, filename, sep ) {
	let segments = folders.slice()
	if( filename ) segments.push(filename)

	return segments
}
