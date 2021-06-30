const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const {MongoClient} = require('mongodb');

async function main() {
	const uri ='mongodb+srv://aquibn:hUk29!epR_927wq@cluster0.ktxkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
     
    const client = new MongoClient(uri);
    await client.connect();

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    console.log('done')
};


main().catch(console.error);



app.use(bodyparser.json());

app.use('/todolist',require('./router/api'));

app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});


app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

