import { useDispatch, useSelector } from 'react-redux/es/exports';
import { filterContact } from 'redux/sliceFilter';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);

    const chahgeFilter = e => {
        dispatch(filterContact(e.currentTarget.value));
    }

    return (
        <div className={css.filter_box}>
            <label>
                <span className={css.filter_tittle}>Find contacts by name</span>
                <input type="name" value={filter} onChange={chahgeFilter}
                    className={css.filter_input}
                />
            </label>
        </div>
    );
};

export default Filter;