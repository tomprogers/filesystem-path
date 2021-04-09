const parseDFS = require('./parse-dfs')


describe(`parseDFS( directory [, filename [, sep ]] )`, () => {

	it(`parses a normal *nix path correctly`, () => {
		expect(
			parseDFS(`/Users/tomprogers/projects/filesystem-path/README.md`)
		).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'README.md',
			sep: '/'
		})
	})

	it(`parses a normal Windows path correctly`, () => {
		expect(
			parseDFS(`\\Documents and Settings\\tomprogers\\projects\\filesystem-path\\README.md`, `\\`)
		).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers', 'projects', 'filesystem-path' ],
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`parses dotfiles correctly`, () => {
		expect(
			parseDFS(`/Users/tomprogers/.bash_profile`)
		).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers' ],
			filename: '.bash_profile',
			sep: '/'
		})
	})

	it(`understands the differences between relative & absolute paths`, () => {
		expect(
			parseDFS(`src/parse-path.js`)
		).toEqual({
			absolute: false,
			folders: [ 'src' ],
			filename: 'parse-path.js',
			sep: '/'
		})

		expect(
			parseDFS(`src\\parse-path.min.js`, `\\`)
		).toEqual({
			absolute: false,
			folders: [ 'src' ],
			filename: 'parse-path.min.js',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parseDFS('README.md')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'README.md',
			sep: '/'
		})

		expect(
			parseDFS('README.md', `\\`)
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parseDFS('filename')
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'filename',
			sep: '/'
		})

		expect(
			parseDFS('filename', `\\`)
		).toEqual({
			absolute: false,
			folders: [],
			filename: 'filename',
			sep: '\\'
		})
	})

	it(`understands just an ext`, () => {
		expect(
			parseDFS('.gitignore')
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.gitignore',
			sep: '/'
		})

		expect(
			parseDFS('.gitignore', `\\`)
		).toEqual({
			absolute: false,
			folders: [],
			filename: '.gitignore',
			sep: '\\'
		})
	})

	it(`understands just a directory`, () => {
		expect(
			parseDFS('/Users/tomprogers')
		).toEqual({
			absolute: true,
			folders: [ 'Users', 'tomprogers' ],
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('\\Documents and Settings\\tomprogers', `\\`)
		).toEqual({
			absolute: true,
			folders: [ 'Documents and Settings', 'tomprogers' ],
			filename: '',
			sep: '\\'
		})
	})

	it(`understands just a slash`, () => {
		expect(
			parseDFS('/')
		).toEqual({
			absolute: true,
			folders: [],
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('/', '/')
		).toEqual({
			absolute: true,
			folders: [],
			filename: '',
			sep: '/'
		})

		expect(
			parseDFS('\\', `\\`)
		).toEqual({
			absolute: true,
			folders: [],
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
