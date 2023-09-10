import Image from './Image';

const TopBar = () => {
  const bgImage = "url('/images/shiny_bar.svg')";

  return (
    <div
      className='hidden md:flex gap-x-2 items-center justify-center p-2.5 shadow-lg backdrop-blur-lg bg-no-repeat bg-cover text-sm dark:text-neutral-400'
      style={{ backgroundImage: bgImage }}
    >
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
