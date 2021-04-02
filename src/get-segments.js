module.exports = function getSegments( directory, basename, sep ) {
	let segments = []

	if( directory ) {
		if( directory.startsWith(sep) ) directory = directory.slice(1)
		segments = segments.concat(directory.split(sep))
	}

	if(basename) segments.push(basename)

	return segments
}
