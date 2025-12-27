export const navigateTo = (page: string, serviceId?: string) => {
  if (serviceId) {
    window.location.hash = `${page}/${serviceId}`;
  } else {
    window.location.hash = page;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getCurrentPage = (): { page: string; param?: string } => {
  const hash = window.location.hash.slice(1) || 'home';
  const parts = hash.split('/');
  return {
    page: parts[0],
    param: parts[1]
  };
};
