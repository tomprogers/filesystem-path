const getFolders = require('./get-folders')


describe(`getFolders( directory, filename, sep )`, () => {

	it(`returns all folders before the filename`, () => {
		expect(
			getFolders('/Users/tomprogers/projects/filesystem-path', 'README.md', '/')
		).toEqual([
			'Users',
			'tomprogers',
			'projects',
			'filesystem-path'
		])

		expect(
			getFolders('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\')
		).toEqual([
			'Documents and Settings',
			'tomprogers',
			'projects',
			'filesystem-path'
		])
	})

	it(`returns empty array if path does not contain any folders`, () => {
		expect(getFolders( '/',  'README.md', '/'  ))  .toEqual([])
		expect(getFolders( '/',  '',          '/'  ))  .toEqual([])
		expect(getFolders( '',   'README.md', '/'  ))  .toEqual([])
		expect(getFolders( '',   '',          '/'  ))  .toEqual([])
		expect(getFolders( '\\', 'README.md', '\\' ))  .toEqual([])
		expect(getFolders( '\\', '',          '\\' ))  .toEqual([])
		expect(getFolders( '',   'README.md', '\\' ))  .toEqual([])
		expect(getFolders( '',   '',          '\\' ))  .toEqual([])
	})

})
