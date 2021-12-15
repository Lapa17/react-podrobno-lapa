import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Rating, { RatingValueType }  from './Rating';

export default {
  title: 'components/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const callback = action('something is clicked')

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Unrating = Template.bind({});

Unrating.args = {
    value: 0,
    onClick:callback,
};
export const RatingWithOneStar = Template.bind({});

RatingWithOneStar.args = {
    value: 1,
    onClick:callback,
};
export const RatingWithTwoStars = Template.bind({});

RatingWithTwoStars.args = {
    value: 2,
    onClick:callback,
};
export const RatingWithThreeStars = Template.bind({});

RatingWithThreeStars.args = {
    value: 3,
    onClick:callback,
};
export const RatingWithFourStars = Template.bind({});

RatingWithFourStars.args = {
    value: 4,
    onClick:callback,
};
export const RatingWithFiveStars = Template.bind({});

RatingWithFiveStars.args = {
    value: 5,
    onClick:callback,
};

export const ChanginRating:ComponentStory<typeof Rating> = (args) => {
    const [value,setValue] = useState<RatingValueType>(0)
    return <Rating value={value}  onClick={setValue}/>
}