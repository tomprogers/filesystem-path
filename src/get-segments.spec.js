const getSegments = require('./get-segments')


describe(`getSegments( directory, filename, sep )`, () => {

	it(`includes every path segment, including filename, in source order`, () => {
		expect(
			getSegments('/Users/tomprogers/projects/filesystem-path', 'README.md', '/')
		).toEqual([
			'Users',
			'tomprogers',
			'projects',
			'filesystem-path',
			'README.md'
		])
	})

	it(`doesn't includes a first empty segment for rooted paths`, () => {
		expect(
			getSegments('/Users/tomprogers/projects/filesystem-path', 'README.md', '/')[0]
		).toBe('Users')

		expect(
			getSegments('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', 'README.md', '\\')[0]
		).toBe('Documents and Settings')
	})

	it(`handles just a directory`, () => {
		expect(
			getSegments('/Users/tomprogers/projects/filesystem-path', '', '/')
		).toEqual([
			'Users',
			'tomprogers',
			'projects',
			'filesystem-path'
		])

		expect(
			getSegments('\\Documents and Settings\\tomprogers\\projects\\filesystem-path', '', '\\')
		).toEqual([
			'Documents and Settings',
			'tomprogers',
			'projects',
			'filesystem-path'
		])
	})

	it(`handles just a filename`, () => {
		expect(
			getSegments('', 'README.md', '/')
		).toEqual([
			'README.md'
		])

		expect(
			getSegments('', 'README.md', '\\')
		).toEqual([
			'README.md'
		])
	})

	xit(`handles root`, () => {

	})

})
