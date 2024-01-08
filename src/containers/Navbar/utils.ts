import { NavItem } from '../../components/Navbar/types'


export async function getPages():Promise<{data: NavItem[]}>{
  const  response = await fetch('https://teletubies.com');

  return await response.json();
}

getPages.fake = ()=> Promise.resolve<{data: NavItem[]}>({
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


