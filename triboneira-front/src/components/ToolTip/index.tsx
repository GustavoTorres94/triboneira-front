import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToolTipProps } from '../../types';
import styles from './ToolTip.module.css';

function ToolTipComponet({
  userName,
  gameName,
  title,
  type,
  viewerCount,
}: ToolTipProps) {
  return (
    <div className={ styles.toolTipContainer }>
      <div className={ styles.streamerContainer }>
        <p>{userName}</p>
        <span> - </span>
        <p>{gameName}</p>
      </div>
      <div className={ styles.titleContainer }>
        <p>
          {title}
        </p>
      </div>
      <div className={ styles.infoContainer }>
        <p>
          {type}
        </p>
        <FontAwesomeIcon icon={ faUser } />
        <p>{`${viewerCount} viewers`}</p>
      </div>
    </div>
  );
}

export default ToolTipComponet;
