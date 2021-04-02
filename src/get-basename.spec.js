const getBasename = require('./get-basename')


describe(`getBasename( directory, filename, sep )`, () => {

	it(`handles the typical case`, () => {
		expect(getBasename(null, 'file.ext')).toBe('file')
		expect(getBasename(null, 'multi.dot.name')).toBe('multi.dot')
		expect(getBasename(null, 'f.e')).toBe('f')
	})

	it(`handles dotfiles`, () => {
		expect(getBasename(null, '.dotfile')).toBe('')
	})

	it(`handles files with no ext`, () => {
		expect(getBasename(null, 'noext')).toBe('noext')
	})

	it(`handles dumb hypotheticals`, () => {
		expect(getBasename(null, 'sentence.')).toBe('sentence')
	})

})
