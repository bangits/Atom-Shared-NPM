import { css } from 'styled-system/css';
import { FormCols } from '../formCols';
import {
  FormViewFieldCustom,
  FormViewFieldDefault,
  FormViewFieldTag,
  FormViewFieldTagWithImage,
  FormViewFieldsType,
  FormViewFieldBase
} from './FormViewFieldsType';
import { ListViewMore, Tag, TagWithImage } from '@atom/design-system';

export const FormViewFields = ({ fields }: { fields: FormViewFieldsType[] }) => {
  const wrapperStyles = css({ padding: '1rem 0', display: 'flex', flexDir: 'column' });

  const titleStyles = css({
    color: '#8ea6c1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1.2rem',
    wordBreak: 'break-all',
    textAlign: 'left',
    marginBottom: '0.5rem'
  });

  const defaultValueStyles = css({
    color: '#505d6e',
    fontSize: '1.6rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  });

  return (
    <div className={css({ display: 'flex', flexWrap: 'wrap' })}>
      {fields.map((field) => {
        let defaultVariant: FormViewFieldDefault & FormViewFieldBase = null;
        let tagVariant: FormViewFieldTag & FormViewFieldBase = null;
        let tagWithImageVariant: FormViewFieldTagWithImage & FormViewFieldBase = null;
        let customVariant: FormViewFieldCustom & FormViewFieldBase = null;

        const count = () => {
          if (field.variant === 'tag' || field.variant === 'tag-with-image') {
            return field.showCount && field.value?.length ? `(${field.value.length})` : '';
          }
          return '';
        };

        switch (field.variant) {
          case 'default':
            defaultVariant = field;
            return (
              <FormCols cols={defaultVariant.cols}>
                <div className={wrapperStyles}>
                  <span className={titleStyles}>{defaultVariant.title}</span>
                  <span className={defaultValueStyles}>{defaultVariant.value || defaultVariant.noDataText}</span>
                </div>
              </FormCols>
            );
          case 'tag':
            tagVariant = field;
            return (
              <FormCols cols={tagVariant.cols}>
                <div className={wrapperStyles}>
                  <span className={titleStyles}>
                    {tagVariant.title}
                    {count()}
                  </span>
                  <ListViewMore>
                    {!tagVariant.value.length ? (
                      <span className={css({})}>{tagVariant.noDataText}</span>
                    ) : (
                      tagVariant.value?.map?.((o, index) => <Tag title={o} key={index} />)
                    )}
                  </ListViewMore>
                </div>
              </FormCols>
            );
          case 'tag-with-image':
            tagWithImageVariant = field;
            return (
              <FormCols cols={tagWithImageVariant.cols}>
                <div className={wrapperStyles}>
                  <span className={titleStyles}>
                    {tagWithImageVariant.title}
                    {count()}
                  </span>
                  <ListViewMore>
                    {!tagWithImageVariant.value.length ? (
                      <span className={css({})}>{tagWithImageVariant.noDataText}</span>
                    ) : (
                      tagWithImageVariant.value?.map?.((tagOptions) => <TagWithImage {...tagOptions} />)
                    )}
                  </ListViewMore>
                </div>
              </FormCols>
            );
          case 'custom':
            customVariant = field;
            return (
              <FormCols cols={customVariant.cols}>
                <div className={wrapperStyles}>
                  <span className={titleStyles}>{customVariant.title}</span>
                  {customVariant.component}
                </div>
              </FormCols>
            );
        }
      })}
    </div>
  );
};
