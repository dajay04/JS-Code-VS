let statusCode = 400;
let responseTime = 900;

if(statusCode ===200 && responseTime<1000)
{
    console.log("API is healty: TC PASS");
}
else if(responseTime>=1000)
{
    console.log("API is working but slow in response time: TC Interm");
}
else
{
    console.log("API Failed!!!");
}