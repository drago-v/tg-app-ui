import {TgBlockItem, TgBlockItemProps} from "../TgBlockItem/TgBlockItem.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {IoNotifications, IoPerson, IoPersonCircleOutline, IoSettings} from "react-icons/io5";
import {TgBlock} from "./TgBlock.tsx";
import {useState} from "react";

const meta: Meta<typeof TgBlock> = {
    component: TgBlock,
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

type Story = StoryObj<typeof TgBlockItem>;

export const SingleItem: Story = {
    args: {
        text: "Profile",
        icon: <IoPersonCircleOutline />,
        chevron: true,
    },
    render: (args: TgBlockItemProps) => (
        <TgBlock title="Block with single item">
            <TgBlockItem {...args} />
        </TgBlock>
    ),
};

const ItemsListTemplate: Story = {
    render: ({items}: any) => {
        return <TgBlock title="Block with multiple items" caption="And caption below">
            {items.map((item: any) => (
                <TgBlockItem {...item} />
            ))}
        </TgBlock>
    }
}

export const ItemsList: Story = {
    ...ItemsListTemplate,
    args: {
        items : [
            {text: "Profile", icon: <IoPerson size={20} />, chevron: true},
            {text: "Settings", icon: <IoSettings size={20} />, chevron: true},
            {text: "Notifications", icon: <IoNotifications size={20} />, chevron: true},
        ]
    } as Partial<TgBlockItemProps>,
};

const SelectTemplate: Story = {
    render: ({items}: any) => {

        const [selectedItem, setSelectedItem] = useState('Red');

        return <TgBlock title="Select items">
            {items.map((item: any) => (
                <TgBlockItem
                    {...item}
                    check={selectedItem === item.text}
                    onClick={() => setSelectedItem(item.text)}
                />
            ))}
        </TgBlock>
    }
}

export const SelectList: Story = {
    ...SelectTemplate,
    args: {
        items : [
            {text: "Red", icon: "🔴"},
            {text: "Green", icon: "🟢"},
            {text: "Yellow", icon: "🟡"},
        ]
    } as Partial<TgBlockItemProps>,
};

const SwitchTemplate: Story = {
    render: ({items}: any) => {

        const [switch1, setSwitch1] = useState(true);
        const [switch2, setSwitch2] = useState(false);
        const [switch3, setSwitch3] = useState(false);

        const switches = [
            {value: switch1, toggle: () => setSwitch1(!switch1)},
            {value: switch2, toggle: () => setSwitch2(!switch2)},
            {value: switch3, toggle: () => setSwitch3(!switch3)},
        ];

        return <TgBlock title="Switch items">
            {items.map((item: any, index: number) => (
                <TgBlockItem
                    {...item}
                    switcher={switches[index].value}
                    onClick={() => {
                        switches[index].toggle()
                    }}
                />
            ))}
        </TgBlock>
    }
}

export const SwitchesList: Story = {
    ...SwitchTemplate,
    args: {
        items : [
            {text: "Receive notifications"},
            {text: "Receive newsletters"},
            {text: "Receive advertisements"},
        ]
    } as Partial<TgBlockItemProps>,
};



