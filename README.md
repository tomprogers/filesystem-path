# ES6 FilesystemPath class

A utility class, like native `Date`, that provides a fluent interface over strings representing filesystem paths.

Does not actually touch the filesystem.


## Usage

Create a new instance:

- **new FilesystemPath( path:String [, sep:String = '/' ] )**

```js
new FilesystemPath('/Users/tomprogers/projects/filesystem-path/README.md')
//> FilesystemPath { /Users/tomprogers/projects/filesystem-path/README.md }

new FilesystemPath('C:\\projects\\filesystem-path\\README.md', '\\')
//> FilesystemPath { C:\projects\filesystem-path\README.md }
```

- **new FilesystemPath( directory:String [, basename:String [, ext:String [, sep:String = '/' ]]]] )**

```js
new FilesystemPath('/Users/tomprogers/Documents')
//> FilesystemPath { /Users/tomprogers/Documents }

new FilesystemPath('/Users/tomprogers/Documents', 'notes.md')
new FilesystemPath('/Users/tomprogers/Documents', 'notes', 'md')
//> FilesystemPath { /Users/tomprogers/Documents/notes.md }

new FilesystemPath('/Users/tomprogers/Documents', 'notes.latest', 'md')
//> FilesystemPath { /Users/tomprogers/Documents/notes.latest.md }

new FilesystemPath('/Users/tomprogers', '.bash_profile')
new FilesystemPath('/Users/tomprogers', '', 'bash_profile')
//> FilesystemPath { /Users/tomprogers/.bash_profile }
```


## FilesystemPath anatomy

```
                                 basename ─┬────┐ ┌┬─ ext
                                           │    │ ││
                                           ┌───────┬─ filename
                                           │       │
/Users/tomprogers/projects/filesystem─path/README.md
│                                        │
└────────────────────────────────────────┴─ directory
│                          │             │
└─ root                    └─────────────┴─ folder
```

Thus, for the example path:
- `root`: '/'
- `folder`: 'filesystem-path'
- `directory`: '/Users/tomprogers/projects/filesystem-path'
- `basename`: 'README.md'
- `filename`: 'README'
- `ext`: 'md'


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
- `canonicalize( path:String [, sep:String ] )` //> String
- `escape( path:String [, sep:String ] )` //> String


## Notes

- 'pam.d' solutions:
  a. add trailing sep to directory to disable guessing // TODO
  b. pass filename separately as 2nd arg
