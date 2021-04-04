const parseDFS = require('./parse-dfs')
const _getRoot = require('./get-root')
const _getFolders = require('./get-folders')
const _getBasename = require('./get-basename')
const _getExt = require('./get-ext')
const _getSegments = require('./get-segments')
const _getPath = require('./get-path')
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

	toString     = () => _getPath(..._getCoreProps(this))

	setBasename  = ( newBasename  ) => _monadicAssign(this,  _setBasename(..._getCoreProps(this), newBasename ))
	setDirectory = ( newDirectory ) => _monadicAssign(this, _setDirectory(..._getCoreProps(this), newDirectory))
	setExt       = ( newExt       ) => _monadicAssign(this,       _setExt(..._getCoreProps(this), newExt      ))
	setFilename  = ( newFilename  ) => _monadicAssign(this,  _setFilename(..._getCoreProps(this), newFilename ))
	setFolders   = ( newFolders   ) => _monadicAssign(this,   _setFolders(..._getCoreProps(this), newFolders  ))
	setRoot      = ( newRoot      ) => _monadicAssign(this,      _setRoot(..._getCoreProps(this), newRoot     ))
	setSegments  = ( newSegments  ) => _monadicAssign(this,  _setSegments(..._getCoreProps(this), newSegments ))
	setSep       = ( newSep       ) => _monadicAssign(this,       _setSep(..._getCoreProps(this), newSep      ))

}


function _getCoreProps({ directory, filename, sep }) {
	return [ directory, filename, sep ]
}


function _monadicAssign( monad, patch ) {
	Object.assign(monad, patch)
	return monad
}
