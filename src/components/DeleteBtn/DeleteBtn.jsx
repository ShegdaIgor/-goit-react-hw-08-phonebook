import PropTypes from 'prop-types';
import css from './DeleteBtn.module.css';
import { Button } from '@chakra-ui/react';

export const DeleteBtn = ({ id, actionText, onDeleteContact }) => {
  return (
    <Button
      type="button"
      colorScheme="red"
      size="xs"
      className={css.buttonOnDelete}
      onClick={() => onDeleteContact(id)}
    >
      {actionText}
    </Button>
  );
};

DeleteBtn.propTypes = {
  actionText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
