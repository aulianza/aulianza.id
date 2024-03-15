import { FiAlertTriangle as InfoIcon } from 'react-icons/fi';

const ChatAlertInfo = () => {
  return (
    <div className='-mt-7 mb-5 flex items-center gap-2 rounded-b-md bg-yellow-100 px-3 py-2 text-yellow-900'>
      <InfoIcon />
      <span className='text-sm '>
        Messages that you have sent cannot be changed or deleted. Type wisely.
      </span>
    </div>
  );
};

export default ChatAlertInfo;
