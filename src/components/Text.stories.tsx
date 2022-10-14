import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'ola pessoal.',

    },   
} as Meta<TextProps>

export const Default:StoryObj<TextProps> = {}

export const Small:StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
}

export const Large:StoryObj<TextProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent:StoryObj<TextProps> ={
    args:{
        asChild:true,
        children: (
            <p>Text with P tag</p>
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

