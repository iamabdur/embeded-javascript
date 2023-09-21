const express =require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  
const data={
    title:"hello",
    second:new Date().getSeconds(),
    items:["apple","orange","banana"],
    htmlContent:"<em>this is some text</em>",
}
  res.render("index.ejs", data);
});
app.listen(3000, () => {
  console.log(`Server running on port ${port}.`);
});
