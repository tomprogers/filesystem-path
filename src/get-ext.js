const dot = '.'

module.exports = function getExt( directory, filename, sep ) {
	let lastDotIdx = filename.lastIndexOf(dot)

	if( lastDotIdx > -1 ) return filename.slice(lastDotIdx)
	return ''
}
