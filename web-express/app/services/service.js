import dataBase from '../Database/maria.js'
import applyDotenv from "../lambdas/applyDotenv.js";
import dotenv from "dotenv";

dotenv.config()


export default function Service(){
    const {
        access_jwt_secret
    } = applyDotenv(dotenv)

    const db = dataBase.connect()

    return{
        service(req,res){

        }
    }

}