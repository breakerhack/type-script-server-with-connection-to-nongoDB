import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { log } from "console";
export const collections: {
  products?: mongoDB.Collection;
  users?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  console.log (process.env.DB_CONN_STRING);
  
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  console.log(process.env.COLLECTION_NAME);
  const productsCollection: mongoDB.Collection = db.collection("products");
  collections.products = productsCollection;
  // const usersCollection: mongoDB.Collection = db.collection(
  //   process.env.USERS_COLLECTION! 
  // ); 
  // collections.users = usersCollection  
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${productsCollection.collectionName}`
  );
}
