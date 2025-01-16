- streaming data means to send data in small chunks

### different types of streams

- **writable stream**: a stream that you can write to. like writing huge amount of data into a file
- **readable stream**: a stream that you can read from. like reading data from a huge file.
- **duplex stream**: a stream that is both writable and readable
- **transform stream**: just like duplex, but it can also transform the data

### writable stream

![](Pasted%20image%2020250115213038.png)

looking back at our loop code, we were writing into our file a million times separately, here in this case, the buffer waits till it gets filled and then writes the data in one go into the file.

- when we keep adding data to the internal buffer of the stream, it will fill first, and then also keep track of the rest of the data in the memory. so we're writing 800 mb of data in our stream, it will first fill itself with the default size, 16384 bytes, and then also have a reference to the next 800 mb data in memory

![](Pasted%20image%2020250115213758.png)

- this will lead to that 800 mb being in memory, and our stream becomes useless
- hence, before filling our stream again, we must first empty it, which is called _draining_

### readable stream

![](Pasted%20image%2020250115214248.png)

- when we create a readable stream, we push the data into it, and when it gets filled, an event occurs namely _data_
- this event will have the chunk of data which we can process as we want

- to write a huge amount of data using a writable stream, you should actually first create a readable stream, as a result you'll get a small chunk of the huge data, which you can then push to the writable stream and then write the data to the destination, this way the writable stream will not hold on to the huge data in the memory.

