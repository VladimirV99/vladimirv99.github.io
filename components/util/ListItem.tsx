import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

import type { ListItemData } from "@/types";

import styles from "@/styles/ListItem.module.scss";

function ListItem({ title, description, extra, date }: ListItemData) {
  return (
    <li>
      <div className={styles.item}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          {description && <p>{description}</p>}
          {extra && <p>{extra}</p>}
        </div>
        {date && (
          <p className={styles.date + " colored"}>
            <FontAwesomeIcon icon={faCalendarAlt} className="mr" /> {date}
          </p>
        )}
      </div>
    </li>
  );
}

export default ListItem;
