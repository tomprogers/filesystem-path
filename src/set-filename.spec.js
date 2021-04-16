const setFilename = require('./set-filename')


describe(`setFilename( directory, filename, sep, newFilename`, () => {

	it(`renames files that have both basename and ext`, () => {
		expect(setFilename(
			true,
			[ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'/',
			'readme.txt'
		)).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'readme.txt',
			sep: '/'
		})

		expect(setFilename(
			true,
			[ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'\\',
			'readme.txt'
		)).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'readme.txt',
			sep: '\\'
		})
	})


	it(`renames files that only have basename`, () => {
		expect(setFilename(
			true,
			[ 'Users', 'tomprogers' ],
			'noext',
			'/',
			'renamed.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers' ],
			filename: 'renamed.fil',
			sep: '/'
		})

		expect(setFilename(
			true,
			[ 'Documents and Settings', 'tomprogers' ],
			'noext',
			'\\',
			'renamed.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers' ],
			filename: 'renamed.fil',
			sep: '\\'
		})
	})


	it(`renames files that only have ext`, () => {
		expect(setFilename(
			true,
			[ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			'README.md',
			'/',
			'renamed.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'renamed.fil',
			sep: '/'
		})

		expect(setFilename(
			true,
			[ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			'.babelrc',
			'\\',
			'renamed.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'renamed.fil',
			sep: '\\'
		})
	})


	it(`adds a filename to paths with no filename`, () => {
		expect(setFilename(
			true,
			[ 'Users', 'tomprogers' ],
			'',
			'/',
			'some.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers' ],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setFilename(
			true,
			[ 'Documents and Settings', 'tomprogers' ],
			'',
			'\\',
			'some.fil'
		)).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers' ],
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`removes filename if newFilename is the empty string`, () => {
		expect(setFilename(
			true,
			[ 'Users', 'tomprogers' ],
			'original.fil',
			'/',
			''
		)).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers' ],
			filename: '',
			sep: '/'
		})

		expect(setFilename(
			true,
			[ 'Documents and Settings', 'tomprogers' ],
			'original.fil',
			'\\',
			''
		)).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers' ],
			filename: '',
			sep: '\\'
		})
	})


	it(`renames files with empty directories`, () => {
		expect(setFilename(
			false,
			[],
			'before.fil1',
			'/',
			'after.fil2'
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'after.fil2',
			sep: '/'
		})

		expect(setFilename(
			false,
			[],
			'before.fil1',
			'\\',
			'after.fil2'
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'after.fil2',
			sep: '\\'
		})
	})


	it(`adds a filename to empty paths`, () => {
		expect(setFilename(
			false,
			[],
			'',
			'/',
			'first.fil'
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'first.fil',
			sep: '/'
		})

		expect(setFilename(
			false,
			[],
			'',
			'\\',
			'first.fil'
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'first.fil',
			sep: '\\'
		})
	})


	it(`throws a SyntaxError if newFilename is not a string`, () => {
		expect(() => {
			setFilename('', '', '/', 5)
		}).toThrow(
			TypeError
		)
	})

})
