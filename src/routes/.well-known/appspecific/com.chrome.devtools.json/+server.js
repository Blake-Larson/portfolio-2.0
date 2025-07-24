/** @type {import('./$types').RequestHandler} */
export function GET() {
  return new Response(JSON.stringify({}), {
    headers: {
      'content-type': 'application/json'
    }
  });
}
