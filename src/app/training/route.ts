import { db } from '../utils/db'

export async function GET(res: Response) {
    let a = await db.query('SELECT * FROM cswisstable ORDER BY id DESC LIMIT 500')
    return new Response(JSON.stringify(a))
}