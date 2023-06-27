const AiLoading = () => {
  return (
    <div className='flex gap-3 items-center justify-center'>
      <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-neutral-400'></div>
      <div className='dark:text-neutral-400 animate-pulse'>
        AI is processing...
      </div>
    </div>
  );
};

export default AiLoading;
