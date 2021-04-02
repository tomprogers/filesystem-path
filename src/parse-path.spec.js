const parsePath = require('./parse-path')


describe(`parsePath( directory [, filename [, sep ]] )`, () => {

	it(`parses a normal *nix path correctly`, () => {
		expect(
			parsePath(`/Users/tomprogers/projects/filesystem-path/README.md`)
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})
	})

	it(`parses a normal Windows path correctly`, () => {
		expect(
			parsePath(`C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path\\README.md`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`parses dotfiles correctly`, () => {
		expect(
			parsePath(`/Users/tomprogers/.bash_profile`)
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '.bash_profile',
			sep: '/'
		})

		expect(
			parsePath(`C:\\Documents and Settings\\tomprogers\\.ThumbsDB`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			filename: '.ThumbsDB',
			sep: '\\'
		})
	})

	it(`understands the differences between relative & absolute paths`, () => {
		expect(
			parsePath(`src/parse-path.js`)
		).toEqual({
			directory: 'src',
			filename: 'parse-path.js',
			sep: '/'
		})

		expect(
			parsePath(`src\\parse-path.min.js`, `\\`)
		).toEqual({
			directory: 'src',
			filename: 'parse-path.min.js',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parsePath('README.md')
		).toEqual({
			directory: '',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			parsePath('README.md', `\\`)
		).toEqual({
			directory: '',
			filename: 'README.md',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parsePath('filename')
		).toEqual({
			directory: '',
			filename: 'filename',
			sep: '/'
		})

		expect(
			parsePath('filename', `\\`)
		).toEqual({
			directory: '',
			filename: 'filename',
			sep: '\\'
		})
	})

	it(`understands just an ext`, () => {
		expect(
			parsePath('.gitignore')
		).toEqual({
			directory: '',
			filename: '.gitignore',
			sep: '/'
		})

		expect(
			parsePath('.gitignore', `\\`)
		).toEqual({
			directory: '',
			filename: '.gitignore',
			sep: '\\'
		})
	})

	it(`understands just a directory`, () => {
		expect(
			parsePath('/Users/tomprogers')
		).toEqual({
			directory: '/Users/tomprogers',
			filename: '',
			sep: '/'
		})

		expect(
			parsePath('C:\\Documents and Settings\\tomprogers', `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			filename: '',
			sep: '\\'
		})
	})

	it(`understands just a slash`, () => {
		expect(
			parsePath('/')
		).toEqual({
			directory: '/',
			filename: '',
			sep: '/'
		})

		expect(
			parsePath('/', '/')
		).toEqual({
			directory: '/',
			filename: '',
			sep: '/'
		})

		expect(
			parsePath('\\', `\\`)
		).toEqual({
			directory: '\\',
			filename: '',
			sep: '\\'
		})
	})


	it(`understands just a slash and an opposing sep`, () => {
		expect(
			parsePath('/', '\\')
		).toEqual({
			directory: '',
			filename: '/',
			sep: '\\'
		})

		expect(
			parsePath('\\', `/`)
		).toEqual({
			directory: '',
			filename: '\\',
			sep: '/'
		})
	})

})
