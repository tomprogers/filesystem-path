module.exports = function getPath( directory, filename, sep ) {
	let path = directory
	if( path && filename && !path.endsWith(sep) ) path += sep
	path += filename

	return path
}
