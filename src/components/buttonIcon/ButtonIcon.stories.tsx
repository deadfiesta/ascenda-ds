import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';

/**
 * This `ButtonIcon` is commonly used for actions within a UI, providing clear visual cues to guide user interactions.
 */
const meta: Meta<typeof ButtonIcon> = {
    component: ButtonIcon,
    title: 'Components/Buttons/Button Icon',
    tags: ['autodocs'],
    argTypes: {
        variant: { table: { category: 'Basic' } },
        className: { table: { disable: true } },
        icon: { table: { category: 'Basic' } },
        mode: { table: { category: 'Basic' } },
        draggable: { table: { category: 'Basic' } },
        disabled: { table: { category: 'Basic' } },
        onClick: { table: { category: 'Interaction' } },
        onDragStart: { table: { category: 'Interaction' } },
        onDrag: { table: { category: 'Interaction' } },
        onDragEnd: { table: { category: 'Interaction' } },
        onDragOver: { table: { category: 'Interaction' } },
        onDrop: { table: { category: 'Interaction' } },
        onGrab: { table: { category: 'Interaction' } },

    },
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/1RQVVA3w5rXz3qznV6USuz/%F0%9F%93%96-Ascenda-Components?node-id=14920-46144&t=aYcd7afGJpfnApwV-4'
        },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Narrow: Story = {
    args: {
        variant: 'narrow',
        icon: 'dragDots',
        mode: 'light',
        disabled: false,
        draggable: false,
    },
};

export const Small: Story = {
    args: {
        variant: 'small',
        icon: 'settings',
        mode: 'light',
        disabled: false,
        draggable: false,
    },
};

export const Large: Story = {
    args: {
        variant: 'large',
        icon: 'settings',
        mode: 'light',
        disabled: false,
        draggable: false,
    },
};