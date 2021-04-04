const setSep = require('./set-sep')


describe(`setSep( directory, filename, sep, newSep`, () => {

	it(`changes the sep`, () => {
		expect(
			setSep('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '\\')
		).toHaveProperty('sep', '\\')

		expect(
			setSep('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '/')
		).toHaveProperty('sep', '/')
	})


	it(`converts existing separators`, () => {
		expect(
			setSep('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '\\')
		).toHaveProperty('directory', '\\Users\\tomprogers\\projects\\filesystem-path')

		expect(
			setSep('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '/')
		).toHaveProperty('directory', '/Documents and Settings/tomprogers/projects/filesystem-path')
	})


	it(`throws TypeError if newSep not a string`, () => {
		expect(() => {
			setSep('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', 5)
		}).toThrow(
			TypeError
		)
	})


	it(`throws RangeError if newSep not a valid sep`, () => {
		expect(() => {
			setSep('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '5')
		}).toThrow(
			RangeError
		)
	})

})
