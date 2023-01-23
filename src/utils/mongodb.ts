import { MongoClient } from "mongodb";

const uri: string = process.env.URI || "";
const client: MongoClient = new MongoClient(uri);

export default async function connect() {
	try {
		await client.connect();
		console.log("Connected");
		return client;
	} catch (error) {
		console.log(error);
	}
}
