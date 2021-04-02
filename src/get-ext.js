const dot = '.'

module.exports = function getExt( directory, basename, sep ) {
	let lastDotIdx = basename.lastIndexOf(dot)

	if( lastDotIdx > -1 && lastDotIdx < basename.length - 1 ) return basename.slice(lastDotIdx + 1)
	return ''
}
