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
|                                                    root
                           |>-----------<|           folder
|>--------------------------------------<|           directory
/Users/tomprogers/projects/filesystem-path/README.md
                                           |>-----<| basename
                                           |>--<|    filename
                                                 |-| ext
```

Thus, for the example path:
- `root`: '/'
- `folder`: 'filesystem-path'
- `directory`: '/Users/tomprogers/projects/filesystem-path'
- `basename`: 'README.md'
- `filename`: 'README'
- `ext`: 'md'
