import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'ola pessoal.',
        size: 'md',
    },   
} as Meta<HeadingProps>

export const Default:StoryObj<HeadingProps> = {}

export const Small:StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const Large:StoryObj<HeadingProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent:StoryObj<HeadingProps> ={
    args:{
        asChild:true,
        children: (
            <h1>Heading with H1 </h1>
        )
    },
    argTypes: {
        children:{
            table: {
                disable: true,
            }
        }
    }
    }

