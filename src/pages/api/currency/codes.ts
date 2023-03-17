import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const codes = await fetch(
			`https://v6.exchangerate-api.com/v6/${process.env.API_CURR}/codes`
		);
		res.status(200).json(await codes.json());
	} catch (error) {
		console.log(error);
	}
}
