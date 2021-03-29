const parsePath = require('./parse-path')


module.exports = function constructorTwo( pathString, sepString ) {
	return parsePath(pathString, sepString)
}
