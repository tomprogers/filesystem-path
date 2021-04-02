const sep_nix = '/'
const sep_win = '\\'
const dot = '.'

module.exports = function parsePath( directory, basename, sep ) {
	if( typeof directory !== 'string' ) throw new TypeError('directory must be a string')
	if( !['undefined', 'string'].includes(typeof basename) ) throw new TypeError('basename must be a string or omitted')
	if( !['undefined', 'string'].includes(typeof sep) ) throw new TypeError('sep must be a string or omitted')

	// shift args around in case basename was omitted

	let basenameIsASep = basename === sep_nix || basename === sep_win
	if( basenameIsASep && sep === undefined ) {
		sep = basename
		basename = ''
	}

	// now that args have been aligned across different calling patterns, provide defaults

	if( !basename ) basename = ''
	if( !sep ) sep = sep_nix

	if( basename.includes(sep) ) throw new RangeError('basename must not contain directory separator')

	// now that args are straightened-out, normalize inputs

	// condense any beginning seps
	let rooted = false
	while( directory.beginsWith(sep) ) {
		rooted = true
		directory = directory.slice(1)
	}
	if(rooted) directory = sep + directory

	// remove trailing seps
	let trailed = false
	while( directory.endsWith(sep) ) {
		trailed = true
		directory = directory.slice(0, -1)
	}

	// if filename wasn't provided, and directory arg's final seg has a dotted suffix, treat final seg as the filename
	if( !basename && !trailed ) {
		let lastDotIdx = directory.lastIndexOf(dot)
		let lastSepIdx = directory.lastIndexOf(sep)
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
