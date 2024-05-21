import { Tooltip } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { StreamerCardProps } from '../../types';
import styles from './StreamerCard.module.css';

function StreamerCard({ streamer }: StreamerCardProps) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className={ styles.container }>
      {
        streamer.map((s) => (
          <div className={ styles.card } key={ s.id }>
            <Tooltip title={ s.display_name } arrow>
              <Link
                to={
                id === s.id ? `/about/${s.id} ` : '/about'
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
