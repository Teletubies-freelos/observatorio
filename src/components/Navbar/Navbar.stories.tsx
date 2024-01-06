import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './Navbar';

const meta = {
  title: 'Organisms/Navbar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
 
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sx:{
      background: 'none',
      width: '80vw',
      paddingInline: 2
    },
    data:[
      {
        name: 'sadsadsa',
        href: '#'        
      },
      {
        name: 'sadsadsa',
        childrenItems: [
          {
            name: 'asdsadsa',
            href: '#'
          }
        ]
      }
    ]
  },
};

