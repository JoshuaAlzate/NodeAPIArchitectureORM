import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../../entity/User";
import { HTTP400Error } from "../../utils/httpErrors";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        if (!request.query.ID) {
            throw new HTTP400Error("Missing parameter");
        }
        return this.userRepository.findOne(request.query.ID);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        if (!request.body) {
            throw new HTTP400Error("Missing parameter");
        }
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        if (!request.body.ID) {
            throw new HTTP400Error("Missing parameter");
        }
        try {
            let userToRemove = await this.userRepository.findOne(request.body.ID);
            await this.userRepository.remove(userToRemove);
        } catch {
            throw new HTTP400Error("Parameter does not match any on records");
        }

    }

}