import React from 'react';
import {action} from '@storybook/addon-actions'

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Accordion  from './Accordion';
import { useState } from '@storybook/addons';

export default {
  title: 'components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('something is clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});

CollapsedMode.args = {
   titleValue:'Menu',
   collapsed: true,
   setCollapsed:callback
};

export const UnCollapsedMode = Template.bind({});

UnCollapsedMode.args = {
   titleValue:'Users',
   collapsed: false,
   setCollapsed:callback
};

export const ChanginMode:ComponentStory<typeof Accordion> = (args) => {
    const [value,setValue] = useState<boolean>(false)
    return <Accordion {...args} collapsed={value} setCollapsed={setValue}/>
}

ChanginMode.args = {
   titleValue:'List',
};