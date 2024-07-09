import React from "react";
import './t.css'
const LieRectangel = ({ text = "I've accidentally texted a meme to my boss" ,isTrue=false }) => {
  return (
    <div className="Lie_rectangel">
              <p className="w_p" style={{color:'white'}}>{text}</p>
      <svg
        width="147"
        height="172"
        viewBox="0 0 147 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_251_7555)">
          <rect width="147" height="172" rx="12" fill="#273343" />
          <mask id="path-4-inside-1_251_7555" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 6C17 4.95359 17.7832 4 18.8296 4H127.17C128.217 4 129 4.95359 129 6C129 12.0751 133.925 17 140 17C140.132 17 140.263 16.9977 140.394 16.9931C141.72 16.9464 143 17.9035 143 19.2301V152.77C143 154.096 141.72 155.054 140.394 155.007C140.263 155.002 140.132 155 140 155C133.925 155 129 159.925 129 166C129 167.046 128.217 168 127.17 168H18.8296C17.7832 168 17 167.046 17 166C17 159.925 12.0751 155 6 155C4.95358 155 4 154.217 4 153.17V18.8296C4 17.7832 4.95359 17 6 17C12.0751 17 17 12.0751 17 6Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 6C17 4.95359 17.7832 4 18.8296 4H127.17C128.217 4 129 4.95359 129 6C129 12.0751 133.925 17 140 17C140.132 17 140.263 16.9977 140.394 16.9931C141.72 16.9464 143 17.9035 143 19.2301V152.77C143 154.096 141.72 155.054 140.394 155.007C140.263 155.002 140.132 155 140 155C133.925 155 129 159.925 129 166C129 167.046 128.217 168 127.17 168H18.8296C17.7832 168 17 167.046 17 166C17 159.925 12.0751 155 6 155C4.95358 155 4 154.217 4 153.17V18.8296C4 17.7832 4.95359 17 6 17C12.0751 17 17 12.0751 17 6Z"
            fill="#1D2939"
          />
          <path
            d="M140.394 16.9931L140.376 16.4934L140.394 16.9931ZM140.394 155.007L140.376 155.507L140.394 155.007ZM127.17 3.5H18.8296V4.5H127.17V3.5ZM140 16.5C134.201 16.5 129.5 11.799 129.5 6H128.5C128.5 12.3513 133.649 17.5 140 17.5V16.5ZM140.376 16.4934C140.251 16.4978 140.126 16.5 140 16.5V17.5C140.138 17.5 140.275 17.4976 140.411 17.4928L140.376 16.4934ZM143.5 152.77V19.2301H142.5V152.77H143.5ZM140 155.5C140.126 155.5 140.251 155.502 140.376 155.507L140.411 154.507C140.275 154.502 140.138 154.5 140 154.5V155.5ZM129.5 166C129.5 160.201 134.201 155.5 140 155.5V154.5C133.649 154.5 128.5 159.649 128.5 166H129.5ZM18.8296 168.5H127.17V167.5H18.8296V168.5ZM6 155.5C11.799 155.5 16.5 160.201 16.5 166H17.5C17.5 159.649 12.3513 154.5 6 154.5V155.5ZM3.5 18.8296V153.17H4.5V18.8296H3.5ZM16.5 6C16.5 11.799 11.799 16.5 6 16.5V17.5C12.3513 17.5 17.5 12.3513 17.5 6H16.5ZM4.5 18.8296C4.5 18.1152 5.17035 17.5 6 17.5V16.5C4.73682 16.5 3.5 17.4512 3.5 18.8296H4.5ZM18.8296 167.5C18.1152 167.5 17.5 166.83 17.5 166H16.5C16.5 167.263 17.4512 168.5 18.8296 168.5V167.5ZM128.5 166C128.5 166.83 127.885 167.5 127.17 167.5V168.5C128.549 168.5 129.5 167.263 129.5 166H128.5ZM140.411 17.4928C141.534 17.4533 142.5 18.2602 142.5 19.2301H143.5C143.5 17.5468 141.905 16.4396 140.376 16.4934L140.411 17.4928ZM6 154.5C5.17035 154.5 4.5 153.885 4.5 153.17H3.5C3.5 154.549 4.73682 155.5 6 155.5V154.5ZM18.8296 3.5C17.4512 3.5 16.5 4.73682 16.5 6H17.5C17.5 5.17035 18.1152 4.5 18.8296 4.5V3.5ZM142.5 152.77C142.5 153.74 141.534 154.547 140.411 154.507L140.376 155.507C141.905 155.56 143.5 154.453 143.5 152.77H142.5ZM127.17 4.5C127.885 4.5 128.5 5.17035 128.5 6H129.5C129.5 4.73683 128.549 3.5 127.17 3.5V4.5Z"
            fill="#526175"
            mask="url(#path-4-inside-1_251_7555)"
          />
          <g clipPath="url(#clip1_251_7555)">
            <path
              d="M76.5402 39.5902L76.9702 68.6302L87.7602 57.2702C89.7802 55.1502 93.0902 54.9402 95.3602 56.7902C97.8602 58.8402 98.1102 62.5702 95.9102 64.9302L86.1202 75.4402L113.08 74.4702C117.39 74.3102 120.99 77.7402 121.04 82.0502C121.09 85.9802 118.16 89.3202 114.26 89.7802L91.0802 92.5202L98.5702 100.32C101.23 103.09 101.5 107.38 99.2202 110.46C96.5002 114.13 91.2402 114.72 87.7702 111.75L80.9402 105.9L79.4702 131.8C79.2302 136.02 75.7902 139.34 71.5702 139.43C67.1502 139.53 63.4702 136.06 63.3102 131.64L62.2302 102.76L50.7502 112.76C48.3202 114.88 44.6502 114.72 42.4102 112.39C40.1502 110.04 40.1502 106.32 42.4202 103.97L55.1602 90.8302L32.6302 92.0902C28.6402 92.3102 25.2302 89.2602 25.0102 85.2802C24.8002 81.3801 27.7202 78.0202 31.6002 77.6902L53.2202 75.8302L43.4102 67.3402C40.6902 64.9802 40.5802 60.7902 43.1902 58.3002C45.5202 56.0702 49.1802 56.0402 51.5502 58.2302L62.3202 68.1602L61.1302 40.0302C60.9502 35.5902 64.5502 31.9102 69.0002 32.0002C73.1502 32.0902 76.4802 35.4402 76.5502 39.5902H76.5402Z"
              fill="#273343"
            />
          </g>
        </g>
      
        <rect
          x="0.5"
          y="0.5"
          width="146"
          height="171"
          rx="11.5"
          stroke="#526175"
        />
        <defs>
          <clipPath id="clip0_251_7555">
            <rect width="147" height="172" rx="12" fill="white" />
          </clipPath>
          <clipPath id="clip1_251_7555">
            <rect
              width="96.05"
              height="107.44"
              fill="white"
              transform="translate(25 32)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LieRectangel;
