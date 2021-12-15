import React from 'react';
import {action} from '@storybook/addon-actions'

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  OnOff  from './OnOff';
import { useState } from '@storybook/addons';

export default {
  title: 'OnOff',
  component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('something is clicked')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});

OnMode.args = {
   onOff:true,
   setOnOff:callback,
};

export const OffMode = Template.bind({});

OffMode.args = {
    onOff:false,
    setOnOff:callback,
};

export const ChanginOnOffMode = () => {
    const [value,setValue] = useState<boolean>(false)
    return <OnOff onOff={value} setOnOff={setValue}/>
}