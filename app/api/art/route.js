export async function POST(req, res) {
  const { Configuration, OpenAIApi } = require('openai');
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: 'A dog holding a smartphone and taking a selfie in the park',
    n: 2,
    size: '1024x1024',
  });

  return new Response(JSON.stringify(response.data), {
    headers: { 'content-type': 'application/json' },
  });
}
