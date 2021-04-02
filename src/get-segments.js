module.exports = function getSegments( directory, filename, sep ) {
	let segments = []

	if( directory ) {
		if( directory.startsWith(sep) ) directory = directory.slice(1)
		segments = segments.concat(directory.split(sep))
	}

	if(filename) segments.push(filename)

	return segments
}
