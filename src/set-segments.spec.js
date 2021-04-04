const setSegments = require('./set-segments')


describe(`setSegments( directory, filename, sep, setSegments`, () => {

	it(`replaces all folders and filename`, () => {
		expect(
			setSegments(
				'/Users/tomprogers/projects/filesystem-path', 'README.md', '/',
				['usr','tpr','repos','fsp','readme.markdown']
		)).toEqual({
			directory: '/usr/tpr/repos/fsp',
			filename: 'readme.markdown',
			sep: '/'
		})

		expect(
			setSegments(
				'\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\',
				['Users','tpr','repos','fsp','readme.markdown']
		)).toEqual({
			directory: '\\Users\\tpr\\repos\\fsp',
			filename: 'readme.markdown',
			sep: '\\'
		})
	})


	it(`can remove all folders`, () => {
		expect(
			setSegments(
				'/Users/tomprogers/projects/filesystem-path', 'README.md', '/',
				['README.md']
		)).toEqual({
			directory: '/',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setSegments(
				'\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\',
				['README.md']
		)).toEqual({
			directory: '\\',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can add directories`, () => {
		expect(
			setSegments(
				'/', 'README.md', '/',
				['Users', 'tomprogers', 'projects', 'filesystem-path', 'README.md']
		)).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setSegments(
				'\\', 'README.md', '\\',
				['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path', 'README.md']
		)).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`cannot change the root`, () => {
		expect(
			setSegments(
				'', 'file.ext', '/',
				['path', 'file.ext']
		)).toEqual({
			directory: 'path',
			filename: 'file.ext',
			sep: '/'
		})

		expect(
			setSegments(
				'/', 'file.ext', '/',
				['path', 'file.ext']
		)).toEqual({
			directory: '/path',
			filename: 'file.ext',
			sep: '/'
		})
	})


	it(`can change the filename`, () => {
		expect(
			setSegments(
				'/path', 'README.md', '/',
				['path','readme.markdown']
		)).toEqual({
			directory: '/path',
			filename: 'readme.markdown',
			sep: '/'
		})
	})


	it(`throws TypeError if newSegments is not an array of strings`, () => {
		expect(() => {
			setSegments('', '', '/', 5)
		}).toThrow(
			TypeError
		)
		expect(() => {
			setSegments('', '', '/', ['', 5])
		}).toThrow(
			TypeError
		)
	})

})
