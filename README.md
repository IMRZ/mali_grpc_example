# mali_grpc_example
An example with 2 grpc services running on 1 mali grpc server.
```
# start the server
npm run start:server

# start the client
npm run start:client
```

Should output:
```
# getBook for id 0
{ name: 'Expert Trying Until it Works', author_id: 1 }

# getAuthor for id 1
{ name: "O'Rly" }
```
