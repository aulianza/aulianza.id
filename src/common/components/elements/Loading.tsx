import clsx from 'clsx';
import { HashLoader } from 'react-spinners';

type LoadingProps = {
  isFullScreen?: boolean;
  text?: string;
};

const Loading = ({ isFullScreen = false, text }: LoadingProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center space-y-5 p-40',
        isFullScreen && 'h-screen',
      )}
    >
      <HashLoader color='#36d7b7' />
      {text && <p className='pt-5 text-[#36d7b7]'>{text}</p>}
    </div>
  );
};

export default Loading;
