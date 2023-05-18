import { ICON_COLORS, SvgProps } from "../Icon";

const UnfinishedNoteIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => {
  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.149 14.05C11.1632 14.5917 11.5304 15 11.9965 15C12.4484 15 12.8086 14.6083 12.8298 14.05L12.9993 8.175C13.0204 7.525 12.5826 7 11.9965 7C11.4103 7 10.9796 7.525 11.0007 8.175L11.149 14.05Z"
        fill={color}
        opacity={opacity}
      />
      <path
        d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
        fill={color}
        opacity={opacity}
      />
      <path
        clipRule="evenodd"
        d="M15.1716 1H5C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L16.5858 1.58579C16.2107 1.21071 15.702 1 15.1716 1ZM6 3H14C14.5523 3 15 3.44772 15 4V6C15 6.55228 15.4477 7 16 7H18C18.5523 7 19 7.44772 19 8V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
        fill={color}
        fillRule="evenodd"
        opacity={opacity}
      />
    </svg>
  );
};

export default UnfinishedNoteIcon;

export { UnfinishedNoteIcon };
