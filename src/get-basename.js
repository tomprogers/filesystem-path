const dot = '.'

module.exports = function getFilename( directory, filename, sep ) {
	let lastDotIdx = filename.lastIndexOf(dot)

	if(lastDotIdx === -1) return filename
	if(lastDotIdx > 0) return filename.slice(0, lastDotIdx)
	return ''
}
