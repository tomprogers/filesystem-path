const parsePath = require('./parse-path')


describe(`parsePath( directory [, basename [, sep ]] )`, () => {

	it(`parses a normal *nix path correctly`, () => {
		expect(
			parsePath(`/Users/tomprogers/projects/filesystem-path/README.md`)
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			basename: 'README.md',
			sep: '/'
		})
	})

	it(`parses a normal Windows path correctly`, () => {
		expect(
			parsePath(`C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path\\README.md`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			basename: 'README.md',
			sep: '\\'
		})
	})

	it(`parses dotfiles correctly`, () => {
		expect(
			parsePath(`/Users/tomprogers/.bash_profile`)
		).toEqual({
			directory: '/Users/tomprogers',
			basename: '.bash_profile',
			sep: '/'
		})

		expect(
			parsePath(`C:\\Documents and Settings\\tomprogers\\.ThumbsDB`, `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			basename: '.ThumbsDB',
			sep: '\\'
		})
	})

	it(`understands the differences between relative & absolute paths`, () => {
		expect(
			parsePath(`src/parse-path.js`)
		).toEqual({
			directory: 'src',
			basename: 'parse-path.js',
			sep: '/'
		})

		expect(
			parsePath(`src\\parse-path.min.js`, `\\`)
		).toEqual({
			directory: 'src',
			basename: 'parse-path.min.js',
			sep: '\\'
		})
	})

	it(`understands just a basename`, () => {
		expect(
			parsePath('README.md')
		).toEqual({
			directory: '',
			basename: 'README.md',
			sep: '/'
		})

		expect(
			parsePath('README.md', `\\`)
		).toEqual({
			directory: '',
			basename: 'README.md',
			sep: '\\'
		})
	})

	it(`understands just a filename`, () => {
		expect(
			parsePath('filename')
		).toEqual({
			directory: '',
			basename: 'filename',
			sep: '/'
		})

		expect(
			parsePath('filename', `\\`)
		).toEqual({
			directory: '',
			basename: 'filename',
			sep: '\\'
		})
	})

	it(`understands just an ext`, () => {
		expect(
			parsePath('.gitignore')
		).toEqual({
			directory: '',
			basename: '.gitignore',
			sep: '/'
		})

		expect(
			parsePath('.gitignore', `\\`)
		).toEqual({
			directory: '',
			basename: '.gitignore',
			sep: '\\'
		})
	})

	it(`understands just a directory`, () => {
		expect(
			parsePath('/Users/tomprogers')
		).toEqual({
			directory: '/Users/tomprogers',
			basename: '',
			sep: '/'
		})

		expect(
			parsePath('C:\\Documents and Settings\\tomprogers', `\\`)
		).toEqual({
			directory: 'C:\\Documents and Settings\\tomprogers',
			basename: '',
			sep: '\\'
		})
	})

	it(`understands just a slash`, () => {
		expect(
			parsePath('/')
		).toEqual({
			directory: '/',
			basename: '',
			sep: '/'
		})

		expect(
			parsePath('/', '/')
		).toEqual({
			directory: '/',
			basename: '',
			sep: '/'
		})

		expect(
			parsePath('\\', `\\`)
		).toEqual({
			directory: '\\',
			basename: '',
			sep: '\\'
		})
	})


	it(`understands just a slash and an opposing sep`, () => {
		expect(
			parsePath('/', '\\')
		).toEqual({
			directory: '',
			basename: '/',
			sep: '\\'
		})

		expect(
			parsePath('\\', `/`)
		).toEqual({
			directory: '',
			basename: '\\',
			sep: '/'
		})
	})

})
