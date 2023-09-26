import Image from './Image';

const TopBar = () => {
  return (
    <div className='hidden xl:flex gap-x-2 items-center justify-center p-2.5 shadow-lg backdrop-blur-2xl bg-no-repeat bg-cover text-sm dark:text-neutral-300 dark:border-b dark:border-neutral-800'>
      <span>🚀</span>
      <span>Just launched my landing page website. check it out :</span>
      <a
        href='https://aulianza.com/?utm_source=aulianza.id&utm_medium=referral&ref=aulianza.id'
        target='_blank'
        className='ml-0.5 underline'
      >
        aulianza.com
      </a>
      <Image
        src='/images/dot_new_animated.svg'
        width={30}
        height={30}
        alt='new'
      />
    </div>
  );
};

export default TopBar;
