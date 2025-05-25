export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, brand, website, phone, coin, region, plan } = req.body;

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Sponsors';

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Name: name,
        Email: email,
        Message: message,
        Brand: brand, 
        Website: website, 
        Phone: phone, 
        Coin: coin, 
        Region: region, 
        Plan: plan,
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding record to Airtable' });
  }
}
