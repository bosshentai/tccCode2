import { ApiServerConfig } from "../../infra/config/api-server-config";

export class ServerApplication {

  // private readonly host: string = ApiServerConfig.HOST;
  // private readonly port: number = ApiServerConfig.PORT;

  public async run(): Promise<void>{
    // console.log(`Api server running on http://${this.host}:${this.port}`);
    console.log("Test")
  }


  // private log(): void {
  //   Logger.log(`Server started on host: ${this.host}; port: ${this.port};`, ServerApplication.name);
  // }
  

  public static new(): ServerApplication{
    return new ServerApplication();
  }

}