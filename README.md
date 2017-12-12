# Node HTTP 2
This repository is to play around with HTTP 2 protocol using Node

Trying out the HTTP 2 protocol support with node 9.2.1v

To run this application Install Node Version 9.2.1 and Above.

Steps to run the Application :

1. Generate the Pem files using the following command  

    ``` bash
    openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-privkey.pem -out localhost-cert.pem
    ```
    _Note : Execute the above command inside **certs** folder_

2. Run the server;
    ``` bash
    node server.js
    ```

3. Run the client:
    ``` bash
    node client.js
    ```
