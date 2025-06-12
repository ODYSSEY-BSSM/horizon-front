import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import type { TextVariant } from './Text.types';

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'H_B_28',
        'H_B_24',
        'H_B_20',
        'H_B_16',
        'H_B_12',
        'T_SB_24',
        'T_SB_20',
        'T_SB_16',
        'T_SB_14',
        'T_SB_12',
        'B_M_20',
        'B_M_16',
        'B_M_14',
        'B_M_12',
        'B_M_8',
        'C_SB_12',
        'L_M_12',
        'P_R_16',
        'P_R_12',
        'BTN_M_28',
        'BTN_M_24',
        'BTN_M_20',
      ] as TextVariant[],
    },
    color: {
      control: 'color',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    ellipsis: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
    tag: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    variant: 'P_R_16',
    children: '기본 텍스트',
  },
};

export const Heading: Story = {
  args: {
    variant: 'H_B_28',
    children: '큰 제목',
  },
};

export const Title: Story = {
  args: {
    variant: 'T_SB_24',
    children: '제목',
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'B_M_20',
    children: '부제목',
  },
};

export const Body: Story = {
  args: {
    variant: 'P_R_16',
    children: '본문 텍스트',
  },
};

export const WithEllipsis: Story = {
  args: {
    variant: 'P_R_16',
    width: '200px',
    ellipsis: true,
    children:
      '이 텍스트는 너무 길어서 말줄임표로 표시됩니다. 이 텍스트는 너무 길어서 말줄임표로 표시됩니다.',
  },
};

export const WithCustomColor: Story = {
  args: {
    variant: 'P_R_16',
    color: '#ff0000',
    children: '빨간색 텍스트',
  },
};

export const WithCustomTag: Story = {
  args: {
    variant: 'H_B_28',
    tag: 'h1',
    children: 'h1 태그로 렌더링된 제목',
  },
};
