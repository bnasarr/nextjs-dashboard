import postgres from "postgres";

// initialise the Postgres client once per edge/runtime instance
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data;
}

export async function GET() {
  const rows = await listInvoices();
  return Response.json(rows); // ← sends the query result to the browser
}
