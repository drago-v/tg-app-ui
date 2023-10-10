import React from "react";
import css from "./TgUiIcons.module.scss";

type TgUiIconProps = {
  icon?: "chevron" | "info" | "check" | "cross" | "spinner";
  size?: number;
};

type TgUiIconType = {
  SvgProps: {
    viewBox: string;
    stroke: string;
    strokeWidth: number;
    fill: string;
  };
  SvgContent: React.ReactNode;
};

type TgUiIcons = {
  [key: string]: TgUiIconType;
};

const TgUiIcon = ({ icon = "chevron", size = 20 }: TgUiIconProps) => {
  const iconsData = {
    chevron: {
      SvgProps: {
        viewBox: "0 0 512 512",
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
      },
      SvgContent: (
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M184 112l144 144-144 144"
        ></path>
      ),
    },
    info: {
      SvgProps: {
        viewBox: "0 0 512 512",
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
      },
      SvgContent: (
        <path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path>
      ),
    },
    check: {
      SvgProps: {
        viewBox: "0 0 512 512",
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
      },
      SvgContent: (
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M416 128L192 384l-96-96"
        ></path>
      ),
    },
    spinner: {
      SvgProps: {
        className: css.spinner,
        viewBox: "0 0 20 20",
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
      },
      SvgContent: (
        <path
          fillRule="evenodd"
          d="M13.771 4.103a7 7 0 0 0-10.125 8.834.75.75 0 0 1-1.362.629A8.5 8.5 0 1 1 10 18.5a.75.75 0 0 1 0-1.5 7 7 0 0 0 3.771-12.897Z"
          clipRule="evenodd"
        ></path>
      ),
    },
    cross: {
      SvgProps: {
        viewBox: "0 0 512 512",
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: 0,
      },
      SvgContent: (
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M368 368L144 144m224 0L144 368"
        ></path>
      ),
    },
  } as TgUiIcons;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size + "px"}
      width={size + "px"}
      {...iconsData[icon].SvgProps}
    >
      {iconsData[icon].SvgContent}
    </svg>
  );
};

export const TgUiIconChevron = ({ size = 16 }: TgUiIconProps) => (
  <TgUiIcon icon="chevron" size={size} />
);

export const TgUiIconInfo = ({ size = 16 }: TgUiIconProps) => (
  <TgUiIcon icon="info" size={size} />
);

export const TgUiIconCheck = ({ size = 18 }: TgUiIconProps) => (
  <TgUiIcon icon="check" size={size} />
);

export const TgUiIconCross = ({ size = 18 }: TgUiIconProps) => (
  <TgUiIcon icon="cross" size={size} />
);

export const TgUiIconSpinner = ({ size = 18 }: TgUiIconProps) => (
  <TgUiIcon icon="spinner" size={size} />
);
