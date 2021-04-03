const parseDFS = require('./parse-dfs')
const _getRoot = require('./get-root')
const _getFolder = require('./get-folder')
const _getBasename = require('./get-basename')
const _getExt = require('./get-ext')
const _getSegments = require('./get-segments')


module.exports = class FilesystemPath {

	constructor( directory, filename, sep ) {
		Object.assign(this, parseDFS(directory, filename, sep))
	}

	getRoot =      () => _getRoot(..._getCoreProps(this))
	getDirectory = () => this.directory
	getFolder =    () => _getFolder(..._getCoreProps(this))
	getBasename =  () => _getBasename(..._getCoreProps(this))
	getFilename =  () => this.filename
	getExt =       () => _getExt(..._getCoreProps(this))
	getSep =       () => this.sep
	getSegments =  () => _getSegments(..._getCoreProps(this))

}

function _getCoreProps({ directory, filename, sep }) {
	return [ directory, filename, sep ]
}
