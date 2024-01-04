import { Express } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000 ; 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",async(req,res) =>{
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        res.render("index.ejs",{result:data});
        console.log(result);
    }catch{

    }
})



app.listen(port,() =>{
    console.log(`listening on ${port}`);
})