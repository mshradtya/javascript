### What is a file?

- sequence of bits meaning of which is defined by the user
- each sequence of bits might mean a different thing depending upon how you want to decode that data
- in case of txt file, a certain sequence of bits might mean a character. but the same for an image might mean a certain pixel.

every single bit on your hard drive belongs to a file. your OS is just a bunch of files. everything is a FILE.

### how does NodeJS deal with files?

- NodeJS interacts with the OS by making system calls and the OS interacts with the hardware to do the job.
- for example, to open a file node will make a system call like **open()** and OS will open the file

### three different ways to do the same thing

when dealing with the **fs** module, there are 3 ways to do the same thing. for example creating a file.

1. using the promises API - starting out, use this, it's a lot cleaner
2. using the callback API - when doing performance intensive task, use this
3. using the synchronous API - try to stay away from it, as it blocks the main thread
