import { useAppSelector, useAppDispatch } from '../../hooks';
import { SortType } from '../../const';
import { changeSort } from '../../store/action';

type SortListProps = {
  onCloseList: () => void;
}

function SortList({onCloseList}: SortListProps): JSX.Element {
  const {sort} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onSortChangeHandler = (sortItem: string) => {
    dispatch(changeSort({sort: sortItem}));
    onCloseList();
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        Object.values(SortType).map((sortItem) => (
          <li
            key={sortItem}
            className={`places__option ${sortItem === sort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortChangeHandler(sortItem)}
          >
            {sortItem}
          </li>
        ))
      }
    </ul>
  );
}

export default SortList;
