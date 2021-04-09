const dot = '.'

module.exports = function getExt( absolute, folders, filename, sep ) {
	let lastDotIdx = filename.lastIndexOf(dot)

	if( lastDotIdx > -1 ) return filename.slice(lastDotIdx)
	return ''
}
