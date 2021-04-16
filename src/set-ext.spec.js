const setExt = require('./set-ext')


describe(`setExt( absolute, folders, filename, sep, newExt`, () => {

	it(`accepts newExt whether or not it has leading dot`, () => {
		expect(
			setExt(true, ['path'], 'file.ext1', '/', '.ext2')
		).toEqual({
			absolute: true,
			folders: ['path'],
			filename: 'file.ext2',
			sep: '/'
		})

		expect(
			setExt(true, ['path'], 'file.ext1', '/', 'ext2')
		).toEqual({
			absolute: true,
			folders: ['path'],
			filename: 'file.ext2',
			sep: '/'
		})
	})


	it(`renames files that have both basename and ext`, () => {
		expect(
			setExt(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '/', '.txt')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'README.txt',
			sep: '/'
		})

		expect(
			setExt(true, ['Documents and Settings','tomprogers','projects','filesystem-path'], 'README.md', '\\', '.txt')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.txt',
			sep: '\\'
		})
	})


	it(`renames files that only have basename`, () => {
		expect(
			setExt(true, ['Users', 'tomprogers'], 'noext', '/', '.new')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: 'noext.new',
			sep: '/'
		})

		expect(
			setExt(true, ['Documents and Settings', 'tomprogers'], 'noext', '\\', '.new')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: 'noext.new',
			sep: '\\'
		})
	})


	it(`renames files that only have ext`, () => {
		expect(
			setExt(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], '.babelrc', '/', '.gitignore')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers', 'projects', 'filesystem-path'],
			filename: '.gitignore',
			sep: '/'
		})

		expect(
			setExt(true, ['Documents and Settings','tomprogers','projects','filesystem-path'], '.babelrc', '\\', '.gitignore')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: '.gitignore',
			sep: '\\'
		})
	})


	it(`adds an ext to paths with no filename`, () => {
		expect(
			setExt(true, ['Users', 'tomprogers'], '', '/', '.new')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: '.new',
			sep: '/'
		})

		expect(
			setExt(true, ['Documents and Settings', 'tomprogers'], '', '\\', '.new')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: '.new',
			sep: '\\'
		})
	})


	it(`removes ext if newExt is the empty string`, () => {
		expect(
			setExt(true, ['Users', 'tomprogers'], 'file.backup', '/', '')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: 'file',
			sep: '/'
		})

		expect(
			setExt(true, ['Documents and Settings', 'tomprogers'], 'file.backup', '\\', '')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: 'file',
			sep: '\\'
		})
	})


	it(`renames files with empty directories`, () => {
		expect(
			setExt(false, [], '.before', '/', '.after')
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.after',
			sep: '/'
		})

		expect(
			setExt(false, [], '.before', '\\', '.after')
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.after',
			sep: '\\'
		})
	})


	it(`adds an ext to empty paths`, () => {
		expect(
			setExt(false, [], '', '/', '.first')
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.first',
			sep: '/'
		})

		expect(
			setExt(false, [], '', '\\', '.first')
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.first',
			sep: '\\'
		})
	})


	it(`throws a SyntaxError if newExt is not a string`, () => {
		expect(() => {
			setExt('', '', '/', 5)
		}).toThrow(
			TypeError
		)
	})

})
