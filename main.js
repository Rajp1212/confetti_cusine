"use strict"

const port = 3000,
    http = require("http"),
    httpStatus = require ("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");
router.get("/", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
router.get("/recipes.html", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/recipes.html", res);
});
router.get("/careers.html", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/careers.html", res);
});
router.get("/techniques.html", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/techniques.html", res);
});
router.post("/", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
router.post("/", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/careers.html", res);
});
router.post("/", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});
router.get("/people.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});
router.get("/.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});
router.get("/product.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});
router.get("/graph.png", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});
router.get("/food.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/food.jpg", res);
});
router.get("/chef.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/chef.jpg", res);
});
router.get("/technique.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/technique.jpg", res);
});
router.get("/background.jpg", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/background.jpg", res);
});
router.get("/bootstrap.css", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
router.get("/confetti_cuisine.css", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});
router.get("/confetti_cuisine.js", (req, res)=> {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confettiCuisine.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`)