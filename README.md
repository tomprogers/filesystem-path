# `FilesystemPath` class

A utility class, like native `Date`, that provides a fluent interface over
strings representing paths on a computer filesystem. Better than doing string
surgery.

Does not actually touch the filesystem.


## Installation and usage

Install from npm:

```sh
npm install filesystem-path
```


Import and use the class:

```js
const FilesystemPath = require('filesystem-path')

let home = new FilesystemPath('/Users/tomprogers')
//> '/Users/tomprogers'

home.setFilename('.npmrc')
//> '/Users/tomprogers/.npmrc'

home.setDirectory('/Users/tomprogers/projects/filesystem-path')
//> '/Users/tomprogers/projects/filesystem-path/.npmrc'
```


## Anatomy of a FilesystemPath

The **FilesystemPath** class provides methods for accessing and mutating
specific portions of a path by name. The parts are:

```
/Users/tomprogers/projects/filesystem─path/README.md
└──────────────────────────────────────────────────┴   path

/Users/tomprogers/projects/filesystem─path/README.md
└────────────────────────────────────────┴             directory

/Users/tomprogers/projects/filesystem─path/README.md
 └───┘ └────────┘ └──────┘ └─────────────┘ └───────┴   segments (array)

/Users/tomprogers/projects/filesystem─path/README.md
 └───┘ └────────┘ └──────┘ └─────────────┴             folders (array)

/Users/tomprogers/projects/filesystem─path/README.md
                                           └───────┴   filename

/Users/tomprogers/projects/filesystem─path/README.md
                                           └────┴      basename

/Users/tomprogers/projects/filesystem─path/README.md
                                                 └─┴   ext (incl. dot)

/Users/tomprogers/projects/filesystem─path/README.md
└                                                      root (the slash)
```

Thus, for the example path:

| Part      | Value |
|       --: | :-- |
| root      | `"/"` |
| folders   | `[ "Users", "tomprogers", "projects", "filesystem─path" ]` |
| segments  | `[ "Users", "tomprogers", "projects", "filesystem─path", "README.md" ]` |
| directory | `"/Users/tomprogers/projects/filesystem-path"` |
| filename  | `"README.md"` |
| basename  | `"README"` |
| ext       | `".md"` |

<sup>
Note: this library deliberately uses the terms "basename" and "filename"
opposite the *nix convention, which I've always felt is obviously
counterintuitive. Here, the "base" plus the "extension" yields the full
"filename."
</sup>


## API


### Construction

The **FilesystemPath** constructor supports a few signatures:

- `new FilesystemPath( path )`

This is the easiest way, but it forces the parser to guess what the directory separator is, and whether the final segment names a directory or a file. This can produce bad results in some cases.

Here, the parser misinterprets the final path segment as a filename because the final segment has a dotted suffix that looks like a file extension, and because no hints are provided to suggest otherwise:

```js
// `/etc/pam.d` is a directory on *nix systems that houses PAM stuff, not a file
new FilesystemPath('/etc/pam.d')
//> directory='/etc'   filename='pam.d'
```

- `new FilesystemPath( directory, filename, sep )`

Specifies everything unambiguously, guaranteed to produce an instance that behaves correctly.

```js
new FilesystemPath( '/Users/tomprogers/projects/filesystem-path', 'README.md', '/' )
```

Argument order is important, but all three arguments are optional, so all these also work:

- `new FilesystemPath( path, sep )`
- `new FilesystemPath( directory, filename )`
- `new FilesystemPath( filename )`
- `new FilesystemPath( filename, sep )`
- `new FilesystemPath( sep )`


### Instance methods

Every instance has methods for getting and setting the different parts of the
path. Generally speaking, every getter returns a String, and every setter returns the mutated instance (to support chaining).

- `getBasename()` returns the portion of the filename before the final dot
- `getDirectory()` returns the entire path minus the filename and any directory
separator immediately preceding the filename
- `getExt()` returns the shortest dotted suffix (with dot) from the final path
segment (if the final segment is known to be a file and not a directory whose
name includes a dot)
- `getFilename()` returns the final path segment if that segment is known to not
be a directory
- `getFolders()` returns an array of the folders named in the path
- `getRoot()` returns the first character of the path if that character is a
directory separator
- `getSegments()` returns an array of the folders named in the path, followed by
the filename (if there is one)
- `getSep()` returns whichever slash character the path uses as a directory
separator
- `setBasename( newBasename: String )` overwrites the basename (or adds one, if
initially blank)
- `setDirectory( newDirectory: String )` overwrites the directory (or adds one,
if initially blank)
- `setExt( newExt: String )` overwrites the ext (or adds one, if initially blank)
- `setFilename( newFilename: String )` overwrites the filename (or adds one, if
initially blank)
- `setFolders( newFolders: Array<String> )` replaces the entire set of path segments before
the filename
- `setRoot( newRoot: String|Boolean )` changes whether the path is rooted or not
- `setSegments( newSegments: Array<String> )` overwrites the list of folders (like `setFolders`), plus the filename
- `setSep( newSep: String )` changes the directory separator that joins the path segments (only accepts the two slashes)
- `toString()` returns the complete path as a string
