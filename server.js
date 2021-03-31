const fazerCafeExpresso = require("express");
const cafeExpresso = fazerCafeExpresso();

cafeExpresso

// Alias for dirs
.use("/bscss", fazerCafeExpresso.static(__dirname + "/node_modules/bootstrap/dist/css"))
.use("/bsjs", fazerCafeExpresso.static(__dirname + "/node_modules/bootstrap/dist/js"))
.use("/jquery", fazerCafeExpresso.static(__dirname + "/node_modules/jquery/dist"))
.use("/popperjs", fazerCafeExpresso.static(__dirname + "/node_modules/popper.js/dist/umd"))

// GET Routes
.get("/", function (req, res) {
	res.sendFile(__dirname + "/src/pages/index.html")
})

// POST Routes


// Start server at 3000 port
.listen(3000, () => {console.log("Iniciando servidor cafe expresso . . .")})