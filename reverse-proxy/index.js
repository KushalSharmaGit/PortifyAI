const express = require('express');
const httpProxy = require('http-proxy');
const dotenv = require("dotenv").config();
const fetch = require('node-fetch'); // Make sure you have this if using CommonJS

const app = express();
const PORT = process.env.PORT || 5500;
const BASE_PATH = process.env.BASE_PATH?.replace(/\/$/, ''); // trim trailing slash
const baseurl = process.env.BASE_URL;

const proxy = httpProxy.createProxy();

const getProject = async (domain) => {
  try {
    const response = await fetch(`${baseurl}/api/portfolio/domain-resolve/${domain}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data; // expected to contain { id: '...' } or similar
    } else {
      console.error("Failed to fetch domain mapping:", data);
      return null;
    }
  } catch (err) {
    console.error("Error during fetch:", err);
    return null;
  }
};

app.use(async (req, res) => {
  const hostname = req.hostname;

  const portfolio = await getProject(hostname);

  if (!portfolio || !portfolio.portfolioId) {
    return res.status(404).send("Project not found for this domain.");
  }

  const resolvesTo = `${BASE_PATH}/${portfolio.portfolioId}`;
  console.log(`Proxying ${hostname} → ${resolvesTo}${req.url}`);

  proxy.web(req, res, { target: resolvesTo, changeOrigin: true });
});

proxy.on('proxyReq', (proxyReq, req, res) => {
  if (req.url === '/' || req.url === '') {
    proxyReq.path = '/index.html';
  }
});

proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.status(500).send('Proxy Error');
});

app.listen(PORT, () => console.log(`Reverse Proxy Running on port ${PORT}`));
