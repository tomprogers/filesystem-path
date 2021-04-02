const getRoot = require('./get-root')


describe(`getRoot( directory, filename, sep )`, () => {

	it(`returns the empty string if directory does not begin with sep`, () => {
		expect(
			getRoot('path/to', 'some.fil', '/')
		).toBe('')

		expect(
			getRoot('Documents and Settings\\tomprogers', 'some.fil', '\\')
		).toBe('')
	})

	it(`returns the appropriate sep character if directory begins with one`, () => {
		expect(
			getRoot('/path/to', 'some.fil', '/')
		).toBe('/')

		expect(
			getRoot('/', '', '/')
		).toBe('/')

		expect(
			getRoot('\\Documents and Settings\\tomprogers', 'some.fil', '\\')
		).toBe('\\')

		expect(
			getRoot('\\', '', '\\')
		).toBe('\\')
	})

})
