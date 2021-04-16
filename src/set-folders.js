const parseDFS = require('./parse-dfs')


module.exports = function setFolders( absolute, folders, filename, sep, newFolders ) {
	if( !Array.isArray(newFolders) || newFolders.some(fld => typeof fld !== 'string') )
		throw new TypeError('newFolders must be an array of strings')

	let newDirectory = newFolders.join(sep)
	if( absolute ) newDirectory = sep + newDirectory

	// always add trailing slash so parser doesn't have to guess
	if( newDirectory && !newDirectory.endsWith(sep) ) newDirectory += sep

	return parseDFS(
		newDirectory,
		filename,
		sep
	)
}
