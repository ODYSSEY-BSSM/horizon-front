import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Foundation/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Material Symbols 아이콘 컴포넌트입니다. 구글의 [Material Symbols](https://fonts.google.com/icons)에서 원하는 아이콘 이름을 name prop으로 전달해 사용할 수 있습니다.

## 사용 예시

~~~tsx
import { Icon } from '@horizon/ui';

<Icon name="home" />
<Icon name="favorite" size="large" fill="light" style={{ color: 'tomato' }} />
~~~
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Material Symbols 아이콘 이름',
      defaultValue: 'home',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: '아이콘 크기',
      defaultValue: 'medium',
    },
    weight: {
      control: { type: 'radio' },
      options: ['regular', 'light'],
      description: '아이콘 두께',
      defaultValue: 'regular',
    },
    fill: {
      control: { type: 'radio' },
      options: ['regular', 'light'],
      description: '아이콘 채움',
      defaultValue: 'regular',
    },
    style: {
      control: 'object',
      description: '스타일 오브젝트 (color 등)',
    },
  },
  args: {
    name: 'home',
    size: 'medium',
    weight: 'regular',
    fill: 'regular',
    style: { color: '#222' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '기본 Material Symbols 아이콘입니다.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Icon {...args} size="small" />
      <Icon {...args} size="medium" />
      <Icon {...args} size="large" />
    </div>
  ),
  args: { name: 'home' },
  parameters: {
    docs: {
      description: {
        story: 'small, medium, large 크기를 한눈에 볼 수 있습니다.',
      },
    },
  },
};

export const AllWeights: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Icon {...args} weight="regular" />
      <Icon {...args} weight="light" />
    </div>
  ),
  args: { name: 'home' },
  parameters: {
    docs: {
      description: {
        story: 'regular, light 두께를 비교할 수 있습니다.',
      },
    },
  },
};

export const AllFills: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Icon {...args} fill="regular" />
      <Icon {...args} fill="light" />
    </div>
  ),
  args: { name: 'home' },
  parameters: {
    docs: {
      description: {
        story: 'regular, light 채움 스타일을 비교할 수 있습니다.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    name: 'favorite',
    style: { color: 'tomato' },
  },
  parameters: {
    docs: {
      description: {
        story: 'style prop을 통해 색상을 자유롭게 지정할 수 있습니다.',
      },
    },
  },
};
