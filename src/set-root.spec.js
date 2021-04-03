const setRoot = require('./set-root')


describe(`setRoot( directory, filename, sep, newRoot )`, () => {

	it(`removes root if newRoot is false`, () => {
		expect(
			setRoot('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', false)
		).toEqual({
			directory: 'Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', false)
		).toEqual({
			directory: 'Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', false)
		).toEqual({
			directory: 'Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})

		expect(
			setRoot('Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', false)
		).toEqual({
			directory: 'Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`removes root is newRoot is empty string`, () => {
		expect(
			setRoot('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '')
		).toEqual({
			directory: 'Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', '')
		).toEqual({
			directory: 'Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '')
		).toEqual({
			directory: 'Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})

		expect(
			setRoot('Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '')
		).toEqual({
			directory: 'Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`adds root if newRoot is true`, () => {
		expect(
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', true)
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', true)
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', true)
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})

		expect(
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', true)
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`adds root if newRoot is sep`, () => {
		expect(
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', '/')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('/Users/tomprogers/projects/filesystem-path', 'README.md', '/', '/')
		).toEqual({
			directory: '/Users/tomprogers/projects/filesystem-path',
			filename: 'README.md',
			sep: '/'
		})

		expect(
			setRoot('Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '\\')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})

		expect(
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '\\')
		).toEqual({
			directory: '\\Documents and Settings\\tomprogers\\projects\\filesystem-path',
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`throws RangeError if newRoot is not one of the four acceptable values`, () => {
		expect(() => {
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', 'true')
		}).toThrow(
			RangeError
		)

		expect(() => {
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', 'C:')
		}).toThrow(
			RangeError
		)
	})


	it(`throws RangeError if newRoot is a mismatched sep`, () => {
		expect(() => {
			setRoot('Users/tomprogers/projects/filesystem-path', 'README.md', '/', '\\')
		}).toThrow(
			RangeError
		)

		expect(() => {
			setRoot('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\', '/')
		}).toThrow(
			RangeError
		)
	})

})
