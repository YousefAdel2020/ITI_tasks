const fs=require("fs")
const http=require("http");
const port=3000;




http.createServer((req,res)=>{
    if(req.url!="/favicon.ico")
    {
        let mypath=req.url.split("/");
        //console.log(mypath)
        
        if(mypath[1]=="add")
        {
            
       
            
            let result=Number(mypath[2]);
            for(let i=3;i<mypath.length;++i)
            {
                
                if(Number(mypath[i]) !== NaN)
                {
                    //console.log(Number(mypath[i]))
                    result+=Number(mypath[i])
                }
               
            }
      
         
            let msg=`the result of adding is: ${result}\n`
            res.write(msg)
            fs.appendFileSync("results.log",msg)
        }
        

    //    else if(mypath[1]=="sub")
    //     {
            
       
            
    //         let result=Number(mypath[2]);
    //         for(let i=3;i<mypath.length;++i)
    //         {
                
    //             if(Number(mypath[i]) !== NaN)
    //             {
    //                 //console.log(Number(mypath[i]))
    //                 result-=Number(mypath[i])
    //             }
               
    //         }
      
         
          
    //         let msg=`the result of subtruction is: ${result}\n`
    //         res.write(msg)
    //         fs.appendFileSync("results.log",msg)
        
    //     }
        
        
        
        else if(mypath[1]=="multi")
        {
            
       
            
            let result=Number(mypath[2]);
            for(let i=3;i<mypath.length;++i)
            {
                
                if(Number(mypath[i]) !== NaN)
                {
                    //console.log(Number(mypath[i]))
                    result*=Number(mypath[i])
                }
               
            }
      
         
          
            let msg=`the result of multiplication is: ${result}\n`
            res.write(msg)
            fs.appendFileSync("results.log",msg)
        
        }


        else if(mypath[1]=="div")
        {
            
       
            
            let result=Number(mypath[2]);
            for(let i=3;i<mypath.length;++i)
            {
                
                if(Number(mypath[i]) !== NaN)
                {
                    //console.log(Number(mypath[i]))
                    result/=Number(mypath[i])
                }
               
            }
      
         
          
            let msg=`the result of division is: ${result}\n`
            res.write(msg)
            fs.appendFileSync("results.log",msg)
        
        }



        else if(mypath[1]=="sub")
        {
            var b=false;
            console.log(mypath[2]);
            console.log(Number(mypath[2]));
            if(!Number(mypath[2]))
            {
                b=true;
            }
            
            let result=Number(mypath[2]);
            for(let i=3;i<mypath.length;++i)
            {
                
                if(Number(mypath[i])!=NaN)
                {
                    result-=Number(mypath[i])
                }
                else
                {
                    b=true;
                    
                    break;
                }
            }
            if(b==false)
            {
                console.log(b)
            res.write(`the result of subtruction is: ${result}`)
            }
            if(b==true)
            {
                console.log(b)
                res.write("<h2>you entered wrong values</h2>")
            }
        }
       

    }

    res.end();

}).listen(port,()=>{
    console.log(`the server is running at ${port}`)
})