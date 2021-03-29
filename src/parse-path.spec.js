const parsePath = require('./parse-path')
// `/etc/pam.d` // THIS IS MY KRYPTONIE!

describe(`parsePath( path, sep=/ )`, () => {

	it(`parses a normal *nix path correctly`, () => {
		let parsed = parsePath(`/Users/tomprogers/projects/filesystem-path/README.md`)

		expect(parsed.root).toBe(`/`)
		expect(parsed.directory).toBe(`/Users/tomprogers/projects/filesystem-path`)
		expect(parsed.folder).toBe(`filesystem-path`)
		expect(parsed.basename).toBe(`README.md`)
		expect(parsed.filename).toBe(`README`)
		expect(parsed.ext).toBe(`md`)
		expect(parsed._isAbsolute).toBe(true)
	})

	it(`parses a normal Windows path correctly`, () => {
		let parsed = parsePath(`C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path\\README.md`, `\\`)

		expect(parsed.root).toBe(``)
		expect(parsed.directory).toBe(`C:\\Documents and Settings\\tomprogers\\projects\\filesystem-path`)
		expect(parsed.folder).toBe(`filesystem-path`)
		expect(parsed.basename).toBe(`README.md`)
		expect(parsed.filename).toBe(`README`)
		expect(parsed.ext).toBe(`md`)
		expect(parsed._isAbsolute).toBe(false)
	})

	it(`parses dotfiles correctly`, () => {
		let parsedNix = parsePath(`/Users/tomprogers/.bash_profile`)
		expect(parsedNix.root).toBe(`/`)
		expect(parsedNix.directory).toBe(`/Users/tomprogers`)
		expect(parsedNix.folder).toBe(`tomprogers`)
		expect(parsedNix.basename).toBe(`.bash_profile`)
		expect(parsedNix.filename).toBe(``)
		expect(parsedNix.ext).toBe(`bash_profile`)
		expect(parsedNix._isAbsolute).toBe(true)

		let parsedWin = parsePath(`C:\\Documents and Settings\\tomprogers\\.ThumbsDB`, `\\`)
		expect(parsedWin.root).toBe(``)
		expect(parsedWin.directory).toBe(`C:\\Documents and Settings\\tomprogers`)
		expect(parsedWin.folder).toBe(`tomprogers`)
		expect(parsedWin.basename).toBe(`.ThumbsDB`)
		expect(parsedWin.filename).toBe(``)
		expect(parsedWin.ext).toBe(`ThumbsDB`)
		expect(parsedWin._isAbsolute).toBe(false)
	})


	// rel & abs
	// `src/parse-path.js`

	// just a basename
	// `README.md`

	// just a filename
	// `README`

	// just an ext
	// `.gitignore`

	// just a directory
	// `/Users/tomprogers`

	// just a slash
	// `/`

	// just a slash and a path sep
	// `/`, `/`

	// just a slash and an opposing path sep
	// `\\`, `/`

	// root
	// directory
	// folder
	// basename
	// filename
	// ext
	// _isAbsolute

})
