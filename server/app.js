const express = require("express");
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const { Pool, Client } = require('pg')

// const connectionString = 'postgresql://<user>:<pass>@localhost:5432/<db>';
// const connectionString = 'postgresql://postgres@localhost:5432/gql_library';
// const client = new Client({
    // connectionString
// });

// client.connect(() => {
    // console.log('connected to db')
// });

const app = express();

// middleware
app.use('/graphql',graphqlHTTP({
    schema,
    // pretty: true,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("server on port 4000")
});