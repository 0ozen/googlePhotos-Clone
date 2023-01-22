import { MongoClient } from "mongodb";

const uri: any = process.env.URI;
const client: any = new MongoClient(uri);

export default async function connect() {
	try {
		await client.connect();
		console.log("Connected");
		return client;
	} catch (error) {
		console.log(error);
	}
}
