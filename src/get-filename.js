const dot = '.'

module.exports = function getFilename( directory, basename, sep ) {
	let lastDotIdx = basename.lastIndexOf(dot)

	if(lastDotIdx === -1) return basename
	if(lastDotIdx > 0) return basename.slice(0, lastDotIdx)
	return ''
}
