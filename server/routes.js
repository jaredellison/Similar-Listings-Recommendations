const express = require("express");
const routeHandlers = require("./controllers/homeControllers.js");
const router = express.Router();

router.get("/api/similar/:id", routeHandlers.retrieveOne);
router.get("/*", routeHandlers.alternateRoute);

module.exports = router;
