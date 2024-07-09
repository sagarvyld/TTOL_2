import React from "react";
import './t.css'
import useDynamicMarginBottom from './useDynamicMarginBottom';
const RedRectangel = ({ text = "pokemon is the greatest show i ever watch. My favourite pokemon in Infernape", isTrue = false }) => {
    const { ref, marginBottom } = useDynamicMarginBottom(text, "w_p");
    return (
    <div className="Lie_rectangel">
         <p className="w_p" ref={ref} style={{ color: 'white', marginBottom: `${marginBottom}px` }}>{text}</p>
      <svg
        width="147"
        height="172"
        viewBox="0 0 147 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_251_8176)">
          <rect width="147" height="172" rx="12" fill="#273343" />
          <mask id="path-4-inside-1_251_8176" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 6C17 4.95359 17.7832 4 18.8296 4H127.17C128.217 4 129 4.95359 129 6C129 12.0751 133.925 17 140 17C140.132 17 140.263 16.9977 140.394 16.9931C141.72 16.9464 143 17.9035 143 19.2301V152.77C143 154.096 141.72 155.054 140.394 155.007C140.263 155.002 140.132 155 140 155C133.925 155 129 159.925 129 166C129 167.046 128.217 168 127.17 168H18.8296C17.7832 168 17 167.046 17 166C17 159.925 12.0751 155 6 155C4.95358 155 4 154.217 4 153.17V18.8296C4 17.7832 4.95359 17 6 17C12.0751 17 17 12.0751 17 6Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 6C17 4.95359 17.7832 4 18.8296 4H127.17C128.217 4 129 4.95359 129 6C129 12.0751 133.925 17 140 17C140.132 17 140.263 16.9977 140.394 16.9931C141.72 16.9464 143 17.9035 143 19.2301V152.77C143 154.096 141.72 155.054 140.394 155.007C140.263 155.002 140.132 155 140 155C133.925 155 129 159.925 129 166C129 167.046 128.217 168 127.17 168H18.8296C17.7832 168 17 167.046 17 166C17 159.925 12.0751 155 6 155C4.95358 155 4 154.217 4 153.17V18.8296C4 17.7832 4.95359 17 6 17C12.0751 17 17 12.0751 17 6Z"
            fill="#1D2939"
          />
          <path
            d="M140.394 16.9931L140.376 16.4934L140.394 16.9931ZM140.394 155.007L140.376 155.507L140.394 155.007ZM127.17 3.5H18.8296V4.5H127.17V3.5ZM140 16.5C134.201 16.5 129.5 11.799 129.5 6H128.5C128.5 12.3513 133.649 17.5 140 17.5V16.5ZM140.376 16.4934C140.251 16.4978 140.126 16.5 140 16.5V17.5C140.138 17.5 140.275 17.4976 140.411 17.4928L140.376 16.4934ZM143.5 152.77V19.2301H142.5V152.77H143.5ZM140 155.5C140.126 155.5 140.251 155.502 140.376 155.507L140.411 154.507C140.275 154.502 140.138 154.5 140 154.5V155.5ZM129.5 166C129.5 160.201 134.201 155.5 140 155.5V154.5C133.649 154.5 128.5 159.649 128.5 166H129.5ZM18.8296 168.5H127.17V167.5H18.8296V168.5ZM6 155.5C11.799 155.5 16.5 160.201 16.5 166H17.5C17.5 159.649 12.3513 154.5 6 154.5V155.5ZM3.5 18.8296V153.17H4.5V18.8296H3.5ZM16.5 6C16.5 11.799 11.799 16.5 6 16.5V17.5C12.3513 17.5 17.5 12.3513 17.5 6H16.5ZM4.5 18.8296C4.5 18.1152 5.17035 17.5 6 17.5V16.5C4.73682 16.5 3.5 17.4512 3.5 18.8296H4.5ZM18.8296 167.5C18.1152 167.5 17.5 166.83 17.5 166H16.5C16.5 167.263 17.4512 168.5 18.8296 168.5V167.5ZM128.5 166C128.5 166.83 127.885 167.5 127.17 167.5V168.5C128.549 168.5 129.5 167.263 129.5 166H128.5ZM140.411 17.4928C141.534 17.4533 142.5 18.2602 142.5 19.2301H143.5C143.5 17.5468 141.905 16.4396 140.376 16.4934L140.411 17.4928ZM6 154.5C5.17035 154.5 4.5 153.885 4.5 153.17H3.5C3.5 154.549 4.73682 155.5 6 155.5V154.5ZM18.8296 3.5C17.4512 3.5 16.5 4.73682 16.5 6H17.5C17.5 5.17035 18.1152 4.5 18.8296 4.5V3.5ZM142.5 152.77C142.5 153.74 141.534 154.547 140.411 154.507L140.376 155.507C141.905 155.56 143.5 154.453 143.5 152.77H142.5ZM127.17 4.5C127.885 4.5 128.5 5.17035 128.5 6H129.5C129.5 4.73683 128.549 3.5 127.17 3.5V4.5Z"
            fill="#526175"
            mask="url(#path-4-inside-1_251_8176)"
          />
          <g clip-path="url(#clip1_251_8176)">
            <path
              d="M76.5399 39.5902L76.9699 68.6302L87.7599 57.2702C89.7799 55.1502 93.0899 54.9402 95.3599 56.7902C97.8599 58.8402 98.1099 62.5702 95.9099 64.9302L86.1199 75.4402L113.08 74.4702C117.39 74.3102 120.99 77.7402 121.04 82.0502C121.09 85.9802 118.16 89.3202 114.26 89.7802L91.0799 92.5202L98.5699 100.32C101.23 103.09 101.5 107.38 99.2199 110.46C96.4999 114.13 91.2399 114.72 87.7699 111.75L80.9399 105.9L79.4699 131.8C79.2299 136.02 75.7899 139.34 71.5699 139.43C67.1499 139.53 63.4699 136.06 63.3099 131.64L62.2299 102.76L50.7499 112.76C48.3199 114.88 44.6499 114.72 42.4099 112.39C40.1499 110.04 40.1499 106.32 42.4199 103.97L55.1599 90.8302L32.6299 92.0902C28.6399 92.3102 25.2299 89.2602 25.0099 85.2802C24.7999 81.3801 27.7199 78.0202 31.5999 77.6902L53.2199 75.8302L43.4099 67.3402C40.6899 64.9802 40.5799 60.7902 43.1899 58.3002C45.5199 56.0702 49.1799 56.0402 51.5499 58.2302L62.3199 68.1602L61.1299 40.0302C60.9499 35.5902 64.5499 31.9102 68.9999 32.0002C73.1499 32.0902 76.4799 35.4402 76.5499 39.5902H76.5399Z"
              fill="#273343"
            />
          </g>
         
          <path
            d="M27.5 52C27.5 47.5817 31.0817 44 35.5 44H112.5C116.918 44 120.5 47.5817 120.5 52C120.5 56.4183 116.918 60 112.5 60H35.5C31.0817 60 27.5 56.4183 27.5 52Z"
            fill="#FF4567"
          />
          <path
            d="M38.7808 48V48.88H36.7108V55H35.7908V48.88H33.7308V48H38.7808ZM39.7976 50.84C40.1176 50.14 40.7276 49.91 41.3576 49.91V50.82C40.6076 50.79 39.7976 51.17 39.7976 52.35V55H38.9276V50H39.7976V50.84ZM45.6588 50H46.5288V55H45.6588V54.28C45.2888 54.87 44.7388 55.13 44.0388 55.13C42.8688 55.13 42.0988 54.35 42.0988 53.07V50H42.9688V53.02C42.9688 53.84 43.4388 54.3 44.2088 54.3C45.0088 54.3 45.6588 53.83 45.6588 52.65V50ZM50.5734 50.84H49.2434V53.55C49.2434 54.31 49.6834 54.26 50.5734 54.22V55C49.0734 55.2 48.3734 54.8 48.3734 53.55V50.84H47.3834V50H48.3734V48.86L49.2434 48.6V50H50.5734V50.84ZM54.0934 49.87C55.2634 49.87 56.0334 50.65 56.0334 51.93V55H55.1634V51.98C55.1634 51.16 54.6934 50.7 53.9234 50.7C53.1234 50.7 52.4734 51.17 52.4734 52.35V55H51.6034V48H52.4734V50.72C52.8434 50.13 53.3934 49.87 54.0934 49.87ZM57.7979 51.18C57.4379 51.18 57.1479 50.89 57.1479 50.53C57.1479 50.17 57.4379 49.88 57.7979 49.88C58.1679 49.88 58.4479 50.17 58.4479 50.53C58.4479 50.89 58.1679 51.18 57.7979 51.18ZM57.7979 55.11C57.4379 55.11 57.1479 54.82 57.1479 54.46C57.1479 54.1 57.4379 53.81 57.7979 53.81C58.1679 53.81 58.4479 54.1 58.4479 54.46C58.4479 54.82 58.1679 55.11 57.7979 55.11ZM65.6695 50H66.5995L64.5595 55.31C64.1395 56.43 63.3595 57.07 62.3395 57V56.19C63.0095 56.24 63.4295 55.83 63.6895 55.17L63.7795 54.98L61.5995 50H62.5295L64.2295 53.92L65.6695 50ZM69.4807 55.13C68.0207 55.13 66.8507 53.98 66.8507 52.5C66.8507 51.02 68.0207 49.87 69.4807 49.87C70.9407 49.87 72.1207 51.02 72.1207 52.5C72.1207 53.98 70.9407 55.13 69.4807 55.13ZM69.4807 54.28C70.4807 54.28 71.2507 53.51 71.2507 52.5C71.2507 51.49 70.4807 50.72 69.4807 50.72C68.4907 50.72 67.7207 51.49 67.7207 52.5C67.7207 53.51 68.4907 54.28 69.4807 54.28ZM76.5963 50H77.4663V55H76.5963V54.28C76.2263 54.87 75.6763 55.13 74.9763 55.13C73.8063 55.13 73.0363 54.35 73.0363 53.07V50H73.9063V53.02C73.9063 53.84 74.3763 54.3 75.1463 54.3C75.9463 54.3 76.5963 53.83 76.5963 52.65V50ZM79.6609 50.84C79.9809 50.14 80.5909 49.91 81.2209 49.91V50.82C80.4709 50.79 79.6609 51.17 79.6609 52.35V55H78.7909V50H79.6609V50.84ZM86.9221 55.13C85.4121 55.13 84.2921 53.98 84.2921 52.5C84.2921 51.02 85.4121 49.87 86.9221 49.87C87.9121 49.87 88.7521 50.39 89.1321 51.18L88.4021 51.6C88.1521 51.07 87.5921 50.72 86.9221 50.72C85.9221 50.72 85.1621 51.49 85.1621 52.5C85.1621 53.5 85.9221 54.27 86.9221 54.27C87.6021 54.27 88.1521 53.92 88.4321 53.4L89.1721 53.83C88.7521 54.61 87.9021 55.13 86.9221 55.13ZM92.5211 49.87C93.6911 49.87 94.4611 50.65 94.4611 51.93V55H93.5911V51.98C93.5911 51.16 93.1211 50.7 92.3511 50.7C91.5511 50.7 90.9011 51.17 90.9011 52.35V55H90.0311V48H90.9011V50.72C91.2711 50.13 91.8211 49.87 92.5211 49.87ZM98.0256 55.13C96.5656 55.13 95.3956 53.98 95.3956 52.5C95.3956 51.02 96.5656 49.87 98.0256 49.87C99.4856 49.87 100.666 51.02 100.666 52.5C100.666 53.98 99.4856 55.13 98.0256 55.13ZM98.0256 54.28C99.0256 54.28 99.7956 53.51 99.7956 52.5C99.7956 51.49 99.0256 50.72 98.0256 50.72C97.0356 50.72 96.2656 51.49 96.2656 52.5C96.2656 53.51 97.0356 54.28 98.0256 54.28ZM102.131 49.09C101.801 49.09 101.541 48.83 101.541 48.51C101.541 48.19 101.801 47.92 102.131 47.92C102.451 47.92 102.711 48.19 102.711 48.51C102.711 48.83 102.451 49.09 102.131 49.09ZM101.691 55V50H102.561V55H101.691ZM106.239 55.13C104.729 55.13 103.609 53.98 103.609 52.5C103.609 51.02 104.729 49.87 106.239 49.87C107.229 49.87 108.069 50.39 108.449 51.18L107.719 51.6C107.469 51.07 106.909 50.72 106.239 50.72C105.239 50.72 104.479 51.49 104.479 52.5C104.479 53.5 105.239 54.27 106.239 54.27C106.919 54.27 107.469 53.92 107.749 53.4L108.489 53.83C108.069 54.61 107.219 55.13 106.239 55.13ZM109.889 52.9C110.059 53.8 110.769 54.31 111.699 54.31C112.389 54.31 112.889 53.99 113.139 53.58L113.879 54C113.439 54.68 112.679 55.13 111.679 55.13C110.069 55.13 108.999 54 108.999 52.5C108.999 51.02 110.059 49.87 111.619 49.87C113.129 49.87 114.109 51.11 114.109 52.51C114.109 52.64 114.099 52.77 114.079 52.9H109.889ZM111.619 50.69C110.679 50.69 110.029 51.27 109.889 52.14H113.229C113.079 51.15 112.369 50.69 111.619 50.69Z"
            fill="white"
          />
        </g>
      
        <rect
          x="0.5"
          y="0.5"
          width="146"
          height="171"
          rx="11.5"
          stroke="#FF1C45"
        />
        <defs>
          <clipPath id="clip0_251_8176">
            <rect width="147" height="172" rx="12" fill="white" />
          </clipPath>
          <clipPath id="clip1_251_8176">
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

export default RedRectangel;
