import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
// import css from './FilterContact.module.css';
import { filterContacts } from 'redux/filterSlice';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterContact = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FormControl ml={130}>
      <div>
        <FormLabel mt={5}>Find contacts by Name</FormLabel>
        <Input
          type="text"
          name="filter"
          htmlSize={30}
          width="auto"
          placeholder="Find contacts by Name"
          onChange={handleFilterContact}
          value={filter}
        />
      </div>
    </FormControl>
  );
};
