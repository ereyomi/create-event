import { IconType } from './type/Icon.type';

const ChevronRight = ({
  className = 'h-[14px] w-[7px]',
  color = '',
}: IconType): JSX.Element => {
  return (
    <svg
      className={`${className} ${color || ''}`}
      viewBox='0 0 10 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.56763 1L8.56763 8L1.56763 15'
        stroke='#BDBDBD'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ChevronRight;
