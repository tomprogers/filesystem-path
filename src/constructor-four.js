const parsePath = require('./parse-path')


const isSep = ( s ) => s === '/' || s === '\\'

module.exports = function constructorFour( directoryString, basenameString, extString, sepString ) {
	if(isSep(basenameString)) {
		sepString = basenameString
		basenameString = ''
		extString = ''
	}

	if(isSep(extString)) {
		sepString = extString
		extString = ''
	}

	let filename = basenameString
	if(extString) filename += extString

	let path = directoryString
	if(filename) path += sepString + filename

	return parsePath(path, sepString)
}
