var arr=[];
var i=1;

function fizzbuzz()
{
    while(i<=100)
    {
         if(i%3 ===0 )
        {
            if(i%5 ===0)
            {
                arr.push("FizzBuzz");
                i++;
                console.log(arr);
            }
            else{
                arr.push("Fizz");
                i++;
                console.log(arr);
            }
        }
       
        if(i%5===0)
        {
            if(i%3 ===0)
            {
                arr.push("FizzBuzz");
                i++;
                console.log(arr);
            }
            else{
                arr.push("Buzz");
                i++;
                console.log(arr);
            }
           
        }
    
        else{
            arr.push(i);
            i++;
            console.log(arr);
        }
    }
} 


