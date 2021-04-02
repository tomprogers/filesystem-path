module.exports = function getPath( directory, basename, sep ) {
	let path = directory
	if(path && basename && !path.endsWith(sep)) path += sep
	path += basename

	return path
}
