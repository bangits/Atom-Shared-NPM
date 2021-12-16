import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState(window.location);

  useEffect(() => {
    // @ts-expect-error Ignoring typescript becuase in window events they're not single-spa:before-routing-event
    window.addEventListener('single-spa:before-routing-event', (evt: { detail: { newUrl: string } }) =>
      setLocation({ ...window.location })
    );
  }, []);

  return location;
};
