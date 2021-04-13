const setFolders = require('./set-folders')


describe(`setFolder( absolute, folders, filename, sep, newFolders`, () => {

	it(`replaces all folders`, () => {
		expect(setFolders(
			true,
			[ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'/',
			['usr', 'tpr', 'repos', 'fsp']
		)).toEqual({
			absolute: true,
			folders: ['usr', 'tpr', 'repos', 'fsp'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setFolders(
			true,
			[ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'\\',
			['Users', 'tpr', 'repos', 'fsp']
		)).toEqual({
			absolute: true,
			folders: ['Users', 'tpr', 'repos', 'fsp'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can remove all folders`, () => {
		expect(setFolders(
			true,
			[ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'/',
			[]
		)).toEqual({
			absolute: true,
			folders: [],
			filename: 'README.md',
			sep: '/'
		})

		expect(setFolders(
			true,
			[ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'\\',
			[]
		)).toEqual({
			absolute: true,
			folders: [],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`can add directories`, () => {
		expect(setFolders(
			true,
			[],
			'README.md',
			'/',
			['Users', 'tomprogers', 'projects', 'filesystem-path']
		)).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setFolders(
			true,
			[],
			'README.md',
			'\\',
			['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path']
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`cannot change the root`, () => {
		expect(setFolders(
			false,
			[],
			'file.ext',
			'/',
			['path']
		)).toEqual({
			absolute: false,
			folders: ['path'],
			filename: 'file.ext',
			sep: '/'
		})

		expect(setFolders(
			false,
			[],
			'file.ext',
			'/',
			['path']
		)).toEqual({
			absolute: false,
			folders: ['path'],
			filename: 'file.ext',
			sep: '/'
		})
	})


	it(`cannot change the filename`, () => {
		expect(setFolders(
			true,
			['path'],
			'README.md',
			'/',
			['path','readme.markdown']
		)).toEqual({
			absolute: true,
			folders: ['path','readme.markdown'],
			filename: 'README.md',
			sep: '/'
		})
	})


	it(`throws TypeError if newSegments is not an array of strings`, () => {
		expect(() => {
			setFolders(true, [], '', '/', 5)
		}).toThrow(
			TypeError
		)
		expect(() => {
			setFolders(true, [], '', '/', ['', 5])
		}).toThrow(
			TypeError
		)
	})

})
