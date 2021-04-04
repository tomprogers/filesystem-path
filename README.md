# class FilesystemPath

A utility class, like native `Date`, that provides a fluent interface over
strings representing paths on a computer filesystem, rather than doing surgery
on strings.

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
specific portions of a path by name:

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
                                                 └─┴   ext

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


### Instance methods

- `getBasename()` // str || ''
- `getDirectory()` // str || ''
- `getExt()` // str || ''
- `getFilename()` // str || ''
- `getFolders()` // Array<String> -- each folder in order, minus anything known to be a filename
- `getRoot()` // '/' | undefined
- `getSegments()` //> Array<String> -- each folder, and the filename, is a segment
- `getSep()` // '/' || '\'
- `setBasename( str )` //> FilesystemPath
- `setDirectory( str )` //> FilesystemPath
- `setExt( str )` //> FilesystemPath
- `setFilename( str )` //> FilesystemPath
- `setFolder( str )` //> FilesystemPath
- `setRoot( str )` //> FilesystemPath
- `setSep( str )` //> FilesystemPath
- `canonicalize()` //> FilesystemPath
- `escape()` //> String


### JS ecosystem methods

- `toString()` // for JS ecosystem
- `toJSON()` // for JS ecosystem


### Borrowed String methods

- `replace()` // like String.replace, operates on raw path, returns self


### Borrowed RegExp methods // treats segments as lines unless `/g` flag

- test
- match
- search
- exec


### Borrowed Array methods

- `slice()` // operates on segments
- `splice()` // operates on segments
- `push()` // operates on segments
- `pop()` // operates on segments
- `shift()` // operates on segments
- `unshift()` // operates on segments


### Static methods

- `canonicalize( path:String [, filename:String [, sep:String ]] )` //> String
- `escape( path:String [, filename:String [, sep:String ]] )` //> String


## Notes

- 'pam.d' solutions:
  a. add trailing sep to directory to disable guessing
  b. pass filename separately as 2nd arg
