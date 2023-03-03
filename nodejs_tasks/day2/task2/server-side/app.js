const http = require("http");
const fs = require("fs");

let mainFile = fs.readFileSync("../client-side/main.html").toString();
let welcomeFile = fs.readFileSync("../client-side/welcome.html").toString();
let mainCSS = fs.readFileSync("../client-side/style/main_style.css").toString();
let mainJS = fs.readFileSync("../client-side/script/main_script.js").toString();
let welcomeCSS = fs
  .readFileSync("../client-side/style/welcome_style.css")
  .toString();
let myIcon = fs.readFileSync("../client-side/image/favicon.ico");

let clientName="",email="",address="",mobileNumber="";

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.method == "GET") {
      switch (req.url) {
        case "/main.html":
          res.write(mainFile);
          break;

        case "/welcome.html":
          res.write(welcomeFile);
          break;

        case "/style/main_style.css":
          res.write(mainCSS);
          break;

        case "/style/welcome_style.css":
          res.write(welcomeCSS);
          break;

        case "/favicon.ico":
          res.writeHead(200, "ok", {
            "content-type": "image/vnd.microsoft.icon",
          });
          res.write(myIcon);
          break;

        default:
          res.write("<h1>No Page Found</h1>");
          break;
      }

      res.end();
    }

    else if(req.method="POST")
    {
        req.on("data",(data)=>{
            // console.log(data)
             console.log(data.toString())
             personInfo = data.toString().split("&");
             clientName = personInfo[0].split("=")[1];
             mobileNumber = personInfo[1].split("=")[1];
             email = personInfo[2].split("=")[1];
             address = personInfo[3].split("=")[1];
             
           // console.log(clientName)
        })
        req.on("end",()=>{

            welcomeFile = welcomeFile.replace("{clientName}",clientName);
            welcomeFile = welcomeFile.replace("{ MobileNumber }",mobileNumber);
            welcomeFile = welcomeFile.replace("{ Email }",email);
            welcomeFile = welcomeFile.replace("{ Address }",address);

            res.write(welcomeFile)
            res.end();
        })

    }
  })
  .listen(7000, () => {
    console.log("http://localhost:7000");
  });
