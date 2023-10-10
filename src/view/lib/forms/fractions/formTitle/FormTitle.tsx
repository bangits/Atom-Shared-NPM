import { useMemo } from 'react';
import { Typography } from '@atom/design-system';
import { FormTitleTypes } from './FormTitletypes';
import { css, cx } from 'styled-system/css';

export const FormTitle = ({ text, titleProps, alignment }: FormTitleTypes) => {
  const alignmentStyles = useMemo(
    () => ({
      start: css({ justifyContent: 'flex-start' }),
      center: css({ justifyContent: 'center' }),
      end: css({ justifyContent: 'flex-end' })
    }),
    []
  );

  if (!text) return;

  return (
    <div
      className={cx(
        alignmentStyles[alignment || 'center'],
        css({ display: 'flex', marginBottom: '4rem', padding: '0 0.8rem' })
      )}>
      <Typography fontWeight={600} color='primary' variant='h3' {...titleProps}>
        {text}
      </Typography>
    </div>
  );
};
