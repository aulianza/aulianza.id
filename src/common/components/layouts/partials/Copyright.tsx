const Copyright = () => {
  return (
    <div className='flex items-center gap-1 px-3 py-1  text-sm text-neutral-600 dark:text-neutral-600'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className='animate-pulse text-red-500'>❤</span>
      <span>by</span>
      <a
        href='http://github.com/aulianza/aulianza.id'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='cursor-pointer hover:dark:text-neutral-400'>
          aulianza
        </span>
      </a>
    </div>
  );
};

export default Copyright;
