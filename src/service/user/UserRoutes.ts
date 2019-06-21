import { UserController } from "./UserController";

export const UserRoutes = [{
    method: "get",
    path: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    path: "/getUser",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    path: "/saveUser",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    path: "/deleteUser",
    controller: UserController,
    action: "remove"
}];