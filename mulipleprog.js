//2 or 5 table ke multiple nikle
// only 5 number which is comon
let n=0;


for(let k=0;k<=100;k++)
{
    if(k%2==0 && k%5==0)
    {
        n++;
        console.log(k);
        if(n===5)
            break;
    }
}