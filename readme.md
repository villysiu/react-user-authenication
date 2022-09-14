In this application, I creaed the client with react and rails API with devise gem for user authentication via Devise JWT. Here is a post about the process.

## Part 1
https://medium.com/@villysiu/authenticate-user-with-devise-gem-and-devise-jwt-in-react-application-1-2-a869477a2cb3

## Part 2
https://medium.com/@villysiu/authenticate-user-with-devise-gem-and-devise-jwt-in-react-application-2-2-98eff841ec88

To start, clone the file in your terminal.

### Setup Rails API
```
cd react-user-authenication
cd api
bundle install
rails s
```

### Setup React client
```
cd .. 
cd frontend
npm install
npm start
```

You should now in the login screen. You can toggle login and signup. Once you signed in, you can see the private message. 




