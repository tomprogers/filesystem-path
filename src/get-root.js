module.exports = function getRoot( directory, basename, sep ) {
	return directory.charAt(0) === sep ? sep : ''
}
