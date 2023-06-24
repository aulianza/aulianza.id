const Footer = () => {
  return (
    <footer className='relative w-[-webkit-fill-available] max-w-[790px] mx-8 py-8 bottom-0 border-t border-gray-300 dark:border-neutral-700 text-[15px] space-y-5 dark:text-neutral-400'>
      <div className='flex justify-between'>
        <div>© {new Date().getFullYear()}</div>
        <div>Built with Next.js</div>
      </div>
    </footer>
  );
};

export default Footer;
