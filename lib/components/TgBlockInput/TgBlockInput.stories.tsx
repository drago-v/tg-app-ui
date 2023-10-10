import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {TgBlockInput} from "./TgBlockInput.tsx";

const meta: Meta<typeof TgBlockInput> = {
    component: TgBlockInput,
    tags: ["autodocs"],
    parameters: {
        controls: {
            exclude: ['onClick']
        }
    },
    decorators : [
        (Story) => (
            <TgMiniAppRoot>
                <div style={{padding:20,maxWidth:400,margin:'0 auto'}}>
                    <Story />
                </div>
            </TgMiniAppRoot>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TgBlockInput>;

export const SimpleInput: Story = {
    args: {
        title: "BIO",
        caption: "Any details such as age, occupation or city"
    },
};


