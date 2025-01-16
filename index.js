const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "Sahilbrar_111",
        content : "I want to be a Millionaire."
    },
    {
        id : uuidv4(),
        username : "Miss_Khandla",
        content : "I want to be a Software Engineer."
    },
    {
        id : uuidv4(),
        username : "Gain_do_gen",
        content : "I want to prove that coding is not done MS EXCEL."
    },
    {
        id : uuidv4(),
        username : "Vats",
        content : "Eat, Sleep, Code"
    },
    {
        id : uuidv4(),
        username : "PARSS",
        content : "NET Qualified"
    }
];
//1 View Post
app.get("/posts", (req, res)=> {
    res.render("index.ejs", { posts });
});
//2.i) Form for add a new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
//2.ii) Submit Post and redirect to View Post
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

//3 To get individual post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

//4.i) Update post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});
//4. ii)
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// 5. Delete
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, ()=> {
    console.log("listening to port : 8080");
});