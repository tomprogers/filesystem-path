const getRoot = require('./get-root')


describe(`getRoot( absolute, folders, filename, sep )`, () => {

	it(`returns the empty string if directory does not begin with sep`, () => {
		expect(getRoot(
			false,
			['path', 'to'],
			'some.fil',
			'/'
		)).toBe('')

		expect(getRoot(
			false,
			['Documents and Settings', 'tomprogers'],
			'some.fil',
			'\\'
		)).toBe('')
	})

	it(`returns the appropriate sep character if directory begins with one`, () => {
		expect(getRoot(
			true,
			['path', 'to'],
			'some.fil',
			'/'
		)).toBe('/')

		expect(getRoot(
			true,
			[],
			'',
			'/'
		)).toBe('/')

		expect(getRoot(
			true,
			['Documents and Settings', 'tomprogers'],
			'some.fil',
			'\\'
		)).toBe('\\')

		expect(getRoot(
			true,
			[],
			'',
			'\\'
		)).toBe('\\')
	})

})
