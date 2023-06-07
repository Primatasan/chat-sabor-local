import { Configuration, OpenAIApi } from 'openai';
// import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const message = req.nextUrl.searchParams.get('message');
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  });

  return new Response(JSON.stringify({ data: completion.data.choices[0].message.content }), {
    headers: { 'content-type': 'application/json' },
  });
}