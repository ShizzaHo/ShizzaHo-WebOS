# System commands

Commands in the system are divided into two levels: 
* Commands that affect the internal operation of the system
* Commands that don't affect the internal working of the system

**The commands that have an effect on the internal working of the system** are for something more global, they can kill the system if not used correctly when **commands that don't affect the internal working of the system** are commonly used by developers to talk to the system and files.

## Commands affecting the internal workings of the system

``connectModule(path)`` - Connects system modules

``connectLibraries()`` - Scans the system directory **libraries**, and loads modules from it

``connectLibrary(name, path)`` - Connects a library to the system

``getConfig()`` - Gets the system config as an object

``setConfig(newParams)`` - Writes new data into the system config

## Commands not affecting the internal work of the system

``getLibrary(name)`` Gets methods from the library to use in the program

RunProgram(path)`` Starts the program

``stopProgram()`` - Stops the program and opens the console

``getMemoryPath()`` Gets path to directory **memory**

``getDir(path)`` - Gets the contents of the directory

``getDirExists(path)`` - Checks for directory

``getFileExists(path)`` - Checks for a file

``readFile(path)`` - Reads the contents of the file

``deleteFile(path)`` - Deletes file

``deleteFolder(path)`` - Deletes a folder

``newFile(name, text, type, path)`` - Creates a directory or file

``rename(path, newPath)`` - Renames a directory or file