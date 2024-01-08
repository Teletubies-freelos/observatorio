import { HttpResponse, RequestHandler, http } from 'msw'

export const handlers: RequestHandler[] = [
  http.get(/teletubies|pokemon/, ()=>{
    return HttpResponse.json({
      data: [
        {
          name: 'home',
          href: '#'
        },
        {
          name: 'seguros',
          childrenItems:[{
            name: 'vida',
            href: '#'
          }, {
            name: 'autos',
            href: '#'
          }]
        }
      ]
    })
  })
]
