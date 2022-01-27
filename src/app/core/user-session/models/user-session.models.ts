import { SocialUser } from "angularx-social-login";

export interface UserData extends SocialUser { };

export interface AuthToken {
    access_token: string,
    expires_at: number,
    expires_in: number,
    first_issued_at: number,
    id_token: string,
    idpId: string,
    login_hint: string,
    scope: string,
    session_state: any,
    token_type: string
}