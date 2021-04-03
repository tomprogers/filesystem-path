const setDirectory = require('./set-directory')


describe(`setDirectory( directory, filename, sep, newDirectory`, () => {

	it(`replaces the current directory`, () => {
		expect(
			setDirectory( '/alpha/to', 'some.fil', '/', '/beta/to')
		).toEqual({
			directory: '/beta/to',
			filename: 'some.fil',
			sep: '/'
		})

		expect(
			setDirectory( '/alpha/to', 'some.fil', '/', '')
		).toEqual({
			directory: '',
			filename: 'some.fil',
			sep: '/'
		})

		expect(
			setDirectory( '\\alpha\\to', 'some.fil', '\\', '\\beta\\to')
		).toEqual({
			directory: '\\beta\\to',
			filename: 'some.fil',
			sep: '\\'
		})

		expect(
			setDirectory( '\\alpha\\to', 'some.fil', '\\', '')
		).toEqual({
			directory: '',
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against paths with no directory`, () => {
		expect(
			setDirectory( '', 'some.fil', '/', '/alpha/to')
		).toEqual({
			directory: '/alpha/to',
			filename: 'some.fil',
			sep: '/'
		})

		expect(
			setDirectory( '', 'some.fil', '\\', '\\alpha\\to')
		).toEqual({
			directory: '\\alpha\\to',
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against rooted and unrooted paths`, () => {
		expect(
			setDirectory( '/alpha/to', 'some.fil', '/', 'beta/to')
		).toEqual({
			directory: 'beta/to',
			filename: 'some.fil',
			sep: '/'
		})

		expect(
			setDirectory( 'alpha/to', 'some.fil', '/', '/beta/to')
		).toEqual({
			directory: '/beta/to',
			filename: 'some.fil',
			sep: '/'
		})

		expect(
			setDirectory( '\\alpha\\to', 'some.fil', '\\', 'beta\\to')
		).toEqual({
			directory: 'beta\\to',
			filename: 'some.fil',
			sep: '\\'
		})

		expect(
			setDirectory( 'alpha\\to', 'some.fil', '\\', '\\beta\\to')
		).toEqual({
			directory: '\\beta\\to',
			filename: 'some.fil',
			sep: '\\'
		})
	})


	it(`works against paths with no filename`, () => {
		expect(
			setDirectory( '/alpha/to', '', '/', '/beta/to')
		).toEqual({
			directory: '/beta/to',
			filename: '',
			sep: '/'
		})

		expect(
			setDirectory( '\\alpha\\to', '', '\\', '\\beta\\to')
		).toEqual({
			directory: '\\beta\\to',
			filename: '',
			sep: '\\'
		})
	})


	it(`throws TypeError if newDirectory not a string`, () => {
		expect(() => {
			setDirectory('', '', '/', 5)
		}).toThrow(
			TypeError
		)
	})


	it(`throws SyntaxError if new directory uses wrong sep`, () => {
		expect(() => {
			setDirectory('', '', '/', '\\windows')
		}).toThrow(
			SyntaxError
		)

		expect(() => {
			setDirectory('', '', '\\', '/nix')
		}).toThrow(
			SyntaxError
		)
	})

})
