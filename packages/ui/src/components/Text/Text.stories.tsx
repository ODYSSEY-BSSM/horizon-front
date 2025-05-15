import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Foundation/Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
텍스트 컴포넌트는 다양한 크기, 굵기, 스타일의 텍스트를 표시합니다.

## 사용 방법
\`\`\`tsx
import { Text } from '@horizon/ui';

// 기본 사용
<Text variant="P_R_16">기본 텍스트</Text>

// 제목으로 사용
<Text variant="H_B_28">큰 제목</Text>

// 말줄임표 처리
<Text variant="P_R_12" width="200px" ellipsis>
  긴 텍스트...
</Text>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: '텍스트의 스타일 변형',
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
        'S_M_20',
        'S_M_16',
        'S_M_14',
        'S_M_12',
        'S_M_8',
        'C_SB_12',
        'L_M_12',
        'P_R_16',
        'P_R_12',
        'BTN_SB_16',
        'BTN_SB_14',
        'BTN_SB_12',
      ],
    },
    color: {
      control: 'color',
      description: '텍스트 색상',
    },
    textAlign: {
      control: 'select',
      description: '텍스트 정렬',
      options: ['left', 'center', 'right'],
    },
    ellipsis: {
      control: 'boolean',
      description: '텍스트가 너무 길 때 말줄임표로 표시',
    },
    width: {
      control: 'text',
      description: '텍스트 컨테이너의 너비',
    },
    tag: {
      control: 'select',
      description: '렌더링할 HTML 태그',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 텍스트
export const Default: Story = {
  args: {
    variant: 'P_R_16',
    children: '기본 텍스트',
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 텍스트 스타일입니다. 본문에 주로 사용됩니다.',
      },
    },
  },
};

// 모든 variant 한눈에 보기
export const AllVariants: Story = {
  args: {
    variant: 'P_R_16',
    children: '기본 텍스트',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Headings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="H_B_28">H_B_28 - Heading 28px Bold</Text>
          <Text variant="H_B_24">H_B_24 - Heading 24px Bold</Text>
          <Text variant="H_B_20">H_B_20 - Heading 20px Bold</Text>
          <Text variant="H_B_16">H_B_16 - Heading 16px Bold</Text>
          <Text variant="H_B_12">H_B_12 - Heading 12px Bold</Text>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Titles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="T_SB_24">T_SB_24 - Title 24px SemiBold</Text>
          <Text variant="T_SB_20">T_SB_20 - Title 20px SemiBold</Text>
          <Text variant="T_SB_16">T_SB_16 - Title 16px SemiBold</Text>
          <Text variant="T_SB_14">T_SB_14 - Title 14px SemiBold</Text>
          <Text variant="T_SB_12">T_SB_12 - Title 12px SemiBold</Text>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Subtitles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="B_M_20">B_M_20 - Subtitle 20px Medium</Text>
          <Text variant="B_M_16">B_M_16 - Subtitle 16px Medium</Text>
          <Text variant="B_M_14">B_M_14 - Subtitle 14px Medium</Text>
          <Text variant="B_M_12">B_M_12 - Subtitle 12px Medium</Text>
          <Text variant="B_M_8">B_M_8 - Subtitle 8px Medium</Text>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Paragraphs</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="P_R_16">P_R_16 - Paragraph 16px Regular</Text>
          <Text variant="P_R_12">P_R_12 - Paragraph 12px Regular</Text>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Buttons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="BTN_SB_16">BTN_SB_16 - Button 16px SemiBold</Text>
          <Text variant="BTN_SB_14">BTN_SB_14 - Button 14px SemiBold</Text>
          <Text variant="BTN_SB_12">BTN_SB_12 - Button 12px SemiBold</Text>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Others</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text variant="C_SB_12">C_SB_12 - Caption 12px SemiBold</Text>
          <Text variant="L_M_12">L_M_12 - Label 12px Medium</Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text 컴포넌트에서 사용 가능한 모든 variant를 한눈에 볼 수 있습니다.',
      },
    },
  },
};

// 말줄임표 처리
export const WithEllipsis: Story = {
  args: {
    variant: 'P_R_16',
    width: '200px',
    ellipsis: true,
    children:
      '이 텍스트는 너무 길어서 말줄임표로 표시됩니다. 이 텍스트는 너무 길어서 말줄임표로 표시됩니다.',
  },
  parameters: {
    docs: {
      description: {
        story:
          '텍스트가 컨테이너 너비를 초과할 때 말줄임표로 표시됩니다. 카드나 버튼 내의 긴 텍스트에 유용합니다.',
      },
    },
  },
};

// 시맨틱 사용 예시
export const SemanticUsage: Story = {
  args: {
    variant: 'P_R_16',
    children: '기본 텍스트',
  },
  render: () => (
    <article style={{ maxWidth: '400px' }}>
      <Text variant="H_B_28" tag="h1">
        기사 제목
      </Text>
      <Text variant="T_SB_20" tag="h2" style={{ marginTop: '16px' }}>
        섹션 제목
      </Text>
      <Text variant="P_R_16" tag="p" style={{ marginTop: '12px' }}>
        이것은 단락 텍스트입니다. 시맨틱한 HTML 태그 사용으로 접근성을 개선할 수 있습니다.
      </Text>
      <Text
        variant="C_SB_12"
        tag="span"
        style={{ marginTop: '8px', display: 'block', color: '#666' }}
      >
        캡션이나 메타데이터
      </Text>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story: '접근성을 고려한 시맨틱 HTML 태그 사용 예시입니다.',
      },
    },
  },
};

// 인터랙티브 예시
export const Interactive: Story = {
  args: {
    variant: 'P_R_16',
    children: '상단 컨트롤을 조작해보세요',
    color: '#000000',
    textAlign: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: '상단의 컨트롤을 사용하여 텍스트 속성을 실시간으로 변경해볼 수 있습니다.',
      },
    },
  },
};
