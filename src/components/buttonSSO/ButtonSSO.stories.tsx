import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSSO } from './ButtonSSO';


const meta: Meta<typeof ButtonSSO> = {
    component: ButtonSSO,
    title: 'Components/Button (SSO)',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

/**The `SSO Login Button` allows users to authenticate using Single Sign-On (SSO) providers, such as Google. It provides a seamless and secure login experience by integrating with third-party authentication services. */
export const ButtonSSOLogin: Story = {
    args: {
        icon: "google",
        mode: 'light',
        maxWidth: true,
        disabled: false,
    },
    argTypes: {
        icon: { table: { category: "Basic" } },
        mode: { table: { category: "Basic" } },
        maxWidth: { table: { category: "Basic" } },
        disabled: { table: { category: "Basic" } },
        className: {
            table: {
                disable: true
            }
        }
    }
}