import { useMemo } from 'react';
import { Button } from '@atom/design-system';
import { css, cx } from 'styled-system/css';
import { FormButtonActionsTypes } from './FormButtonActionsTypes';
import { useTranslation } from '@/atom-common';

export const FormButtonActions = ({
  submitProps,
  cancelProps,
  removeCancel,
  alignment,
  component
}: FormButtonActionsTypes) => {
  const t = useTranslation();

  const alignmentStyles = useMemo(
    () => ({
      start: css({ justifyContent: 'flex-start' }),
      center: css({ justifyContent: 'center' }),
      end: css({ justifyContent: 'flex-end' })
    }),
    []
  );

  return (
    <>
      {component && component()}
      {!component && (
        <div
          className={cx(
            css({ display: 'flex', gap: '1rem', marginTop: '3rem' }),
            alignmentStyles[alignment || 'center']
          )}>
          {!removeCancel && <Button children={t.get('close')} variant='ghost' type='button' {...cancelProps} />}
          <Button children={t.get('save')} {...submitProps} />
        </div>
      )}
    </>
  );
};
