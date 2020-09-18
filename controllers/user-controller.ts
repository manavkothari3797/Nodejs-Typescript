import { Utils } from '../utils/utils';
import { UserService } from '../services/user-service';

export class UserController {
    constructor() {
    }

    /**
     * Get user information
     */
    static async getInfo(req: any, res: any) {
        const name = req.body.name;
        const email = req.body.email;
        const id = req.body.id;

        if (!name || !email || !id) {
            Utils.sendError(res, 404, 'user or email not found');
        } else {
            let body: any;
            try {
                body = await UserService.userInformation({
                    name: name,
                    email: email,
                    id: id
                });
                Utils.sendResponse(res, body);
            } catch (e) {
                Utils.sendError(res, 404, 'body not found');
            }
        }
    }
}
