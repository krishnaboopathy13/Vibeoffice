export default async function handler(req, res) {
  const response = await fetch('/api/claude.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', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
}
