import type { FC, SVGProps } from 'react';

export const FeaturedArticleIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      role="img"
      {...props}
    >
      <rect x="0" y="0" width="48" height="48" rx="51" ry="51" fill="#000000"></rect>
      <g transform="translate(12 12) scale(0.5)">
        <path
          d="M46.144,18.071,31.463,15.938,24.9,2.635a1.04,1.04,0,0,0-1.793,0l-6.566,13.3L1.856,18.071A1,1,0,0,0,1.3,19.776L11.926,30.132,9.418,44.754a1,1,0,0,0,1.45,1.054L24,38.905l13.132,6.9a1,1,0,0,0,1.45-1.054L36.074,30.132,46.7,19.776a1,1,0,0,0-.555-1.705Z"
          fill="#ffffff"
        ></path>
      </g>
    </svg>
  );
};

export const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg fill="currentColor" role="img" viewBox="0 0 20 21" {...props}>
      <title>Arrow Right</title>
      <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
    </svg>
  );
};
