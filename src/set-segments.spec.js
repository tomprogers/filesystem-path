const setSegments = require('./set-segments')


describe(`setSegments( directory, filename, sep, setSegments`, () => {

	it(`replaces all folders and filename`, () => {
		expect(setSegments(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			['usr','tpr','repos','fsp','readme.markdown']
		)).toEqual({
			absolute: true,
			folders: ['usr','tpr','repos','fsp'],
			filename: 'readme.markdown',
			sep: '/'
		})

		expect(setSegments(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			['Users','tpr','repos','fsp','readme.markdown']
		)).toEqual({
			absolute: true,
			folders: ['Users','tpr','repos','fsp'],
			filename: 'readme.markdown',
			sep: '\\'
		})
	})


	it(`can remove all folders`, () => {
		expect(setSegments(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			['README.md']
		)).toEqual({
			absolute: true,
			folders: [],
			filename: 'README.md',
			sep: '/'
		})

		expect(setSegments(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			['README.md']
		)).toEqual({
			absolute: true,
			folders: [],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can add directories`, () => {
		expect(setSegments(
			true,
			[],
			'README.md',
			'/',
			['Users', 'tomprogers', 'projects', 'filesystem-path', 'README.md']
		)).toEqual({
			absolute: true,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setSegments(
			true,
			[],
			'README.md',
			'\\',
			['Documents and Settings','tomprogers','projects', 'filesystem-path', 'README.md']
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`cannot change the root`, () => {
		expect(setSegments(
			false,
			[],
			'file.ext',
			'/',
			['path', 'file.ext']
		)).toEqual({
			absolute: false,
			folders: ['path'],
			filename: 'file.ext',
			sep: '/'
		})

		expect(setSegments(
			true,
			[],
			'file.ext',
			'/',
			['path', 'file.ext']
		)).toEqual({
			absolute: true,
			folders: ['path'],
			filename: 'file.ext',
			sep: '/'
		})
	})


	it(`can change the filename`, () => {
		expect(setSegments(
			true,
			['path'],
			'README.md',
			'/',
			['path','readme.markdown']
		)).toEqual({
			absolute: true,
			folders: ['path'],
			filename: 'readme.markdown',
			sep: '/'
		})
	})


	it(`throws TypeError if newSegments is not an array of strings`, () => {
		expect(() => setSegments(
			'',
			'',
			'/',
			5
		)).toThrow(
			TypeError
		)

		expect(() => setSegments(
			'',
			'',
			'/',
			['', 5]
		)).toThrow(
			TypeError
		)
	})

})
