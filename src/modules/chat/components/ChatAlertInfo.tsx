import { FiAlertTriangle as InfoIcon } from 'react-icons/fi';

const ChatAlertInfo = () => {
  return (
    <div className='flex items-center gap-2 bg-yellow-100 text-yellow-900 py-2 px-3 rounded-b-md mb-5 -mt-7'>
      <InfoIcon />
      <span className='text-sm '>
        Messages that you have sent cannot be changed or deleted. Type wisely.
      </span>
    </div>
  );
};

export default ChatAlertInfo;
