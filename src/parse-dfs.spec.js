const parseDFS = require('./parse-dfs')


describe(`parseDFS( directory [, filename [, sep ]] )`, () => {

	it(`parses a normal *nix path correctly`, () => {
		expect(
			parseDFS(`/Users/tomprogers/projects/filesystem-path/README.md`)
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})
	})

	it(`parses a normal Windows path correctly`, () => {
		expect(
			parseDFS(`C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path\\README.md`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`parses dotfiles correctly`, () => {
		expect(
			parseDFS(`/Users/tomprogers/.bash_profile`)
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '.bash_profile',
			sep: '/'
		})

		expect(
			parseDFS(`C:\\Documents and Settings\\tomprogers\\.ThumbsDB`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			filename: '.ThumbsDB',
			sep: '\\'
		})
	})

	it(`understands the differences between relative & absolute paths`, () => {
		expect(
			parseDFS(`src/parse-path.js`)
		).toEqual({
			directory: 'src',
			filename: 'parse-path.js',
			sep: '/'
		})

		expect(
			parseDFS(`src\\parse-path.min.js`, `\\`)
		).toEqual({
			directory: 'src',
			filename: 'parse-path.min.js',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parseDFS('README.md')
		).toEqual({
			directory: '',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			parseDFS('README.md', `\\`)
		).toEqual({
			directory: '',
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parseDFS('filename')
		).toEqual({
			directory: '',
			filename: 'filename',
			sep: '/'
		})

		expect(
			parseDFS('filename', `\\`)
		).toEqual({
			directory: '',
			filename: 'filename',
			sep: '\\'
		})
	})

	it(`understands just an ext`, () => {
		expect(
			parseDFS('.gitignore')
		).toEqual({
			directory: '',
			filename: '.gitignore',
			sep: '/'
		})

		expect(
			parseDFS('.gitignore', `\\`)
		).toEqual({
			directory: '',
			filename: '.gitignore',
			sep: '\\'
		})
	})

	it(`understands just a directory`, () => {
		expect(
			parseDFS('/Users/tomprogers')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('C:\\Documents and Settings\\tomprogers', `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			filename: '',
			sep: '\\'
		})
	})

	it(`understands just a slash`, () => {
		expect(
			parseDFS('/')
		).toEqual({
			directory: '/',
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('/', '/')
		).toEqual({
			directory: '/',
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('\\', `\\`)
		).toEqual({
			directory: '\\',
			filename: '',
			sep: '\\'
		})
	})


	it(`throws SyntaxError if directory uses mismatched sep`, () => {
		expect(() => {
			parseDFS('/', '\\')
		}).toThrow(
			SyntaxError
		)

		expect(() => {
			parseDFS('\\', `/`)
		}).toThrow(
			SyntaxError
		)
	})

})
