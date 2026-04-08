let response =  await api.length('user');

if(response.statusCode ===200)
{
    console.log("Test Passed");
}
else    
{
    console.log(" Test Failed");
}