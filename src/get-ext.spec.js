const getExt = require('./get-ext')


describe(`getExt( absolute, folders, filename, sep )`, () => {

	it(`handles the typical case`, () => {
		expect(getExt(true, [], 'file.ext', '/')).toBe('.ext')
		expect(getExt(true, [], 'multi.dot.name', '/')).toBe('.name')
		expect(getExt(true, [], 'f.e', '/')).toBe('.e')
	})

	it(`handles dotfiles`, () => {
		expect(getExt(true, [], '.dotfile', '/')).toBe('.dotfile')
	})

	it(`handles files with no ext`, () => {
		expect(getExt(true, [], 'noext', '/')).toBe('')
	})

	it(`handles dumb hypotheticals`, () => {
		expect(getExt(true, [], 'sentence.', '/')).toBe('.')
	})

})
