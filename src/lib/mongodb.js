import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = "mongodb+srv://taste_house:FsJ4ro3mQqJOOtLR@cluster0.eqwoetz.mongodb.net/?appName=Cluster0"

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;