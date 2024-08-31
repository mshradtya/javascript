- buffers connects nodejs to the world of 0s & 1s
- in computers we mostly use base 2, base 16 and base 10 numbers

### binary / base 2 numbers

- only 2 symbols are used - 0 & 1
- 1011 in binary = 1x2^0 + 1x2^1 + 0x2^2 + 1x2^3 = 1 + 2 + 0 + 8 = 11 in decimal
- rightmost digit is called the Least Significant Digit (LSD)
- leftmost digit is called the Most Significant Digit (MSD)

### hexadecimal / base 16 numbers

- 16 symbols are used - 0 1 2 3 4 5 6 7 8 9 A B C D E F
- by convention hexadecimal numbers are represented with 0x in front. so 456 should be written as 0x456
- 456 in hexadecimal = 6x16^0 + 5x16^1 + 4x16^2 = 6 + 80 + 1024 = 1110 in decimal
- fa3c in hexadecimal = 12x16^0 + 3x16^1 + 10x16^2 + 15x16^3 = 12 + 48 + 2560 + 61440 = 64060 in decimal

- we are learning this because conversion between hexadecimal and binary is very simple. how?
- each 4 bits can be represented with only 1 hexadecimal symbol

0101 0101 0111 1101 0101 1111 0000 0001
5 5 7 D 5 F 0 1 = 557D 5701

just by replacing 4 bits to their hexadecimal equivalents we are able to convert the binary to decimal

some examples where hexadecimal is being used

1. color codes in image editing softwares and HTML - `#FFFFFF` or `#000000`
2. expressing some characters in URL like spaces - %20
3. expressing unicode characters in HTML

### character sets / encodings

- letters and symbols (characters) that a writing system uses, and a representation of assigning different numbers to those characters
- two of the most common character sets that we use are Unicode and ascii
- unicode - a standard representing and encoding characters in most of the writing systems worldwide
- ascii - defined 128 characters, lowercase and uppercase of letters a-z, numbers from 0-9, punctuations [$,(,)] and some control characters like DEL
- since it's a subset of unicode, it's characters have the same number as unicode

### encoders & decoders

- encoders take something meaningful ===> 0101 0011 0101 ...
- decoders take 0101 0011 0101 ... ===> something meaningful

### character encodings

- a system of assigning a sequence of bytes ( just zeros and onces ) to a character
- the most common one is **utf-8**, defined by the Unicode Standard, therefore it's characters have the same numbers as Unicode

### buffers

- buffers are a data structure specifically designed to work with binary data.
- it's a container in memory. we can assign a piece of memory, for example, 4 bytes ( 32 bits ) have been allocated so the buffer size is now 4 bytes. it's fixed and cannot be changed.
- buffers act like an array. so they have elements which are indexed.
- as soon as you allocate an amount of memory, which is the buffer, it's elements are filled with 0s
- in nodejs, each element of buffer holds 8 bits, so there will be 8 0s in an element.

### alloc.Unsafe

it's faster for 2 reasons

1. it allocates the pre defined buffer that node uses when a process starts ( 8 kiB, Buffer.poolSize )
2. it doesn't convert all elements to 0
