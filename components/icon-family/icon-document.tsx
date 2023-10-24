import { IconProps } from "../../types";

export const IconDocument = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "20"}
      height={size || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.22222 0C0.988889 0 0 0.988889 0 2.22222V17.7778C0 19.0111 0.988889 20 2.22222 20H17.7778C19.0111 20 20 19.0111 20 17.7778V2.22222C20 0.988889 19.0111 0 17.7778 0H2.22222ZM2.22222 2.22222H17.7778V17.7778H2.22222V2.22222ZM4.44444 6.66667V4.44444H15.5556V6.66667H4.44444ZM4.44444 8.88889V11.1111H15.5556V8.88889H4.44444ZM4.44444 15.5556V13.3333H12.2222V15.5556H4.44444Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
