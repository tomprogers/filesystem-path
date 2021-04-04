const getRoot = require('./get-root')
const parseDFS = require('./parse-dfs')


module.exports = function setSegments( directory, filename, sep, newSegments ) {
	if( !Array.isArray(newSegments) || newSegments.some(seg => typeof seg !== 'string') )
		throw new TypeError('newSegments must be an array of strings')

	// extract final new segment so we can handle it separately
	let newSegs = newSegments.slice() // to avoid mutating caller while permitting mutating of working copy
	let finalNewSegment = newSegs.splice(-1, 1)

	let newDirectory = getRoot(directory, filename, sep)
	for( let newSeg of newSegs )
		newDirectory += newSeg + sep // always add trailing sep to hint parser for pam.d

	// TODO: this accomplishes nothing
	if( finalNewSegment !== '' ) {
		newDirectory += finalNewSegment // no trailing sep; let parser figure it out
	}

	return parseDFS(
		newDirectory,
		sep
	)
}
