export const useConverterTo24h = (time12h: string) => {
  if (!time12h && time12h.length <= 5) return '--:--';
  const [time, period] = time12h.split(' ');
  if (!period) return time12h;
  const [hours, minutes] = time.split(':');

  let hours24 = Number(hours);
  const minutes24 = Number(minutes);

  if (period.toLowerCase() === 'pm') {
    hours24 !== 12 && (hours24 += 12);
    hours24 === 12 && (hours24 = 0);
  } else if (period.toLowerCase() === 'am' && hours24 === 12) {
    hours24 = 0;
  }
  const time24h: [number, number] = [hours24, minutes24];
  return time24h;
};
