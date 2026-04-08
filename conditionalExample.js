let statusCode = 6054

switch(statusCode)
{
    case 200:
        console.log("Ok!!");
        break;
    case 400:
        console.log("Not Found");
        break;
    case 500:
        console.log("Rnning Internal erorr!!");
        break;
    default:
        console.log("Unsupooted code")
}