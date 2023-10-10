import { css, cx } from 'styled-system/css';
import { FormColsType, FormColsValue } from './ColsTypes';
import { ReactNode, useMemo } from 'react';

export const FormCols = ({ cols, children }: { cols: FormColsType; children: ReactNode }) => {
  const colsStyles: Record<FormColsValue, string> = useMemo(
    () => ({
      4: css({ width: '4/12' }),
      6: css({ width: '6/12' }),
      8: css({ width: '8/12' }),
      10: css({ width: '10/12' }),
      12: css({ width: '100%' })
    }),
    []
  );

  return (
    <>
      {typeof cols === 'number' && (
        <div className={cx(colsStyles[cols], css({ padding: '0 0.8rem', boxSizing: 'border-box' }))}>{children}</div>
      )}
      {typeof cols !== 'number' && cols.ocupyAll && (
        <div className={css({ width: '100%' })}>
          <div className={cx(colsStyles[cols.value], css({ padding: '0 0.8rem', boxSizing: 'border-box' }))}>
            {children}
          </div>
        </div>
      )}
      {typeof cols !== 'number' && !cols.ocupyAll && (
        <div className={cx(colsStyles[cols.value], css({ padding: '0 0.8rem', boxSizing: 'border-box' }))}>
          {children}
        </div>
      )}
    </>
  );
};
