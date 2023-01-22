import connect from "../../utils/mongodb";

export default async function handler(req: any, res: any) {
	const client: any = await connect();
	console.log(req.body.image);

	// npm i multer

	// client.db()
	// .collection("images")
	// .insertOne({
	//   user:req.body?.email,
	//   image:req.body?.image
	// })

	return res.status(200).send("not saved");
}
