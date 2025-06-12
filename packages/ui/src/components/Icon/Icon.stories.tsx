import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import type { IconVariant } from './Icon.types';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'Stroke_R_32',
        'Stroke_R_28',
        'Stroke_R_24',
        'Fill_R_32',
        'Fill_R_28',
        'Fill_R_24',
        'Stroke_L_32',
        'Stroke_L_28',
        'Stroke_L_24',
        'Fill_L_32',
        'Fill_L_28',
        'Fill_L_24',
      ] as IconVariant[],
    },
    name: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'home',
    variant: 'Stroke_R_24',
  },
};

export const RegularStroke: Story = {
  args: {
    name: 'home',
    variant: 'Stroke_R_32',
  },
};

export const RegularFill: Story = {
  args: {
    name: 'home',
    variant: 'Fill_R_32',
  },
};

export const LightStroke: Story = {
  args: {
    name: 'home',
    variant: 'Stroke_L_32',
  },
};

export const LightFill: Story = {
  args: {
    name: 'home',
    variant: 'Fill_L_32',
  },
};

export const WithAriaLabel: Story = {
  args: {
    name: 'home',
    variant: 'Stroke_R_24',
    'aria-label': '홈 아이콘',
  },
};
