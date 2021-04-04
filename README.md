# ES6 FilesystemPath class

A utility class, like native `Date`, that provides a fluent interface over strings representing filesystem paths.

Does not actually touch the filesystem.


## Usage

Create a new instance:

```
new FilesystemPath( path [, filename [, sep ]]] )
```


## FilesystemPath anatomy

```
                                                 ┌─┬    ext
                                           ┌────┬       basename
                                           ┌───────┬    filename
/Users/tomprogers/projects/filesystem─path/README.md >- path
└────────────────────────────────────────┴              directory
 └───┘ └────────┘ └──────┘ └─────────────┘ └───────┴    segments (array)
 └───┘ └────────┘ └──────┘ └─────────────┴              folders (array)
└                                                       root
```

Thus, for the example path:

| Part | Value |
| --: | :-- |
| root | `"/"` |
| folders | `[ "Users", "tomprogers", "projects", "filesystem─path" ]` |
| segments | `[ "Users", "tomprogers", "projects", "filesystem─path", "README.md" ]` |
| directory | `"/Users/tomprogers/projects/filesystem-path"` |
| filename | `"README.md"` |
| basename | `"README"` |
| ext | `".md"` |

**Note on "filename" and "basename:"** this library deliberately uses the terms "basename" and "filename" opposite the counterintuitive *nix convention. The "base" plus the "extension" yield the full "filename."


## API


### Instance methods

- `canonicalize()` //> FilesystemPath
- `escape()` //> String
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
