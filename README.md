# chat-28-server
Individual project - Ticketswap app server built with express, sequelize, json-web-tokens and postgreSQL

## What can it do?

-   Basic actions:
    -   Create database if it does not exist
    -   Fetch events, tickets, and comments
    -   Create new events, tickets and comments
    -   Create new messages 
    -   Log user in and pass web tokens
    -   Sign up user and store encrypted(wherever needed) information in database

## Primarily used technologies

-   [Node.js](https://nodejs.org/en/)
-   [Express.js](https://expressjs.com)
-   [Sequelize](https://sequelize.org)
-   [PostgreSQL](https://www.postgresql.org/)
-   [JSON Web Tokens](https://jwt.io/)

## Endpoints

| Route                          | HTTP Verb | Description                                                 |
| ------------------------------ | --------- | ----------------------------------------------------------- |
| `/event`                       | `GET`     | Fetch events(pagination) which have not finished yet        |
| `/event`                       | `POST`    | Create new event                                            |
| `/ticket/:eventId`             | `GET`     | Fetch tickets for a particular event                        |
| `/ticket/author/:authorId`     | `GET`     | Fetch tickets from a particular author                      |
| `/event/ticket/:ticketId`      | `GET`     | Fetch ticket by ticketId                                    |
| `/ticket`                      | `POST`    | Create new ticket                                           |
| `/ticket/:ticketId`            | `PUT`     | Update ticket information                                   |
| `/comment/:ticketId`           | `GET`     | Fetch comments for a particular ticket                      |
| `/comment`                     | `POST`    | Create new ticket                                           |
| `/login                        | `POST`    | Log in user and send jwt token                              |
| `/user`                        | `POST`    | Create user in database                                     |

## Installation

-   Make sure you have installed all these prerequisites on your development machine.

    -   [Node.js](https://nodejs.org/en/download/)
    -   [PostgreSQL](https://www.postgresql.org/download/)
   
```bash
> git clone git@github.com:zorawar1090/ticketswap-server.git
> cd ticketswap-server
> npm install
```
-   Change databaseUrl to your database url in index.js

```bash
> npm start
```
-   That's all, enjoy!
