const parseDFS = require('./parse-dfs')


module.exports = class FilesystemPath {

	constructor( directory, filename, sep ) {
		Object.assign(this, parseDFS(directory, filename, sep))
	}

}
