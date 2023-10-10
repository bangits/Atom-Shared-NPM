import { css } from 'styled-system/css';
import { FormHeaderActionsType, FormHeaderType } from './FormHeaderActionsType';
import { useMemo } from 'react';
import { IconButton, Icons, Tooltip } from '@atom/design-system';
import { useTranslation } from '@/atom-common';
import { hstack, stack } from 'styled-system/patterns';

export const FormHeaderActions = <Model,>({
  title,
  tooltip,
  isEdit,
  editIconComponent,
  closeIconComponent,
  submitIconComponent,
  editIconTooltip,
  closeIconTooltip,
  submitIconTooltip,
  removeEditIcon,
  onClose,
  onEdit
}: FormHeaderActionsType<Model> & FormHeaderType) => {
  const t = useTranslation();

  const styles = useMemo(
    () => ({
      base: css({
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }),
      tooltip: css({ margin: '0 0 0 0.5rem' }),
      title: css({ paddingLeft: '0.5rem', color: '#505d6e', fontWeight: '500', fontSize: '1.7rem', margin: '0' }),
      actions: css({ display: 'flex' })
    }),
    []
  );

  return (
    <div className={styles.base}>
      <div className={hstack()}>
        <p className={styles.title}>{title}</p>
        {tooltip && (
          <Tooltip text={tooltip}>
            <Icons.InfoTooltipIcon className={styles.tooltip} width='1.5rem' height='1.5rem' />
          </Tooltip>
        )}
      </div>
      <div className={styles.actions}>
        {!isEdit &&
          !removeEditIcon &&
          (editIconComponent?.({ onEdit, tooltip: editIconTooltip }) || (
            <Tooltip showEvent='hover' text={editIconTooltip || t.get('edit')}>
              <IconButton onClick={onEdit} type='button' icon={<Icons.EditIcon />} />
            </Tooltip>
          ))}

        {isEdit && (
          <>
            <Tooltip showEvent='hover' text={submitIconTooltip || t.get('apply')}>
              {submitIconComponent?.({ tooltip: submitIconTooltip }) || (
                <IconButton type='submit' icon={<Icons.ApplyIcon />} />
              )}
            </Tooltip>

            <Tooltip showEvent='hover' text={closeIconTooltip || t.get('close')}>
              {closeIconComponent?.({ onClose, tooltip: closeIconTooltip }) || (
                <IconButton onClick={onClose} type='button' icon={<Icons.CloseIcon />} />
              )}
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};
