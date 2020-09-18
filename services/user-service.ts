import { USER } from '../core/schemas';
import { User } from '../core/models';

export class UserService {

    static async userInformation(user: User): Promise<any> {
        let body;
        try {
            await USER.create(user);
            body = {
                userStatus : `hello user ${user.name} with email ${user.email}`
            };
        } catch (e) {
            throw e;
        }
        return body;
    }
}
