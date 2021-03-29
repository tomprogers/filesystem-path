module.exports = function parsePath( path, sep = '/' ) {
	// TODO: rewrite to use lastIndexOf, after you have comprehensive unit tests
	let [ basename, ...parts ] = path.split(sep).reverse()
	let directory = parts.slice().reverse().join(sep)

	let root = ''
	if(directory.charAt(0) === sep) root = sep
	let _isAbsolute = root === sep
	let folder = parts.slice().reverse().pop()

	let [ ext, ...fnameParts ] = basename.split('.').reverse()
	let filename = fnameParts.reverse().join('.')

	return {
		root,
		directory,
		folder,
		basename,
		filename,
		ext,
		_isAbsolute
	}
}
