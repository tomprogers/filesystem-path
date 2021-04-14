const setSep = require('./set-sep')


describe(`setSep( absolute, folders, filename, sep, newSep`, () => {

	it(`changes the sep`, () => {
		expect(
			setSep(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '/', '\\')
		).toHaveProperty('sep', '\\')

		expect(
			setSep(true, ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '\\', '/')
		).toHaveProperty('sep', '/')
	})


	it(`throws TypeError if newSep not a string`, () => {
		expect(() => {
			setSep(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '/', 5)
		}).toThrow(
			TypeError
		)
	})


	it(`throws RangeError if newSep not a valid sep`, () => {
		expect(() => {
			setSep(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '/', '5')
		}).toThrow(
			RangeError
		)
	})

})
