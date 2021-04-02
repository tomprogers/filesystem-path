const getPath = require('./get-path')


describe(`getPath( directory, basename, sep )`, () => {

	it(`handles directory + basename`, () => {
		expect(getPath('/path/to', 'some.fil', '/')).toBe('/path/to/some.fil')
	})

	it(`handles just directory`, () => {
		expect(getPath('/path/to', '', '/')).toBe('/path/to')
	})

	it(`handles just basename`, () => {
		expect(getPath('', 'some.fil', '/')).toBe('some.fil')
	})

	it(`handles root`, () => {
		expect(getPath('/', '', '/')).toBe('/')
	})

	it(`handles rooted files /laptop.md`, () => {
		expect(getPath('/', 'laptop.md', '/')).toBe('/laptop.md')
	})

	it(`handles rooted directories /etc`, () => {
		expect(getPath('/etc', '', '/')).toBe('/etc')
	})

})