import { HttpResponse, RequestHandler, http } from 'msw'

export const handlers: RequestHandler[] = [
  http.get(/teletubies/, ()=>{
    return HttpResponse.json({
      teletubies: ['lala', 'po']
    })
  })
]
