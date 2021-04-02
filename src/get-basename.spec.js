const getFilename = require('./get-basename')


describe(`getBasename( directory, basename, sep )`, () => {

	it(`handles the typical case`, () => {
		expect(getFilename(null, 'file.ext')).toBe('file')
		expect(getFilename(null, 'multi.dot.name')).toBe('multi.dot')
		expect(getFilename(null, 'f.e')).toBe('f')
	})

	it(`handles dotfiles`, () => {
		expect(getFilename(null, '.dotfile')).toBe('')
	})

	it(`handles files with no ext`, () => {
		expect(getFilename(null, 'noext')).toBe('noext')
	})

	it(`handles dumb hypotheticals`, () => {
		expect(getFilename(null, 'sentence.')).toBe('sentence')
	})

})
