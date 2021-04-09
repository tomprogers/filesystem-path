const getDirectory = require('./get-directory')


describe(`getDirectory( absolute, folders, filename, sep )`, () => {

	it(`returns the direction portion, without filename`, () => {
		expect(getDirectory(
			true,
			['Users', 'tomprogers', 'projects', 'filesystem-path'],
			'README.md',
			'/'
		)).toBe(
			'/Users/tomprogers/projects/filesystem-path'
		)
	})


	it(`honors absolute`, () => {
		expect(getDirectory(
			true,
			['path', 'to'],
			'some.file',
			'/'
		)).toBe(
			'/path/to'
		)

		expect(getDirectory(
			false,
			['path', 'to'],
			'some.file',
			'/'
		)).toBe(
			'path/to'
		)
	})


	it(`honors sep`, () => {
		expect(getDirectory(
			true,
			['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'],
			'README.md',
			'\\'
		)).toBe(
			'\\Documents and Settings\\tomprogers\\projects\\filesystem-path'
		)
	})

})
