import Image from './Image';

const TopBar = () => {
  const bgImage = "url('/images/shiny_bar.svg')";

  return (
    <div
      className='hidden md:flex gap-x-2 items-center justify-center p-2 shadow-lg backdrop-blur-lg bg-no-repeat bg-cover'
      style={{ backgroundImage: bgImage }}
    >
      <span>🚀</span>
      <span>Just launched my landing page website. check it out :</span>
      <a
        href='https://aulianza.com'
        target='_blank'
        className='ml-0.5 underline'
      >
        aulianza.com
      </a>
      <Image
        src='/images/dot_new_animated.svg'
        width={35}
        height={35}
        alt='new'
      />
    </div>
  );
};

export default TopBar;
