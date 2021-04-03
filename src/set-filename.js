const parseDFS = require('./parse-dfs')


module.exports = function setFilename( directory, filename, sep, newFilename ) {
	return parseDFS(
		directory,
		newFilename,
		sep
	)
}
