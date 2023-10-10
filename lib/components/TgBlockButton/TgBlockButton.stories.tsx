import { TgBlockButton } from "./TgBlockButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {IoAdd, IoSave, IoTrash} from "react-icons/io5";

const meta: Meta<typeof TgBlockButton> = {
  component: TgBlockButton,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ['onClick']
    }
  },
  argTypes: {
    text: {
      control: "text",
    },
    icon : {
      options: ['add','delete','save'],
      mapping: {
        add: <IoAdd />,
        delete: <IoTrash />,
        save: <IoSave />,
      },
      control: {
        type: 'radio',
      }
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
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

type Story = StoryObj<typeof TgBlockButton>;

export const ActionButton: Story = {
  args: {
    text: "Create new item",
    icon: <IoAdd />
  },
};

export const NegativeButton: Story = {
  args: {
    text: "Delete Item",
    icon: <IoTrash />,
    color: 'red'
  },
};


