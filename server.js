import app from "./index.js";

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("server is listening on port 3200");
})