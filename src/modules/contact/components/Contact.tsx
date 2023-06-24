import { ReactNode } from 'react';
import { FaTelegramPlane as TelegramIcon } from 'react-icons/fa';
import { HiOutlineMail as EmailIcon } from 'react-icons/hi';

import Button from '@/common/components/elements/Button';

const CONTACTS = [
  {
    title: 'hello@aulianza.id',
    icon: <EmailIcon size={18} />,
    link: 'mailto:hello@aulianza.id',
  },
  {
    title: 'Telegram',
    icon: <TelegramIcon size={18} />,
    link: 'https://t.me/aulianza',
  },
];

interface ContactProps {
  title: string;
  icon: ReactNode;
  link: string;
}

const Contact = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <section className='space-y-5'>
      <p className='dark:text-neutral-300'>
        You can reach out to me directly by sending an email, texting on
        Telegram, or connecting on social media.
      </p>
      <div className='flex gap-3'>
        {CONTACTS?.map((contact: ContactProps, index: number) => (
          <Button
            key={index}
            onClick={() => handleAction(contact?.link)}
            icon={contact?.icon}
          >
            {contact?.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Contact;
