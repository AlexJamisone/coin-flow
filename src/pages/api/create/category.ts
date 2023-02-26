import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const {} = req.body
        
	} catch (error) {
		console.log(error);
	}
}
