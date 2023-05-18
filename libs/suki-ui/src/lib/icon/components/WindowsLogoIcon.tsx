import { ICON_COLORS, SvgProps } from "../Icon";

const WindowsLogoIcon = ({
  width = 257,
  height = 257,
  color = ICON_COLORS.white,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="-0.5 0 257 257"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M0 36.357 104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z"
      fill={color}
      opacity={opacity}
    />
  </svg>
);

export default WindowsLogoIcon;
