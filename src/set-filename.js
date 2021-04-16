const getDirectory = require('./get-directory')
const parseDFS = require('./parse-dfs')


module.exports = function setFilename( absolute, folders, filename, sep, newFilename ) {
	return parseDFS(
		getDirectory(absolute, folders, filename, sep),
		newFilename,
		sep
	)
}
