const setBasename = require('./set-basename')


describe(`setBasename( absolute, folders, filename, sep, newBasename )`, () => {

	it(`renames files that have both basename and ext`, () => {
		expect(
			setBasename(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '/', 'READ-YOU')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'READ-YOU.md',
			sep: '/'
		})

		expect(
			setBasename(true, ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'], 'README.md', '\\', 'READ-YOU')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'READ-YOU.md',
			sep: '\\'
		})
	})


	it(`renames files that only have basename`, () => {
		expect(
			setBasename(true, ['Users', 'tomprogers'], 'noext', '/', 'new-noext')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: 'new-noext',
			sep: '/'
		})

		expect(
			setBasename(true, ['Documents and Settings', 'tomprogers'], 'noext', '\\', 'new-noext')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: 'new-noext',
			sep: '\\'
		})
	})


	it(`renames files that only have ext`, () => {
		expect(
			setBasename(true, ['Users', 'tomprogers', 'projects', 'filesystem-path'], '.babelrc', '/', 'backup')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'backup.babelrc',
			sep: '/'
		})

		expect(
			setBasename(true, ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'], '.babelrc', '\\', 'backup')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers', 'projects', 'filesystem-path'],
			filename: 'backup.babelrc',
			sep: '\\'
		})
	})


	it(`adds a basename to paths with no filename`, () => {
		expect(
			setBasename(true, ['Users', 'tomprogers'], '', '/', 'new')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: 'new',
			sep: '/'
		})

		expect(
			setBasename(true, ['Documents and Settings', 'tomprogers'], '', '\\', 'new')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: 'new',
			sep: '\\'
		})
	})


	it(`removes basenames if newBasename is the empty string`, () => {
		expect(
			setBasename(true, ['Users', 'tomprogers'], 'backup.npmrc', '/', '')
		).toEqual({
			absolute: true,
			folders: ['Users', 'tomprogers'],
			filename: '.npmrc',
			sep: '/'
		})

		expect(
			setBasename(true, ['Documents and Settings', 'tomprogers'], 'backup.npmrc', '\\', '')
		).toEqual({
			absolute: true,
			folders: ['Documents and Settings', 'tomprogers'],
			filename: '.npmrc',
			sep: '\\'
		})
	})


	it(`renames files with empty directories`, () => {
		expect(
			setBasename(false, [], '.tombstone', '/', 'app')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'app.tombstone',
			sep: '/'
		})

		expect(
			setBasename(false, [], '.tombstone', '\\', 'app')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'app.tombstone',
			sep: '\\'
		})
	})


	it(`adds a basename to empty paths`, () => {
		expect(
			setBasename(false, [], '', '/', 'first')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'first',
			sep: '/'
		})

		expect(
			setBasename(false, [], '', '\\', 'first')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'first',
			sep: '\\'
		})
	})


	it(`throws a SyntaxError if newBasename is not a string`, () => {
		expect(() => {
			setBasename('', '', '/', 5)
		}).toThrow(
			TypeError
		)
	})

})
