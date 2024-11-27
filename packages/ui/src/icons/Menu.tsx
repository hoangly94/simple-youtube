import Icon from "@ant-design/icons/lib/components/Icon";

export interface SVGComponentProps {
  width?: number;
  height?: number;
  color?: string;
}
const SVGComponent = ({
  width = 18,
  height = 13,
  color = "white",
}: SVGComponentProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.125 1.625H16.875M1.125 6.5H16.875M1.125 11.375H16.875"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export const MenuIcon = (props: SVGComponentProps) => {
  return <Icon component={() => <SVGComponent {...props} />} />;
};
