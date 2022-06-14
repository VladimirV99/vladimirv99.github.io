import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import styles from '@/styles/ListItem.module.scss';

function ListItem({ title, description, extra, date }) {
  return (
    <li>
      <div className={styles.item}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          {description && <p>{description}</p>}
          {extra && <p>{extra}</p>}
        </div>
        {date && (
          <p className={styles.date + ' colored'}>
            <FontAwesomeIcon icon={faCalendarAlt} className="mr" /> {date}
          </p>
        )}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  extra: PropTypes.string,
  date: PropTypes.string
};

export default ListItem;
