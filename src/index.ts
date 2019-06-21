import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import routes from "./service/routes";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import { applyMiddleware, applyRoutes } from "./utils";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

createConnection().then(async connection => {

    // create express app
    const router = express();
    router.use(bodyParser.json());

    // register express routes from defined application routes
    applyRoutes(routes, router);
    applyMiddleware(middleware, router);
    applyMiddleware(errorHandlers, router);

    // setup express app here
    // ...

    // start express server
    router.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => {
    console.log(error)
});
