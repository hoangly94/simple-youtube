import Icon from "@ant-design/icons/lib/components/Icon";

export interface SVGComponentProps {
  width?: number;
  height?: number;
  color?: string;
}
const SVGComponent = ({
  width = 29,
  height = 20,
  color = "#FF0000",
}: SVGComponentProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
      fill={color}
    />
    <path
      d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
      fill="#0D0C12"
    />
  </svg>
);

export const YoutubeIcon = (props: SVGComponentProps) => {
  return <Icon component={() => <SVGComponent {...props} />} />;
};
