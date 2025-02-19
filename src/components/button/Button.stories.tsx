import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * This `Button` is commonly used for actions within a UI, providing clear visual cues to guide user interactions.
 */
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { table: { category: 'Basic' } },
    className: { table: { disable: true } },
    label: { table: { category: 'Basic' } },
    align: { table: { category: 'Basic' } },
    mode: { table: { category: 'Basic' } },
    size: {
      defaultValue: 'large',
      table: { category: 'Basic' }
    },
    fullWidth: {
      defaultValue: false,
      description: 'Stretch the button to max width or fit content',
      table: { category: 'Basic' }
    },
    icon: {
      control: {type: 'select'},
      table: { category: 'Icon' },
    },
    iconLeft: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Show icon on the left side',
      table: { category: 'Icon' },
    },
    iconRight: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Show icon on the right side',
      table: { category: 'Icon' },
    },
    isLoading: {
      table: { category: 'States' }
    },
    disabled: {
      table: { category: 'States' }
    },
    onClick: {
      table: { category: 'Interaction' }
    }
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1RQVVA3w5rXz3qznV6USuz/%F0%9F%93%96-Ascenda-Components?node-id=14920-45549&t=4dJcRW3aGCa8Sa9E-4'
    },
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

/** The `Primary Button` is the main call-to-action (CTA) element used throughout the interface. It stands out with a strong, solid background color and is typically used for key actions that require user attention. */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Label',
    align: 'left',
    size: 'large',
    icon: 'arrowRightFull',
    iconLeft: false,
    iconRight: true,
    fullWidth: false,
    isLoading: false,
    disabled: false,
    mode: 'light',
  },
};

/** The `Secondary Button` provides a less prominent alternative to the primary button. It features a subtle, outlined style and is used for less critical actions. */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Label',
    align: 'left',
    size: 'large',
    icon: 'arrowRightFull',
    iconLeft: false,
    iconRight: true,
    fullWidth: false,
    isLoading: false,
    disabled: false,
    mode: 'light'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1RQVVA3w5rXz3qznV6USuz/%F0%9F%93%96-Ascenda-Components?node-id=14920-45590&t=4dJcRW3aGCa8Sa9E-4'
    }
  }
};