import Icon from "@ant-design/icons/lib/components/Icon";

export interface SVGComponentProps {
  width?: number;
  height?: number;
  color?: string;
}
const SVGComponent = ({
  width = 16,
  height = 14,
  color = "#FF0000",
}: SVGComponentProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.58374 14C7.34957 13.9997 7.1209 13.9289 6.92749 13.7969C4.06223 11.8519 2.82155 10.5182 2.13723 9.68443C0.678894 7.90708 -0.0192827 6.08234 0.00040484 4.1063C0.0233736 1.84188 1.84009 0 4.0502 0C5.65728 0 6.77035 0.90526 7.41858 1.65922C7.43912 1.68286 7.46449 1.70182 7.49298 1.71481C7.52147 1.72781 7.55242 1.73453 7.58374 1.73453C7.61505 1.73453 7.646 1.72781 7.6745 1.71481C7.70299 1.70182 7.72836 1.68286 7.74889 1.65922C8.39712 0.904531 9.5102 0 11.1173 0C13.3274 0 15.1441 1.84187 15.1671 4.10667C15.1868 6.08307 14.4879 7.90781 13.0302 9.68479C12.3459 10.5186 11.1052 11.8522 8.23999 13.7973C8.04653 13.9292 7.81787 13.9998 7.58374 14Z"
      fill={color}
    />
  </svg>
);

export const LikeIcon = (props: SVGComponentProps) => {
  return <Icon component={() => <SVGComponent {...props} />} />;
};
