const setDirectory = require('./set-directory')


describe(`setDirectory(absolute, folders, filename, sep, newDirectory`, () => {

	it(`replaces the current directory`, () => {
		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'/',
			'/beta/to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'/',
			''
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'\\',
			'\\beta\\to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '\\'
		})

		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'\\',
			''
		)).toEqual({
			absolute: false,
			folders: [],
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against paths with no directory`, () => {
		expect(setDirectory(
			true,
			[],
			'some.fil',
			'/',
			'/alpha/to'
		)).toEqual({
			absolute: true,
			folders: ['alpha', 'to'],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setDirectory(
			true,
			[],
			'some.fil',
			'\\',
			'\\alpha\\to'
		)).toEqual({
			absolute: true,
			folders: ['alpha', 'to'],
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against rooted and unrooted paths`, () => {
		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'/',
			'beta/to'
		)).toEqual({
			absolute: false,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setDirectory(
			false,
			['alpha', 'to'],
			'some.fil',
			'/',
			'/beta/to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setDirectory(
			true,
			['alpha', 'to'],
			'some.fil',
			'\\',
			'beta\\to'
		)).toEqual({
			absolute: false,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '\\'
		})

		expect(setDirectory(
			false,
			['alpha', 'to'],
			'some.fil',
			'\\',
			'\\beta\\to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against paths with no filename`, () => {
		expect(setDirectory(
			true,
			['alpha', 'to'],
			'',
			'/',
			'/beta/to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: '',
			sep: '/'
		})

		expect(setDirectory(
			true,
			['alpha', 'to'],
			'',
			'\\',
			'\\beta\\to'
		)).toEqual({
			absolute: true,
			folders: [ 'beta', 'to' ],
			filename: '',
			sep: '\\'
		})
	})


	it(`throws TypeError if newDirectory not a string`, () => {
		expect(() => setDirectory(
			true,
			[],
			'',
			'/',
			5
		)).toThrow(
			TypeError
		)
	})


	it(`throws SyntaxError if new directory uses wrong sep`, () => {
		expect(() => setDirectory(
			true,
			[],
			'',
			'/',
			'\\windows'
		)).toThrow(
			SyntaxError
		)

		expect(() => setDirectory(
			true,
			[],
			'',
			'\\',
			'/nix'
		)).toThrow(
			SyntaxError
		)
	})

})
