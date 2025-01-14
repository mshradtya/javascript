### detour: what is a file?

- every bit on your hard-drive belongs to a file, which is just 0s and 1s but with an extension
- the extension of the file defines how with a decoder decode it
- for example, a sequence of bits in a text file will decode to a character, but the same sequence of bits in an image file will be decoded into something else, 

---

### how node.js deals with files

- node.js doesn't interact with the files directly.
- it interacts with the OS via a _system call_, and the OS gives back the required file, or does the required operation.

### 3 ways to do the same thing

we can do the same file related operation in 3 ways
1. using the Promises API
2. using the Callback API
3. using the Synchronous API

### project

- **Use `fs.readFile()`** when you just **need the entire file quickly**.
- **Use `fs.open()`** when you need **manual control over reading/writing, large files, or streaming**.
	- it returns a `file descriptor` which is like an id of the open file, and can be used to do various operations on the file 