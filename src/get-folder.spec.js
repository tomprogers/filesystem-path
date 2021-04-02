const getFolder = require('./get-folder')


describe(`getFolder( directory, basename, sep )`, () => {

	it(`returns the final folder before the filename`, () => {
		expect(
			getFolder('/Users/tomprogers/projects/filesystem-path', 'README.md', '/')
		).toBe('filesystem-path')

		expect(
			getFolder('C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\')
		).toBe('filesystem-path')
	})

	it(`returns empty string if path does not contain any folders`, () => {
		expect(getFolder( '/',  'README.md', '/'  ))  .toBe('')
		expect(getFolder( '/',  '',          '/'  ))  .toBe('')
		expect(getFolder( '',   'README.md', '/'  ))  .toBe('')
		expect(getFolder( '',   '',          '/'  ))  .toBe('')
		expect(getFolder( '\\', 'README.md', '\\' ))  .toBe('')
		expect(getFolder( '\\', '',          '\\' ))  .toBe('')
		expect(getFolder( '',   'README.md', '\\' ))  .toBe('')
		expect(getFolder( '',   '',          '\\' ))  .toBe('')
	})

})
