import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filter } from 'redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filterQuery = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;    
    dispatch(filter(value));
  };
  return (
    <label className={css.formLabel}>
      Find contacts by name
      <input
        className={css.formInput}
        type="text"
        name="filter"
        value={filterQuery}
        onChange={handleFilterChange}
        placeholder="type your query here..."
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
