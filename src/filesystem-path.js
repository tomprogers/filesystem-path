const parseDFS = require('./parse-dfs')
const _getBasename = require('./get-basename')
const _getExt = require('./get-ext')
const _getFolders = require('./get-folders')
const _getPath = require('./get-path')
const _getRoot = require('./get-root')
const _getSegments = require('./get-segments')
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

	getBasename  = () => _getBasename(..._getCoreProps(this))
	getDirectory = () => this.directory
	getExt       = () => _getExt(..._getCoreProps(this))
	getFilename  = () => this.filename
	getFolders   = () => _getFolders(..._getCoreProps(this))
	getRoot      = () => _getRoot(..._getCoreProps(this))
	getSegments  = () => _getSegments(..._getCoreProps(this))
	getSep       = () => this.sep

	setBasename  = ( newBasename  ) => _monad(this, _setBasename,  newBasename )
	setDirectory = ( newDirectory ) => _monad(this, _setDirectory, newDirectory)
	setExt       = ( newExt       ) => _monad(this, _setExt,       newExt      )
	setFilename  = ( newFilename  ) => _monad(this, _setFilename,  newFilename )
	setFolders   = ( newFolders   ) => _monad(this, _setFolders,   newFolders  )
	setRoot      = ( newRoot      ) => _monad(this, _setRoot,      newRoot     )
	setSegments  = ( newSegments  ) => _monad(this, _setSegments,  newSegments )
	setSep       = ( newSep       ) => _monad(this, _setSep,       newSep      )

	toString     = () => _getPath(..._getCoreProps(this))

}


function _getCoreProps({ directory, filename, sep }) {
	return [ directory, filename, sep ]
}


function _monad( self, func, ...args ) {
	return Object.assign(
		self,
		func(..._getCoreProps(self),
		...args)
	)
}
