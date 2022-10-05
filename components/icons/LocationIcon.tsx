import { IconType } from './type/Icon.type';

const LocationIcon = ({
  className = 'h-[19px] w-[19.96px]',
  color = '',
}: IconType): JSX.Element => {
  return (
    <svg
      width='17'
      height='20'
      viewBox='0 0 17 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className} ${color || ''}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.25049 6.5C7.28549 6.5 6.50049 7.285 6.50049 8.251C6.50049 9.216 7.28549 10 8.25049 10C9.21549 10 10.0005 9.216 10.0005 8.251C10.0005 7.285 9.21549 6.5 8.25049 6.5ZM8.25049 11.5C6.45849 11.5 5.00049 10.043 5.00049 8.251C5.00049 6.458 6.45849 5 8.25049 5C10.0425 5 11.5005 6.458 11.5005 8.251C11.5005 10.043 10.0425 11.5 8.25049 11.5Z'
        fill='#8456EC'
      />
      <mask
        id='mask0_14_921'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='17'
        height='20'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 0H16.4995V19.5H0V0Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_14_921)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.24951 1.5C4.52751 1.5 1.49951 4.557 1.49951 8.313C1.49951 13.092 7.12351 17.748 8.24951 17.996C9.37551 17.747 14.9995 13.091 14.9995 8.313C14.9995 4.557 11.9715 1.5 8.24951 1.5ZM8.24951 19.5C6.45551 19.5 -0.000488281 13.948 -0.000488281 8.313C-0.000488281 3.729 3.70051 0 8.24951 0C12.7985 0 16.4995 3.729 16.4995 8.313C16.4995 13.948 10.0435 19.5 8.24951 19.5Z'
          fill='#8456EC'
        />
      </g>
    </svg>
  );
};

export default LocationIcon;
