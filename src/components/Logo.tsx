'use client';
import { useTheme } from "@mui/material";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png'

export function CmpjLogo(props: Omit<ImageProps, 'src' | 'alt'>){
  const { palette } = useTheme();

  return( 
    <Link href={'/'}>
      <Image
        width={100}
        height={30}
        style={{
          filter: palette.mode === 'dark'? 'brightness(0) invert(1)': 'none'
        }} 
        {...props} 
        src={logo} 
        alt="Logo del Consejo" 
      />
    </Link>
  )
}
