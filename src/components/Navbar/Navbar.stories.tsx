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
    data:[
      {
        name: 'sadsadsa',
        href: '#'        
      },
      {
        name: 'sadsadsa',
        children: [
          {
            name: 'asdsadsa',
            href: '#'
          }
        ]
      }
    ]
  },
};

