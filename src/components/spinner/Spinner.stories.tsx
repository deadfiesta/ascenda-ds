import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

/**This `Spinner` is a non-progressive loading indicator that provides visual feedback while content is being loaded. It continuously animates in a circular motion to indicate an ongoing process without showing specific progress.  */
const meta: Meta<typeof Spinner> = {
    component: Spinner,
    title: 'Components/Loader',
    tags: ['autodocs'],
    argTypes: {
        size: { table: { category: 'Basic' } },
        className: { table: { disable: true } },
    },
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/1RQVVA3w5rXz3qznV6USuz/%F0%9F%93%96-Ascenda-Components?node-id=9207-11946&t=aYcd7afGJpfnApwV-4'
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderSpinner: Story = {
    args: {
        size: 48,
    }
}