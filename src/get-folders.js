module.exports = function getFolders( directory, filename, sep ) {
	let folders = []
	if( directory.startsWith(sep) ) directory = directory.slice(1)
	if( directory ) folders = folders.concat(directory.split(sep))

	return folders
}
