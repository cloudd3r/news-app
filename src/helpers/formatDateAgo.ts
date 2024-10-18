export const formatDateAgo = (date: string) => {
  const now = new Date();
  const dateAgo = new Date(date);
  const secondsPast = (now.getTime() - dateAgo.getTime()) / 1000;
  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)}s ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)}m ago`;
  }
  if (secondsPast <= 86400) {
    return `${Math.floor(secondsPast / 3600)}h ago`;
  }
  if (secondsPast > 86400) {
    const day = Math.floor(secondsPast / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
