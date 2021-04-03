const getExt = require('./get-ext')


describe(`getExt( directory, filename, sep )`, () => {

	it(`handles the typical case`, () => {
		expect(getExt(null, 'file.ext')).toBe('.ext')
		expect(getExt(null, 'multi.dot.name')).toBe('.name')
		expect(getExt(null, 'f.e')).toBe('.e')
	})

	it(`handles dotfiles`, () => {
		expect(getExt(null, '.dotfile')).toBe('.dotfile')
	})

	it(`handles files with no ext`, () => {
		expect(getExt(null, 'noext')).toBe('')
	})

	it(`handles dumb hypotheticals`, () => {
		expect(getExt(null, 'sentence.')).toBe('.')
	})

})
