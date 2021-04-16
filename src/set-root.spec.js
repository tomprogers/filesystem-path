const setRoot = require('./set-root')


describe(`setRoot( absolute, folders, filename, sep, newRoot )`, () => {

	it(`removes root if newRoot is false`, () => {
		expect(setRoot(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			false
		)).toEqual({
			absolute: false,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			false,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			false
		)).toEqual({
			absolute: false,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			false
		)).toEqual({
			absolute: false,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})

		expect(setRoot(
			false,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			false
		)).toEqual({
			absolute: false,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`removes root if newRoot is empty string`, () => {
		expect(setRoot(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			''
		)).toEqual({
			absolute: false,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			false,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			''
		)).toEqual({
			absolute: false,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			''
		)).toEqual({
			absolute: false,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})

		expect(setRoot(
			false,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			''
		)).toEqual({
			absolute: false,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`adds root if newRoot is true`, () => {
		expect(setRoot(
			false,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			true
		)).toEqual({
			absolute: true,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			true
		)).toEqual({
			absolute: true,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			false,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			true
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})

		expect(setRoot(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			true
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`adds root if newRoot is sep`, () => {
		expect(setRoot(
			false,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			'/'
		)).toEqual({
			absolute: true,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			'/'
		)).toEqual({
			absolute: true,
			folders: ['Users','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '/'
		})

		expect(setRoot(
			false,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			'\\'
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})

		expect(setRoot(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			'\\'
		)).toEqual({
			absolute: true,
			folders: ['Documents and Settings','tomprogers','projects','filesystem-path'],
			filename: 'README.md',
			sep: '\\'
		})
	})


	it(`throws RangeError if newRoot is not one of the four acceptable values`, () => {
		expect(() => setRoot(
			true,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			'true'
		)).toThrow(
			RangeError
		)

		expect(() => setRoot(
			true,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			'C:'
		)).toThrow(
			RangeError
		)
	})


	it(`throws RangeError if newRoot is a mismatched sep`, () => {
		expect(() => setRoot(
			false,
			['Users','tomprogers','projects','filesystem-path'],
			'README.md',
			'/',
			'\\'
		)).toThrow(
			RangeError
		)

		expect(() => setRoot(
			false,
			['Documents and Settings','tomprogers','projects','filesystem-path'],
			'README.md',
			'\\',
			'/'
		)).toThrow(
			RangeError
		)
	})

})
