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

- `getAbsolute() : Boolean` - reflects whether the path begins with separator
- `getBasename() : String` - returns the basename
- `getDirectory() : String` - returns the directory, without trailing slash
- `getExt() : String` - returns the ext, if any, including leading dot
- `getFilename() : String` - returns the filename
- `getFolders() : Array<String>` - returns mutable list of directories
- `getRoot() : String` - returns sep if path is absolute, empty string otherwise
- `getSegments() : Array<String>` - returns read-only list of directories plus filename
- `getSep() : String` - returns the sep
- `setAbsolute( newAbsolute ) : FilesystemPath` - set whether the path is absolute
- `setBasename( newBasename ) : FilesystemPath` - overwrite the basename
- `setDirectory( newDirectory ) : FilesystemPath` - overwrite everything except the filename
- `setExt( newExt ) : FilesystemPath` - overwrite the ext; leading dot optional (will be added if needed)
- `setFilename( newFilename ) : FilesystemPath` - overwrite the entire filename
- `setFolders( newFolders ) : FilesystemPath` - overwrite the entire list of directories
- `setRoot( newRoot ) : FilesystemPath` - overwrite the leading sep
- `setSegments( newSegments ) : FilesystemPath` - overwrite all directories and filename, but not the root
- `setSep( newSep ) : FilesystemPath` - change the path's sep; only accepts back- and forward-slash
- `toString() : String` - returns the complete path as a string
