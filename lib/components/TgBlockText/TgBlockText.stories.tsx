import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {TgBlockText} from "./TgBlockText.tsx";
import {TgBlock} from "../TgBlock/TgBlock.tsx";

const meta: Meta<typeof TgBlockText> = {
    component: TgBlockText,
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
                    <TgBlock title="Simple text">
                        <Story />
                    </TgBlock>
                </div>
            </TgMiniAppRoot>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TgBlockText>;

export const SimpleText: Story = {
    args: {
        children: "This is simple text block"
    },
};


