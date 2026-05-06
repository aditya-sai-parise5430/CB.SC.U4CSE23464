const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjYi5zYy51NGNzZTIzNDY0QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjE5ODQsImlhdCI6MTc3ODA2MTA4NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNiZWJjMGU3LWM1ZWYtNDVjMS1hYWE3LWJkYTUwZmE5ZGI5NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFkaXR5YSBzYWkgcGFyaXNlIiwic3ViIjoiYzU0Mjg3MWEtMzg2Yi00YWUxLTllMzAtNWQ1OTA3MTVhNmJkIn0sImVtYWlsIjoiY2Iuc2MudTRjc2UyMzQ2NEBjYi5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6ImFkaXR5YSBzYWkgcGFyaXNlIiwicm9sbE5vIjoiY2Iuc2MudTRjc2UyMzQ2NCIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImM1NDI4NzFhLTM4NmItNGFlMS05ZTMwLTVkNTkwNzE1YTZiZCIsImNsaWVudFNlY3JldCI6ImhlZkV4cXVWU1VXUGFFdnMifQ.s-cPF947B-hj98F8_Vfc8czLcjw0jzzN3Qcc9r98iAM";

async function Log(stack, level, pkg, message) {
    try {
        await axios.post(LOG_API, {
            stack: stack,
            level: level,
            package: pkg,
            message: message
        }, {
            headers: {
                "Authorization": "Bearer " + TOKEN.trim()
            }
        });
    } catch (err) {
    }
}

module.exports = Log;


