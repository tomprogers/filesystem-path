module.exports = function getDirectory( absolute, folders, filename, sep, ensureTrailingSep=false ) {
	let directory = ''

	if( absolute ) directory += sep
	if( folders.length ) directory += folders.join(sep)

	// possibly ill-advised: ensure trailing slash to protect against pam.d
	if(ensureTrailingSep && directory.length && !directory.endsWith(sep)) directory += sep

	return directory
}
