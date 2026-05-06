const express = require("express");
const Log = require("./logger");
const knapsack = require("./service");

const router = express.Router();

const BASE_URL = "http://20.207.122.201/evaluation-service";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjYi5zYy51NGNzZTIzNDY0QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjE5ODQsImlhdCI6MTc3ODA2MTA4NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNiZWJjMGU3LWM1ZWYtNDVjMS1hYWE3LWJkYTUwZmE5ZGI5NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFkaXR5YSBzYWkgcGFyaXNlIiwic3ViIjoiYzU0Mjg3MWEtMzg2Yi00YWUxLTllMzAtNWQ1OTA3MTVhNmJkIn0sImVtYWlsIjoiY2Iuc2MudTRjc2UyMzQ2NEBjYi5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6ImFkaXR5YSBzYWkgcGFyaXNlIiwicm9sbE5vIjoiY2Iuc2MudTRjc2UyMzQ2NCIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImM1NDI4NzFhLTM4NmItNGFlMS05ZTMwLTVkNTkwNzE1YTZiZCIsImNsaWVudFNlY3JldCI6ImhlZkV4cXVWU1VXUGFFdnMifQ.s-cPF947B-hj98F8_Vfc8czLcjw0jzzN3Qcc9r98iAM".trim();

router.get("/schedule", async (req, res) => {
    try {
        const headers = {
            "Authorization": "Bearer " + TOKEN,
            "Content-Type": "application/json"
        };

        console.log("HEADER:", headers.Authorization.substring(0, 30) + "...");

        const depotsRes = await fetch(`${BASE_URL}/depots`, { headers });
        const vehiclesRes = await fetch(`${BASE_URL}/vehicles`, { headers });

        const depotsData = await depotsRes.json();
        const vehiclesData = await vehiclesRes.json();

        const depotList = depotsData.depots || depotsData;
        const vehicleList = vehiclesData.vehicles || vehiclesData;

        console.log("DEPOTS:", depotList.length);
        console.log("VEHICLES:", vehicleList.length);

        let result = [];

        for (let depot of depotList) {
            let maxImpact = knapsack(
                vehicleList,
                depot.MechanicHours
            );

            result.push({
                depotID: depot.ID,
                maxImpact: maxImpact
            });
        }

        res.json(result);

    } catch (err) {
        console.log("ERROR:", err.response?.data || err.message);
        res.status(500).send("Error");
    }
});

module.exports = router;