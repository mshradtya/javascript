### binary data

- to understand buffers we must first understand binary data
- a computer only understands binary data. everything you see on a computer from images to audio, everything is 0s and 1s, and nothing else.
- a physical computer has transistors to represent binary data, a WiFi or wireless data uses waves to represent the same

### why are buffers important?

- buffers are there to help us deal with the binary data. that means now we can deal with files, network requests, and everything else because it's all 0s and 1s.

---

### detour: understanding 3 concepts before starting with buffers

#### 1. binary numbers ( base 2 )

- the most basic unit is **bit** - representing a 0 or a 1.
- 8 bits = 1 **byte**
- converting binary to decimal:

![[Pasted image 20250110195724.png]]

![[Pasted image 20250110195825.png]]
#### 2. hexadecimal numbers ( base 16 )

- the main reason we're using base 16 hexadecimal numbers is because _conversion between binary and hexadecimal is insanely simple_
- any 4 bits that you use, there is only 1 hexadecimal character to represent it\
- converting hexadecimal to decimal:

![[Pasted image 20250110205549.png]]

- there are 16 hexadecimal numbers

![[Pasted image 20250110205709.png]]

- the table shows how easy it is to convert between binary and hexadecimal

![](Hexadecimal+Digits+Table.pdf)
#### 3. character sets / encodings

##### character sets

- a character set is just letters and symbols ( characters ) that a writing system uses, and a representation of assigning different numbers ( binary, of course ) to those characters
- **Unicode** is a standard for representing and encoding characters in most of the writing systems worldwide
- **ASCII** is another standard that defines only 128 characters, it's also a subset of Unicode.

##### character encodings

- **Encoder**: takes something meaningful and converts into 0s & 1s]
- **Decoder**: takes 0s & 1s and converts to something meaningful
- **Character Encodings**: a system of assigning a sequence of bytes to a character
- the most common character encoding is **utf-8**, defined by the Unicode Standard, therefore it's characters have the same numbers as the Unicode
- we always have to specify the encoding system

---

### Buffer

- it's a container in memory
- buffers act like an array, they're not an array, but they act like an array. so, they have elements that are indexed.
- as soon as you create your buffer, you're filling all those elements with 0s
- in Node, each element of a buffer holds 8bits (1 byte) and exactly 8 bits

![](Pasted%20image%2020250111102058.png)

