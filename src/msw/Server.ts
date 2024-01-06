
import { SetupServer, setupServer } from 'msw/node'
import { handlers } from './handlers';


export class MSWServer{
  private static instance: MSWServer;
  server: SetupServer

  constructor(){
    this.server = setupServer(...handlers)
  }
 
  static init(){
    if(!MSWServer.instance){
      MSWServer.instance = new MSWServer();
      MSWServer.instance.server.listen({
        onUnhandledRequest: 'warn'
      });
    }

    return MSWServer.instance
  }
}
