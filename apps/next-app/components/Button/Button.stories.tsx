import { Button } from './Button';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {};

Default.args = {
  name: 'sample button',
};
