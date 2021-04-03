const setBasename = require('./set-basename')


describe(`setBasename( directory, filename, sep, newBasename )`, () => {

	it(`renames files that have both basename and ext`, () => {
		expect(
			setBasename('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', 'READ-YOU')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'READ-YOU.md',
			sep: '/'
		})

		expect(
			setBasename('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', 'READ-YOU')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'READ-YOU.md',
			sep: '\\'
		})
	})


	it(`renames files that only have basename`, () => {
		expect(
			setBasename('/Users/tomprogers', 'noext', '/', 'new-noext')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: 'new-noext',
			sep: '/'
		})

		expect(
			setBasename('\\Documents and Settings\\tomprogers', 'noext', '\\', 'new-noext')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: 'new-noext',
			sep: '\\'
		})
	})


	it(`renames files that only have ext`, () => {
		expect(
			setBasename('/Users/tomprogers/projects/filesystem-path', '.babelrc', '/', 'backup')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'backup.babelrc',
			sep: '/'
		})

		expect(
			setBasename('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', '.babelrc', '\\', 'backup')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'backup.babelrc',
			sep: '\\'
		})
	})


	it(`adds a basename to paths with no filename`, () => {
		expect(
			setBasename('/Users/tomprogers', '', '/', 'new')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: 'new',
			sep: '/'
		})

		expect(
			setBasename('\\Documents and Settings\\tomprogers', '', '\\', 'new')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: 'new',
			sep: '\\'
		})
	})


	it(`removes basenames if newBasename is the empty string`, () => {
		expect(
			setBasename('/Users/tomprogers', 'backup.npmrc', '/', '')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '.npmrc',
			sep: '/'
		})

		expect(
			setBasename('\\Documents and Settings\\tomprogers', 'backup.npmrc', '\\', '')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: '.npmrc',
			sep: '\\'
		})
	})


	it(`renames files with empty directories`, () => {
		expect(
			setBasename('', '.tombstone', '/', 'app')
		).toEqual({
			directory: '',
			filename: 'app.tombstone',
			sep: '/'
		})

		expect(
			setBasename('', '.tombstone', '\\', 'app')
		).toEqual({
			directory: '',
			filename: 'app.tombstone',
			sep: '\\'
		})
	})


	it(`adds a basename to empty paths`, () => {
		expect(
			setBasename('', '', '/', 'first')
		).toEqual({
			directory: '',
			filename: 'first',
			sep: '/'
		})

		expect(
			setBasename('', '', '\\', 'first')
		).toEqual({
			directory: '',
			filename: 'first',
			sep: '\\'
		})
	})


	it(`throws a SyntaxError if newBasename is not a string`, () => {
		expect(() => {
			setBasename('', '', '/', 5)
		}).toThrow(
			SyntaxError
		)
	})

})
