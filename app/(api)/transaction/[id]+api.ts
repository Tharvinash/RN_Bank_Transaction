import { neon } from '@neondatabase/serverless';

export async function GET(request: Request, { id }: { id: string }) {
  try {
    if (!id) {
      return new Response(JSON.stringify({ error: 'id is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sql = neon(`${process.env.DB_URL}`);
    const response = await sql`
      SELECT * FROM transactions
      WHERE card_id = ${id}
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
