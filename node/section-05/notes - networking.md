### mac addresses and switches

![](Pasted%20image%2020250121181956.png)

- **Ethernet Cable**: The most basic piece in networking. We connect ethernet cables to a switch.
- **Switch**: The second most basic piece in networking. We connect multiple computers to this switch using ethernet cables.
- **Networking Card**: For a computer to be capable of connecting with the ethernet cable, it needs a network card. It's a physical card with it's own unique address. 
- **MAC Address**: Each network card has it's own address called the MAC address. it's unique for every computer all over the world. it's _48 bits_. Eg: **C0-45-12-AB-FF-97**
- when sending data from one computer to another, the computer will send the data in a packet. each packet will have the:
	- source mac address
	- destination mac address
	- data - 0s & 1s

### routers and the internet

![](Pasted%20image%2020250123111235.png)

what if we want to connect this network of computers to other networks of computers. for this we use routers.

- **Routers**: these work on top of the switches and connect to other routers to form a network
- **IP Address**: each router assigns a unique IP address to each computer in it's network so that they can connect to computers in other networks

### networking layers

![](Pasted%20image%2020250123112834.png)

![](Pasted%20image%2020250123114426.png)

1. **Physical Layer**
	- here we're talking about cables. and the way information is moved here is via bits
2. **Data Link Layer**
	- this is where switches come into play.
	- the switches will combine the bits into something called a _frame_
3. **Network Layer**
	- this is where routers and IP addresses come into play
	- IP addresses are used to send _packets_ 
4. **Transport Layer**
	- makes sure the packets that we send gets across safely
	- in case a packet is lost it tries to resend it
5. **Application Layer**
	- this is where our node.js is. this is where we set up our http applications etc.

### Transport Layer: TCP / UDP

#### TCP

- it makes sure the data you're sending is actually sent and data is received correctly and no bits are missed
- HTTP is built on top of TCP
- works with the 3-way handshake

![](Pasted%20image%2020250123125722.png)

#### UDP

- doesn't care if any packet is missed, it just sends the packet and doesn't care what happens later
- used in streaming apps, like video streaming, voice talking etc.
- generally much faster than TCP as it does much less work

![](Pasted%20image%2020250123125921.png)
