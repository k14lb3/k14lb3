export const getDurationText = ({
  startDate,
  endDate = new Date(),
}: {
  startDate: Date;
  endDate?: Date;
}): string => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} yr${years !== 1 ? 's' : ''}`);
  }

  if (months > 0) {
    parts.push(`${months} mo${months !== 1 ? 's' : ''}`);
  }

  if (parts.length === 0) {
    parts.push('< 1 mo');
  }

  return parts.join(' ');
};
