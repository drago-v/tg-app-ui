import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {TgBlock} from "../TgBlock/TgBlock.tsx";
import {TgBlockItem} from "../TgBlockItem/TgBlockItem.tsx";

const meta: Meta<typeof TgMiniAppRoot> = {
    component: TgMiniAppRoot,
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

type Story = StoryObj<typeof TgMiniAppRoot>;

export const SimpleInput: Story = {
    args: {

    },
    render: () => {
        return <TgMiniAppRoot>
            <TgBlock title="Sample block">
                <TgBlockItem text="Sample block item" />
            </TgBlock>
        </TgMiniAppRoot>
    }
};


