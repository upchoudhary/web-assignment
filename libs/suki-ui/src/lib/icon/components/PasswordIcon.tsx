import { SvgProps } from "../Icon";

const Password = ({ width = 40, height = 40, ...props }: SvgProps) => (
  <svg
    fill="none"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M34.142 5.858C30.3913 2.10667 25.304 0 20 0C8.954 0 0 8.954 0 20C0 25.304 2.10667 30.3913 5.858 34.142C9.60867 37.8933 14.696 40 20 40C25.304 40 30.3913 37.8933 34.142 34.142C37.8933 30.3913 40 25.304 40 20C40 14.696 37.8933 9.60867 34.142 5.858ZM26.048 10.4656C26.8088 10.7772 27.4989 11.2427 28.1183 11.8621C28.7285 12.4723 29.1871 13.16 29.4941 13.9254C29.8057 14.6862 29.9608 15.4694 29.9596 16.2749C29.9676 17.0805 29.819 17.8623 29.5138 18.6206C29.2178 19.3788 28.7672 20.0605 28.1622 20.6655C27.2225 21.6052 26.0879 22.162 24.7584 22.3359C23.4335 22.5145 22.024 22.2784 20.5299 21.6277L20.5316 25.3285C20.5322 25.4758 20.4867 25.5953 20.395 25.687C20.3079 25.7833 20.1954 25.8312 20.0573 25.8306L16.3357 25.808L16.3677 28.5078C16.3637 28.6505 16.3159 28.7677 16.2242 28.8594C16.1371 28.9557 16.02 29.0035 15.8727 29.0029L11.4952 28.9845C11.3479 28.9839 11.2279 28.9281 11.1354 28.8173C11.0475 28.711 11.0033 28.5981 11.0028 28.4784L11 26.1654C11.0041 26.0411 11.0243 25.9284 11.0607 25.8273C11.1017 25.7308 11.1658 25.639 11.2529 25.5519L18.0391 18.7657C17.6813 17.9679 17.4938 17.1524 17.4765 16.3192C17.4638 15.4814 17.61 14.6741 17.9151 13.8975C18.2295 13.1209 18.6938 12.4255 19.308 11.8113C19.9176 11.2017 20.5992 10.7465 21.3529 10.4459C22.1157 10.1453 22.8976 9.99669 23.6985 10.0001C24.5087 10.0035 25.2918 10.1586 26.048 10.4656ZM23.4012 14.832C23.4032 15.3107 23.5753 15.7211 23.9173 16.0631C24.2547 16.4006 24.6628 16.5703 25.1415 16.5723C25.6249 16.5789 26.0362 16.4126 26.3754 16.0734C26.71 15.7388 26.874 15.3298 26.8673 14.8465C26.8699 14.3632 26.7025 13.9528 26.365 13.6154C26.0184 13.2687 25.6057 13.0944 25.1269 13.0924C24.6528 13.095 24.2462 13.2659 23.907 13.6051C23.5678 13.9443 23.3992 14.3532 23.4012 14.832Z"
      fill="#2E5F62"
      fillRule="evenodd"
    />
  </svg>
);

export default Password;

export { Password };
