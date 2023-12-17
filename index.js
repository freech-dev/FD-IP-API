const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/checkip', async (req, res) => {
  const userIP = req.ip; // Extract the user's IP address from the incoming request
  const response = await fetch(`http://ip-api.com/json/${userIP}`);

  if (response.ok) {
    const data = await response.json();
    const isVPN = data.proxy || data.vpn;

    res.json({ isVPN });
  } else {
    res.status(500).json({ error: 'Failed to fetch IP data' });
  }
});

app.listen(port, () => {
  console.log(`License API listening at http://verification.freechsdevelopment.com:${port}`);
});
