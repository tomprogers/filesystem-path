const DEBUG_LOG = false

const sep_nix = '/'
const sep_win = '\\'
const dot = '.'

module.exports = function parseDFS( directory, filename, sep ) {
	DEBUG_LOG && console.log(`directory`, JSON.stringify(directory))
	DEBUG_LOG && console.log(`filename`, JSON.stringify(filename))
	DEBUG_LOG && console.log(`sep`, JSON.stringify(sep))

	if( typeof directory !== 'string' )
		throw new TypeError('argument must be a string')

	if( !['undefined', 'string'].includes(typeof filename) )
		throw new TypeError('argument must be a string or omitted')

	if( !['undefined', 'string'].includes(typeof sep) )
		throw new TypeError('sep must be a string or omitted')

	// shift ags around to accommodate overloaded sig

	let filenameIsASep = filename === sep_nix || filename === sep_win
	DEBUG_LOG && console.log(`filenameIsASep`, JSON.stringify(filenameIsASep))
	if( filenameIsASep && sep === undefined ) {
		sep = filename
		filename = ''
	}

	if( !filename ) filename = ''
	if( !sep ) sep = sep_nix

	let otherSep = sep === sep_nix ? sep_win : sep_nix
	if( directory.includes(otherSep) )
		throw new SyntaxError('directory must not contain mismatched sep')

	let directoryIsFilename = directory && !directory.slice(1).includes(sep)
	DEBUG_LOG && console.log(`directoryIsFilename`, JSON.stringify(directoryIsFilename))
	if( directoryIsFilename && !filename) {
		filename = directory
		directory = ''

		if( filename.charAt(0) === sep ) {
			filename = filename.slice(1)
			directory = sep
		}
	}

	if( filename.includes(sep) )
		throw new RangeError('filename must not contain directory separator')

	// now that args are straightened-out, normalize inputs
	DEBUG_LOG && console.log(`directory`, JSON.stringify(directory))
	DEBUG_LOG && console.log(`filename`, JSON.stringify(filename))
	DEBUG_LOG && console.log(`sep`, JSON.stringify(sep))

	// condense any beginning seps
	let rooted = false
	while( directory.startsWith(sep) ) {
		rooted = true
		directory = directory.slice(1)
	}

	// remove trailing seps
	let trailed = false
	while( directory.endsWith(sep) ) {
		trailed = true
		directory = directory.slice(0, -1)
	}

	DEBUG_LOG && console.log(`rooted`, JSON.stringify(rooted))
	DEBUG_LOG && console.log(`trailed`, JSON.stringify(trailed))

	if( rooted ) directory = sep + directory

	/*
		If filename wasn't provided, AND directory doesn't end with a sep,
		AND directory's final segment looks like a filename (i.e. it has a dotted suffix),
		then treat final seg as the filename.
	*/
	if( !filename && !trailed ) {
		DEBUG_LOG && console.log(`checking final segment for extension...`)
		let lastDotIdx = directory.lastIndexOf(dot)
		let lastSepIdx = directory.lastIndexOf(sep)
		DEBUG_LOG && console.log(`lastDotIdx`, JSON.stringify(lastDotIdx))
		DEBUG_LOG && console.log(`lastSepIdx`, JSON.stringify(lastSepIdx))

		let finalSegmentHasExt = lastDotIdx > lastSepIdx && lastDotIdx < directory.length - 1

		if( finalSegmentHasExt ) {
			filename = directory.slice(lastSepIdx + 1)
			directory = directory.slice(0, lastSepIdx)
		}
	}

	return {
		directory,
		filename,
		sep
	}
}
