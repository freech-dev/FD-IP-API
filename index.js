const express = require('express');
const app = express();
const port = 1800;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashedLicenseKeys = config.LicenseKeys.map((licenseKey) => bcrypt.hashSync(licenseKey, 10));

app.use(express.json());

app.post('/verify', (req, res) => {

});

app.use((err, req, res, next) => {
  console.error(err);
  console.log('An error occurred in the API:', err.message);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`License API listening at http://verification.freechsdevelopment.com:${port}`);
});
