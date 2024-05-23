import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { StreamerCardProps } from '../../types';
import styles from './StreamerCard.module.css';

function StreamerCard({ streamer }: StreamerCardProps) {
  return (
    <div className={ styles.container }>
      {
        streamer.map((s) => (
          <div className={ styles.card } key={ s.id }>
            <Tooltip title={ s.display_name } arrow>
              <Link
                to={
                  `/about/${s.display_name} `
               }
              >
                <img src={ s.profile_image_url } alt={ ` ${s.display_name} logo ` } />
              </Link>
            </Tooltip>
          </div>
        ))
      }
    </div>
  );
}

export default StreamerCard;
