import Icon from "@ant-design/icons/lib/components/Icon";

export interface SVGComponentProps {
  width?: number;
  height?: number;
  color?: string;
}
const SVGComponent = ({
  width = 14,
  height = 15,
  color = "#787878",
}: SVGComponentProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7854 12.8947L10.6117 9.72099C11.3758 8.70379 11.7883 7.46564 11.7869 6.19343C11.7869 2.94381 9.14306 0.299988 5.89344 0.299988C2.64382 0.299988 0 2.94381 0 6.19343C0 9.44305 2.64382 12.0869 5.89344 12.0869C7.16566 12.0883 8.4038 11.6758 9.421 10.9117L12.5947 14.0854C12.7554 14.229 12.9649 14.3057 13.1803 14.2997C13.3957 14.2936 13.6006 14.2054 13.753 14.053C13.9054 13.9006 13.9936 13.6957 13.9997 13.4803C14.0057 13.2649 13.929 13.0554 13.7854 12.8947ZM1.68384 6.19343C1.68384 5.36085 1.93073 4.54696 2.39329 3.8547C2.85584 3.16243 3.51329 2.62288 4.2825 2.30426C5.0517 1.98565 5.89811 1.90229 6.71469 2.06471C7.53127 2.22714 8.28135 2.62807 8.87008 3.21679C9.4588 3.80551 9.85972 4.55559 10.0222 5.37218C10.1846 6.18876 10.1012 7.03517 9.7826 7.80437C9.46399 8.57358 8.92443 9.23102 8.23217 9.69358C7.5399 10.1561 6.72602 10.403 5.89344 10.403C4.7774 10.4017 3.70745 9.95775 2.91828 9.16859C2.12912 8.37942 1.68518 7.30947 1.68384 6.19343Z"
      fill={color}
    />
  </svg>
);

export const SearchIcon = (props: SVGComponentProps) => {
  return <Icon component={() => <SVGComponent {...props} />} />;
};