const setExt = require('./set-ext')


describe(`setExt( directory, filename, sep, newExt`, () => {

	it(`accepts newExt whether or not it has leading dot`, () => {
		expect(
			setExt('/path', 'file.ext1', '/', '.ext2')
		).toEqual({
			directory: '/path',
			filename: 'file.ext2',
			sep: '/'
		})

		expect(
			setExt('/path', 'file.ext1', '/', 'ext2')
		).toEqual({
			directory: '/path',
			filename: 'file.ext2',
			sep: '/'
		})
	})


	it(`renames files that have both basename and ext`, () => {
		expect(
			setExt('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '.txt')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.txt',
			sep: '/'
		})

		expect(
			setExt('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '.txt')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.txt',
			sep: '\\'
		})
	})


	it(`renames files that only have basename`, () => {
		expect(
			setExt('/Users/tomprogers', 'noext', '/', '.new')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: 'noext.new',
			sep: '/'
		})

		expect(
			setExt('\\Documents and Settings\\tomprogers', 'noext', '\\', '.new')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: 'noext.new',
			sep: '\\'
		})
	})


	it(`renames files that only have ext`, () => {
		expect(
			setExt('/Users/tomprogers/projects/filesystem-path', '.babelrc', '/', '.gitignore')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: '.gitignore',
			sep: '/'
		})

		expect(
			setExt('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', '.babelrc', '\\', '.gitignore')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: '.gitignore',
			sep: '\\'
		})
	})


	it(`adds an ext to paths with no filename`, () => {
		expect(
			setExt('/Users/tomprogers', '', '/', '.new')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '.new',
			sep: '/'
		})

		expect(
			setExt('\\Documents and Settings\\tomprogers', '', '\\', '.new')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: '.new',
			sep: '\\'
		})
	})


	it(`removes ext if newExt is the empty string`, () => {
		expect(
			setExt('/Users/tomprogers', 'file.backup', '/', '')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: 'file',
			sep: '/'
		})

		expect(
			setExt('\\Documents and Settings\\tomprogers', 'file.backup', '\\', '')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers',
			filename: 'file',
			sep: '\\'
		})
	})


	it(`renames files with empty directories`, () => {
		expect(
			setExt('', '.before', '/', '.after')
		).toEqual({
			directory: '',
			filename: '.after',
			sep: '/'
		})

		expect(
			setExt('', '.before', '\\', '.after')
		).toEqual({
			directory: '',
			filename: '.after',
			sep: '\\'
		})
	})


	it(`adds an ext to empty paths`, () => {
		expect(
			setExt('', '', '/', '.first')
		).toEqual({
			directory: '',
			filename: '.first',
			sep: '/'
		})

		expect(
			setExt('', '', '\\', '.first')
		).toEqual({
			directory: '',
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
