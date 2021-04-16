const setAbsolute = require('./set-absolute')


describe(`setAbsolute( absolute, folders, filename, sep, newAbsolute )`, () => {

	it(`can change absolute to relative`, () => {
		expect(setAbsolute(
			true,
			['path','to'],
			'some.fil',
			'/',
			false
		)).toEqual({
			absolute: false,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '/'
		})
	})


	it(`can change relative to absolute`, () => {
		expect(setAbsolute(
			false,
			['path','to'],
			'some.fil',
			'/',
			true
		)).toEqual({
			absolute: true,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '/'
		})
	})


	it(`coerces its argument to boolean`, () => {
		expect(setAbsolute(
			false,
			['path','to'],
			'some.fil',
			'/',
			'dogs'
		)).toEqual({
			absolute: true,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '/'
		})

		expect(setAbsolute(
			true,
			['path','to'],
			'some.fil',
			'/',
			0,
		)).toEqual({
			absolute: false,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '/'
		})
	})


	it(`works on nix`, () => {
		expect(setAbsolute(
			true,
			['path','to'],
			'some.fil',
			'/',
			false
		)).toEqual({
			absolute: false,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '/'
		})
	})


	it(`works on win`, () => {
		expect(setAbsolute(
			true,
			['path','to'],
			'some.fil',
			'\\',
			false
		)).toEqual({
			absolute: false,
			folders: ['path','to'],
			filename: 'some.fil',
			sep: '\\'
		})
	})

})
