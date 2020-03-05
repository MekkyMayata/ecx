HTTP vs. HTTPS
Hyper Text Transfer Protocol (HTTP)
    HTTP is a web application layer protocol which is implemented in client and server programs. Based on this protocol, a formal description of how communication between end systems existing in a network is established. HTTP listens on port 80.
    HTTP is of two basic parts:
        1. HTTP request
        2. HTTP response

    Below is a sample HTTP request:
        GET /items/page.html HTTP/ 1.1
        Host: www.somerandomhost.com
        Connection: close
        User-agent : Mozilla/5.0
        Accept-language: fr

    In this example, a GET request is made to the host (somerandomhost) for the object /items/page.html using the HTTP version 1.1.
    In addition, the 'connection' field tells the server to close the connection once the object is sent.

    Also, a sample HTTP response is shown below:
    HTTP/1.1 200 OK
    Connection: close
    Date: Thur, 5 Mar 2020 18: 59 : 09 GMT
    Server: Apache/2.2.3 (CentOS)
    Last-Modified: Tue, 03 Mar 2020 11:11:03 GMT
    Content-Length: 6833
    Content - Type: text/html
    (random data in the entity body)

    
    The request and response each consist of the following components:
    A) Header: contains information about the encoding, length of the body, content-Type, server type, etc.

    B) Body: contains content, usually parameters or data that is parsed to the server or sent back to the client.

Hyper Text Transfer Protocol secure (HTTPs)
    The Hyper Text Transfer Protocol secure is more like an upgraded form of the HTTP protocol which implements a secure socket layer (an additional enhancement to the Transmission Control Protocol, solving the security problems such as data encryption in transit).
    The HTTPs listens on port 443


HTTP methods
Below is a list of the HTTP methods used in making requests
    METHOD              URL                     MEANING
1.  GET                 /messages.json       returns a list of messages in JSON format
2.  PUT                 /messages.json       updates/replaces all messages and returns status in JSON.
3.  POST                /messages.json       creates a new message and returns the response id in JSON.
4.  DELETE              /messages/{id}.json  Deletes a message that has id {id}.


API
An API is a an interface or communication protocol between different parts of a computer program intended to simplify the implementation and maintenance of software. An API may be for a web-based system, computer hardware, software library, etc.



SOAP vs. REST API
The representational State Transfer API helps distributed systems to become stateless hence enhancing scalability. With REST, the need to record previous client state is eliminated. Unlike the Simple Object Access Protocol (SOAP), REST is easier to implement due to the simpler verb (GET, PUT, POST, DELETE, etc,.) and structure in it.
With the REST API, every request can be addressed by different systems. In addition, detailed information about the server is included in the response headers.