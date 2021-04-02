const DEBUG_LOG = false

const sep_nix = '/'
const sep_win = '\\'
const dot = '.'

module.exports = function parsePath( directory, basename, sep ) {
	DEBUG_LOG && console.log(`directory`, JSON.stringify(directory))
	DEBUG_LOG && console.log(`basename`, JSON.stringify(basename))
	DEBUG_LOG && console.log(`sep`, JSON.stringify(sep))

	if( typeof directory !== 'string' ) throw new TypeError('directory must be a string')
	if( !['undefined', 'string'].includes(typeof basename) ) throw new TypeError('basename must be a string or omitted')
	if( !['undefined', 'string'].includes(typeof sep) ) throw new TypeError('sep must be a string or omitted')

	// shift args around in case basename was omitted

	let basenameIsASep = basename === sep_nix || basename === sep_win
	DEBUG_LOG && console.log(`basenameIsASep`, JSON.stringify(basenameIsASep))
	if( basenameIsASep && sep === undefined ) {
		sep = basename
		basename = ''
	}

	if( !basename ) basename = ''
	if( !sep ) sep = sep_nix

	let directoryIsBasename = !directory.includes(sep)
	DEBUG_LOG && console.log(`directoryIsBasename`, JSON.stringify(directoryIsBasename))
	if(directoryIsBasename) {
		basename = directory
		directory = ''
	}

	// now that args have been aligned across different calling patterns, provide defaults
	if( basename.includes(sep) ) throw new RangeError('basename must not contain directory separator')

	// now that args are straightened-out, normalize inputs
	DEBUG_LOG && console.log(`directory`, JSON.stringify(directory))
	DEBUG_LOG && console.log(`basename`, JSON.stringify(basename))
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

	if(rooted) directory = sep + directory

	// if filename wasn't provided, and directory arg's final seg has a dotted suffix, treat final seg as the filename
	if( !basename && !trailed ) {
		DEBUG_LOG && console.log(`checking final segment for extension...`)
		let lastDotIdx = directory.lastIndexOf(dot)
		let lastSepIdx = directory.lastIndexOf(sep)
		DEBUG_LOG && console.log(`lastDotIdx`, JSON.stringify(lastDotIdx))
		DEBUG_LOG && console.log(`lastSepIdx`, JSON.stringify(lastSepIdx))

		let finalSegmentHasExt = lastDotIdx > lastSepIdx && lastDotIdx < directory.length - 1

		if( finalSegmentHasExt ) {
			basename = directory.slice(lastSepIdx + 1)
			directory = directory.slice(0, lastSepIdx)
		}
	}

	return {
		directory,
		basename,
		sep
	}
}
