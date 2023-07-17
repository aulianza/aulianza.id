import { id } from 'date-fns/locale';
import { format, utcToZonedTime } from 'date-fns-tz';

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);

export function formatDateFull(date: string): string {
  const d = utcToZonedTime(date, 'Asia/Jakarta');

  return format(d, 'iiiiii. do MMMM H:mm', {
    locale: id,
    timeZone: 'Asia/Jakarta',
  });
}
