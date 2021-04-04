const setFolders = require('./set-folders')


describe(`setFolder( directory, filename, sep, newFolder`, () => {

	it(`replaces all folders`, () => {
		expect(
			setFolders(
				'/Users/tomprogers/projects/filesystem-path', 'README.md', '/',
				['usr', 'tpr', 'repos', 'fsp']
		)).toEqual({
			directory: '/usr/tpr/repos/fsp',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setFolders(
				'\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\',
				['Users', 'tpr', 'repos', 'fsp']
		)).toEqual({
			directory: '\\Users\\tpr\\repos\\fsp',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can remove all folders`, () => {
		expect(
			setFolders(
				'/Users/tomprogers/projects/filesystem-path', 'README.md', '/',
				[]
		)).toEqual({
			directory: '/',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setFolders(
				'\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\',
				[]
		)).toEqual({
			directory: '\\',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can add directories`, () => {
		expect(
			setFolders(
				'/', 'README.md', '/',
				['Users', 'tomprogers', 'projects', 'filesystem-path']
		)).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setFolders(
				'\\', 'README.md', '\\',
				['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path']
		)).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`cannot change the root`, () => {
		expect(
			setFolders(
				'', 'file.ext', '/',
				['path']
		)).toEqual({
			directory: 'path',
			filename: 'file.ext',
			sep: '/'
		})

		expect(
			setFolders(
				'/', 'file.ext', '/',
				['path']
		)).toEqual({
			directory: '/path',
			filename: 'file.ext',
			sep: '/'
		})
	})


	it(`cannot change the filename`, () => {
		expect(
			setFolders(
				'/path', 'README.md', '/',
				['path','readme.markdown']
		)).toEqual({
			directory: '/path/readme.markdown',
			filename: 'README.md',
			sep: '/'
		})
	})


	xit(`throws TypeError if newSegments is not an array of strings`, () => {
		expect(() => {
			setFolders('', '', '/', 5)
		}).toThrow(
			TypeError
		)
		expect(() => {
			setFolders('', '', '/', ['', 5])
		}).toThrow(
			TypeError
		)
	})

})
