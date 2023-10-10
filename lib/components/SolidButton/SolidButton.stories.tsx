import { SolidButton } from "./SolidButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import {TgMiniAppRoot} from "../TgMiniAppRoot/TgMiniAppRoot.tsx";
import {IoAdd, IoClose, IoSave, IoTrash} from "react-icons/io5";

const meta: Meta<typeof SolidButton> = {
  component: SolidButton,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ['onClick']
    }
  },
  argTypes: {
    text: {
      control: "text",
      description: "Button text"
    },
    icon : {
      description: 'Icon, that appears in the button. Can contain SVG or image',
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
    color: {
      description: 'Button color. If button type is "block", only "main" and "red" colors are supported',
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

type Story = StoryObj<typeof SolidButton>;

export const ActionButton: Story = {
  args: {
    text: "Save content",
    icon: <IoSave />
  },
};

export const CancelButton: Story = {
  args: {
    text: "Cancel",
    color: 'red',
    icon: <IoClose />
  },
};


