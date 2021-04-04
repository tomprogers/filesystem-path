const FSP = require('./filesystem-path')


describe(`FilesystemPath class`, () => {

	describe(`constructor`, () => {
		it(`returns instances of FilesystemPath class`, () => {
			let instance = new FSP('')
			expect(instance).toBeInstanceOf(FSP)
		})
	})

	describe(`instance methods`, () => {
		let instance = new FSP('')

		describe(`getBasename`, () => {
			it(`returns a string`, () => expect(typeof instance.getBasename()).toBe('string'))
		})
		describe(`getDirectory`, () => {
			it(`returns a string`, () => expect(typeof instance.getDirectory()).toBe('string'))
		})
		describe(`getExt`, () => {
			it(`returns a string`, () => expect(typeof instance.getExt()).toBe('string'))
		})
		describe(`getFilename`, () => {
			it(`returns a string`, () => expect(typeof instance.getFilename()).toBe('string'))
		})
		describe(`getFolders`, () => {
			it(`returns an array`, () => expect(instance.getFolders()).toBeInstanceOf(Array))
		})
		describe(`getRoot`, () => {
			it(`returns a string`, () => expect(typeof instance.getRoot()).toBe('string'))
		})
		describe(`getSegments`, () => {
			it(`returns an array`, () => expect(instance.getSegments()).toBeInstanceOf(Array))
		})
		describe(`getSep`, () => {
			it(`returns the instance`, () => expect(typeof instance.getSep()).toBe('string'))
		})

		describe(`toString`, () => {
			it(`returns the instance`, () => expect(typeof instance.toString()).toBe('string'))
		})

		describe(`setBasename`, () => {
			it(`returns the instance`, () => expect(instance.setBasename('base')).toBeInstanceOf(FSP))
		})
		describe(`setDirectory`, () => {
			it(`returns the instance`, () => expect(instance.setDirectory('directory')).toBeInstanceOf(FSP))
		})
		describe(`setExt`, () => {
			it(`returns the instance`, () => expect(instance.setExt('ext')).toBeInstanceOf(FSP))
		})
		describe(`setFilename`, () => {
			it(`returns the instance`, () => expect(instance.setFilename('filename')).toBeInstanceOf(FSP))
		})
		describe(`setFolders`, () => {
			it(`returns the instance`, () => expect(instance.setFolders(['folder'])).toBeInstanceOf(FSP))
		})
		describe(`setRoot`, () => {
			it(`returns the instance`, () => expect(instance.setRoot('')).toBeInstanceOf(FSP))
		})
		describe(`setSegments`, () => {
			it(`returns the instance`, () => expect(instance.setSegments(['segment'])).toBeInstanceOf(FSP))
		})
		describe(`setSep`, () => {
			it(`returns the instance`, () => expect(instance.setSep('/')).toBeInstanceOf(FSP))
		})
	})

	describe(`static methods`, () => {
		it.todo(`impl`)
	})

})
