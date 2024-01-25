import { register } from "../../../utils/getUsers"

export async function POST(req: Request, res: Response) {
    const body = await req.json()
    const response = await register(body.email, body.password, body.name)
    return Response.json(response)
}