import config from "../config/config";
import {Client,Account,ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;// yaha hmne account esa isliw likha h kyuki pehle hme client bnana pdega tbhi account bnega 

    constructor(){
        this.client.setEndpoint(config.appwriteURL).setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log("Appwrite serive :: getCurrentUser :: error",error);
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
            // return await this.account.deleteSession('current'); //  this is used to delete the current session from this
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;