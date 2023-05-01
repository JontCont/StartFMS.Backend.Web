/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import axios from "axios";
const getError = (error: any) => {
    const message = error.message || 'Failed';
    return new Error(message);
};

export const loginByAuth = async (email: string, password: string) => {

    try{
        const url :string = "https://localhost:5001/api/auth/v1.0/Login/jwtLogin";
        let token:any;
        await axios
            .post(url,{ Account : email, Password : password})
            .then((res) => {
                token = res.data;
                return token;
            });

        console.log(token);
        return token;
    }catch(error : any){
        throw getError({
            message : "伺服器暫時無法使用"
        });
    }
};

export const registerByAuth = async (email: string, password: string) => {
    throw getError({
        message : "伺服器暫時無法使用"
    });

    // try {
    //     const token = await Gatekeeper.registerByAuth(email, password);
    //     return token;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};

export const loginByGoogle = async () => {
    throw getError({
        message : "伺服器暫時無法使用"
    });
    // try {
    //     const token = await Gatekeeper.loginByGoogle();
    //     return token;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};

export const registerByGoogle = async () => {
    getError({
        message : "伺服器暫時無法使用"
    });
    // try {
    //     const token = await Gatekeeper.registerByGoogle();
    //     return token;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};

export const loginByFacebook = async () => {
    throw getError({
        message : "伺服器暫時無法使用"
    });
    // try {
    //     const token = await Gatekeeper.loginByFacebook();
    //     return token;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};

export const registerByFacebook = async () => {
    throw getError({
        message : "伺服器暫時無法使用"
    });
    // try {
    //     const token = await Gatekeeper.registerByFacebook();
    //     return token;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};
export const getProfile = async () => {
    throw getError({
        message : "伺服器暫時無法使用"
    });
    // try {
    //     const user = await Gatekeeper.getProfile();
    //     return user;
    // } catch (error: any) {
    //     throw getError(error);
    // }
};
