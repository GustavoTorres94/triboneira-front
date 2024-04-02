import { Tooltip } from '@mui/material';
import styles from './SideCard.module.css';
import { SideCardProps } from '../../types';
import ToolTipComponet from '../ToolTip';

function SideCard({ image, streamer }: SideCardProps) {
  return (
    <Tooltip title={ <ToolTipComponet /> } placement="right">
      <div className={ styles.sideCard }>
        <img src={ image } alt={ `${streamer} head-logo` } />
      </div>
    </Tooltip>
  );
}

export default SideCard;
