const getPath = require('./get-path')


describe(`getPath( absolute, folders, filename, sep )`, () => {

	it(`handles directory + filename`, () => {
		expect(getPath(
			true,
			['path', 'to'],
			'some.fil',
			'/'
		)).toBe('/path/to/some.fil')
	})

	it(`handles just directory`, () => {
		expect(getPath(
			true,
			['path', 'to'],
			'',
			'/'
		)).toBe('/path/to')
	})

	it(`handles just filename`, () => {
		expect(getPath(
			false,
			[],
			'some.fil',
			'/'
		)).toBe('some.fil')
	})

	it(`handles root`, () => {
		expect(getPath(
			true,
			[],
			'',
			'/'
		)).toBe('/')
	})

	it(`handles rooted files /laptop.md`, () => {
		expect(getPath(
			true,
			[],
			'laptop.md',
			'/'
		)).toBe('/laptop.md')
	})

	it(`handles rooted directories /etc`, () => {
		expect(getPath(
			true,
			['etc'],
			'',
			'/'
		)).toBe('/etc')
	})

})
