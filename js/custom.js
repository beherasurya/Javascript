// function myFunction(x,y,z)
// {
//     console.log(x+y+z);
// }
function loopFrom(x,y,z)
{
    for(i=x;i<y;i++)
    {
        console.log(i+ ' Hello World! ');
        if(i == z)
        {
            console.log('Hi there, we have done it again');
            continue;
        }
    }

}
