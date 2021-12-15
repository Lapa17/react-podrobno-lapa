import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Rating, { RatingValueType }  from './Rating';

export default {
  title: 'Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};