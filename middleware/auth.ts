
export class Auth {
    static authorizedOnly(req: any, res: any, next: any) {
        
        next();
    }

    static async adminOnly(req: any, res: any, next: any) {

        next();
    }

}