const getDirectory = require('./get-directory')
const parseDFS = require('./parse-dfs')


module.exports = function setAbsolute( absolute, folders, filename, sep, newAbsolute ) {
	newAbsolute = Boolean(newAbsolute)

	return parseDFS(
		getDirectory(newAbsolute, folders, filename, sep),
		filename,
		sep
	)
}
