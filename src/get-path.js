module.exports = function getPath( absolute, folders, filename, sep ) {
	let path = ''

	if( absolute ) path += sep
	if( folders.length ) path += folders.join(sep)
	if( path && filename && !path.endsWith(sep) ) path += sep
	path += filename

	return path
}
