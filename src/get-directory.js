module.exports = function getDirectory( absolute, folders, filename, sep ) {
	let directory = ''

	if( absolute ) directory += sep
	if( folders.length ) directory += folders.join(sep)

	return directory
}
