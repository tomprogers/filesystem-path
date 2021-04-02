module.exports = function getRoot( directory, filename, sep ) {
	return directory.charAt(0) === sep ? sep : ''
}
