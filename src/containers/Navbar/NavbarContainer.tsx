import { NavBar } from "@/components/Navbar";
import { getPages } from "./utils";

export async function NavbarContainer(){
  const { data }  = await getPages();

  return <NavBar data={data} sx={{
    background: 'none',
    width: '100%',
    paddingInline: 2
  }}/>
}
