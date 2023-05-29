import { useTranslation } from '@/view';
import { IMainContext, MainContextProvider } from '@atom/design-system';
import { FC, useCallback } from 'react';

const DesignSystemProvider: FC = ({ children }) => {
  const t = useTranslation();

  const getViewMoreLabel = useCallback<IMainContext['getViewMoreLabel']>(
    (count) => `${t.get('viewMore')}(+${count})`,
    [t]
  );

  return (
    <MainContextProvider getViewMoreLabel={getViewMoreLabel} viewLessLabel={t.get('viewLess')}>
      {children}
    </MainContextProvider>
  );
};

export default DesignSystemProvider;
