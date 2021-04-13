const express = require('express');
const https = require('https');

const app = express();

async function getOrdersFromExternalApi(success, failure) {
    https.get('https://api-ext.gouspack.com/api/orders', response => {
        var jsonData = '';

        response.on('data', text => {
            jsonData += text;
        });

        response.on('end', () => {
            const orders = JSON.parse(jsonData);
            success(orders);
        });
    }).on('error', failure);
}

app.get('/orders', async (_, res) => {
    getOrdersFromExternalApi(orders => {
        res.json(orders).end();
    }, ex => {
        res.status(500)
            .send('There was a problem fetching the orders data as requested:\n' + ex)
            .end();
    });
});

app.listen(8081, () => {
    console.log("Backend running at http://localhost:8081");
});
