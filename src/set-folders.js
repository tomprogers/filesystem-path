const getRoot = require('./get-root')
const parseDFS = require('./parse-dfs')


module.exports = function setFolders( directory, filename, sep, newFolders ) {
	if( !Array.isArray(newFolders) || newFolders.some(fld => typeof fld !== 'string') )
		throw new TypeError('newFolders must be an array of strings')

	let newDirectory = getRoot(directory, filename, sep)
	for( let fld of newFolders )
		newDirectory += fld + sep // always add trailing sep so parser doesn't have to guess

	return parseDFS(
		newDirectory,
		filename,
		sep
	)
}
