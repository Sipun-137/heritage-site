// import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

export default async function connect() {
    try {
        // const uri = "mongodb+srv://" + process.env.DBUSER as string + ":" + process.env.DBPASSWORD as string + "@cluster1.xm25lga.mongodb.net/TourismDB?retryWrites=true&w=majority&appName=Cluster1";
        // const client = new MongoClient(uri, {
        //     serverApi: {
        //         version: ServerApiVersion.v1,
        //         strict: true,
        //         deprecationErrors: true,
        //     }
        // }
        // );
        mongoose.connect("mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBPASSWORD + "@cluster1.xm25lga.mongodb.net/TourismDB?retryWrites=true&w=majority&appName=Cluster1"!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("mongodb Connected successfully");

        });
        connection.on('error', (error) => {
            console.log("mongdb connection error please make sure mongoDB is running" + error);
            process.exit();

        })

    } catch (error) {
        console.log("something went wrong");
        console.log(error);

    }

}


// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb+srv://" + process.env.DBUSER as string + ":" + process.env.DBPASSWORD as string + "@cluster1.xm25lga.mongodb.net/TourismDB?retryWrites=true&w=majority&appName=Cluster1";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// }
// );

// async function run() {
//     try {
//         // Connect the client to the server (optional starting in v4.7)
//         await client.connect();

//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);
