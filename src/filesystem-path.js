const parseDFS = require('./parse-dfs')
const _getBasename = require('./get-basename')
const _getDirectory = require('./get-directory')
const _getExt = require('./get-ext')
const _getPath = require('./get-path')
const _getRoot = require('./get-root')
const _getSegments = require('./get-segments')
const _setAbsolute = require('./set-absolute')
const _setBasename = require('./set-basename')
const _setDirectory = require('./set-directory')
const _setExt = require('./set-ext')
const _setFilename = require('./set-filename')
const _setFolders = require('./set-folders')
const _setRoot = require('./set-root')
const _setSegments = require('./set-segments')
const _setSep = require('./set-sep')


module.exports = class FilesystemPath {

	constructor( directory, filename, sep ) {
		Object.assign(this, parseDFS(directory, filename, sep))
	}

	getAbsolute  = () => this.absolute
	getBasename  = () => _getBasename (..._getCoreProps(this))
	getDirectory = () => _getDirectory(..._getCoreProps(this))
	getExt       = () => _getExt      (..._getCoreProps(this))
	getFilename  = () => this.filename
	getFolders   = () => this.folders
	getRoot      = () => _getRoot     (..._getCoreProps(this))
	getSegments  = () => _getSegments (..._getCoreProps(this))
	getSep       = () => this.sep

	setAbsolute  = ( newAbsolute  ) => _mutateCoreProps(this, _setAbsolute,  newAbsolute )
	setBasename  = ( newBasename  ) => _mutateCoreProps(this, _setBasename,  newBasename )
	setDirectory = ( newDirectory ) => _mutateCoreProps(this, _setDirectory, newDirectory)
	setExt       = ( newExt       ) => _mutateCoreProps(this, _setExt,       newExt      )
	setFilename  = ( newFilename  ) => _mutateCoreProps(this, _setFilename,  newFilename )
	setFolders   = ( newFolders   ) => _mutateCoreProps(this, _setFolders,   newFolders  )
	setRoot      = ( newRoot      ) => _mutateCoreProps(this, _setRoot,      newRoot     )
	setSegments  = ( newSegments  ) => _mutateCoreProps(this, _setSegments,  newSegments )
	setSep       = ( newSep       ) => _mutateCoreProps(this, _setSep,       newSep      )

	toString     = () => _getPath(..._getCoreProps(this))

}


function _getCoreProps({ absolute, folders, filename, sep }) {
	return [ absolute, folders, filename, sep ]
}


function _mutateCoreProps( self, mutatorFn, ...mutatorArgs ) {
	return Object.assign(
		self,
		mutatorFn(..._getCoreProps(self), ...mutatorArgs)
	)
}
