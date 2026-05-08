// const express = require("express");
// const axios = require("axios")
// // const path = require("path")
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) =>{
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.use(express.static("public"))

// app.get("/prices", async (req, res)=>{
//     try{
//         const response = await axios.get(
//             "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
//         );

//         res.json(response.data);
//     } catch(err){
//         console.error("error fettching prices;", err.message);
//         res.status(500).json({error:"error fetching prices"});
//     }
// });

// app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`));


 const express = require("express");
 const axios = require("axios")
 // const path = require("path")
 const app = express();
//  const PORT = 3000
 

 app.use(express.static("public"));

 app.get("/mylocation", async (req, res)=>{
     try{
         const response = await axios.get(
             "https://ipapi.co/json/"
         )
         res.json(response.data);
     } catch(error){
         console.error("error fettching prices;", err.message);
         res.status(500).json({error:"error fetching prices"});
     }
 });
 
app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});