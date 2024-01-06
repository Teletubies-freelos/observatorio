import type { Meta, StoryObj } from '@storybook/react';

import { SwitchColorMode } from './SwitchColorMode';

const meta = {
  title: 'Molecules/SwitchColorMode',
  component: SwitchColorMode,
  parameters: {
    layout: 'centered',
  },
 
} satisfies Meta<typeof SwitchColorMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

