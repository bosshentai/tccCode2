// import {from, get, logger} from 'env-var';
// const env = from(process.env,{},logger)
import dotenv from 'dotenv';
dotenv.config();

export class ApiServerConfig {
  // public static readonly HOST : string = get("API_SERVER_HOST").required().asString();
  // public static readonly PORT : number = get("API_SERVER_PORT").required().asPortNumber();
  // public static readonly PORT : number = env.get("API_SERVER_PORT").required().asPortNumber();
  // public static readonly HOST : string = env.get("API_SERVER_HOST").required().asString();

  public static readonly HOST: string = process.env.API_SERVER_HOST
    ? process.env.API_SERVER_HOST
    : 'localhost';
  public static readonly PORT: number = process.env.API_SERVER_PORT
    ? Number(process.env.API_SERVER_PORT)
    : 3000;
}
