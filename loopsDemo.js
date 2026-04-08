let users = ["Ajay","Dahiya","Educator","Carrting"];
let flag= false;


for(let user of users)
{
    if(user.includes("dhsh"))
    {
        console.log("Ajay Item Found!!!");
        flag = true;
        break;
    }
    else if(user.includes("Dahiya"))
    {
        console.log("Dahiya Item Found!!!");
        flag = true;
        break;
    }
}

if(!flag)
{
    console.log("NO Match Found!!!")
}