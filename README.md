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
                                                  ┌┬    ext
                                           ┌────┬       basename
                                           ┌───────┬    filename
/Users/tomprogers/projects/filesystem─path/README.md >- path
└────────────────────────────────────────┴              directory
                           └─────────────┴              folder
└                                                       root
```

Thus, for the example path:

| Part | Value |
| --: | :-- |
| root | `"/"` |
| folder | `"filesystem-path"` |
| directory | `"/Users/tomprogers/projects/filesystem-path"` |
| filename | `"README.md"` |
| basename | `"README"` |
| ext | `"md"` |

**Note on "filename" and "basename:"** this library deliberately uses the terms "basename" and "filename" opposite the counterintuitive *nix convention. The "base" plus the "extension" yield the full "filename."


## API

### Instance methods
- `getRoot()` // '/' | undefined
- `getDirectory()` // str || ''
- `getFolder()` // str || ''
- `getBasename()` // str || ''
- `getFilename()` // str || ''
- `getExt()` // str || ''
- `getSep()` // '/' || '\'
- `getSegments()` //> Array<String> -- each folder, and the filename, is a segment
- `setRoot( str )` //> FilesystemPath
- `setDirectory( str )` //> FilesystemPath
- `setFolder( str )` //> FilesystemPath
- `setBasename( str )` //> FilesystemPath
- `setFilename( str )` //> FilesystemPath
- `setExt( str )` //> FilesystemPath
- `setSep( str )` //> FilesystemPath
- `canonicalize()` //> FilesystemPath
- `escape()` //> String

Ecosystem methods
- `toString()` // for JS ecosystem
- `toJSON()` // for JS ecosystem

Pirated String methods
- `replace()` // operations on raw path, returns self

Pirated RegExp methods // treats segments as lines unless `/g` flag
- test
- match
- search
- exec

Pirated Array methods
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
  a. add trailing sep to directory to disable guessing // TODO
  b. pass filename separately as 2nd arg
