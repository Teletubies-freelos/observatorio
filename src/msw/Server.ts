
import { SetupServer, setupServer } from 'msw/node'
import { handlers } from './handlers';


export class MSWServer{
  private static instance: MSWServer;
  server: SetupServer

  constructor(){
    this.server = setupServer(...handlers)
  }
 
  static init(){
    console.log("msw server is initing")
    if(!MSWServer.instance){
      MSWServer.instance = new MSWServer();
      MSWServer.instance.server.listen({
        onUnhandledRequest: 'error'
      });
      MSWServer.instance.server.events.on('request:unhandled', ()=>{
        console.log('unhdled')
      })
    }

    return MSWServer.instance
  }
}
