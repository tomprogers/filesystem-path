const getBasename = require('./get-basename')


describe(`getBasename( absolute, folders, filename, sep )`, () => {

	it(`handles the typical case`, () => {
		expect(getBasename(true, [], 'file.ext', '/')).toBe('file')
		expect(getBasename(true, [], 'multi.dot.name', '/')).toBe('multi.dot')
		expect(getBasename(true, [], 'f.e', '/')).toBe('f')
	})

	it(`handles dotfiles`, () => {
		expect(getBasename(true, [], '.dotfile', '/')).toBe('')
	})

	it(`handles files with no ext`, () => {
		expect(getBasename(true, [], 'noext', '/')).toBe('noext')
	})

	it(`handles dumb hypotheticals`, () => {
		expect(getBasename(true, [], 'sentence.', '/')).toBe('sentence')
	})

})
