import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllUsersStreams } from '../../redux/actions';
import { SideCardProps, UserStreamType, AppDispatch } from '../../types';
import ToolTipComponet from '../ToolTip';

import styles from './SideCard.module.css';

function SideCard({ streamer, stream }: SideCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const response = useSelector((state: any) => state.stream);
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const userStream = useSelector((state: any) => state.userStreams);

  useEffect(() => {
    dispatch(getAllUsersStreams());
  }, [dispatch]);

  useEffect(() => {
    const imagesApi = userStream.data.reduce((acc: any, e: UserStreamType) => {
      acc[e.display_name] = e.profile_image_url;
      return acc;
    }, {});
    setImages(imagesApi);
  }, [userStream]);

  return (
    <div>
      {response.isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <Tooltip
          key={ stream.streamerName }
          title={ <ToolTipComponet
            userName={ stream.streamerName }
            gameName={ stream.game }
            title={ stream.title }
            type={ stream.type }
            viewerCount={ stream.viewers }
          /> }
          placement="right"
        >
          <div className={ styles.sideCard }>
            <a
              href={ `https://www.twitch.tv/${stream.streamerName}` }
              target="_blank"
              rel="noreferrer"
              aria-label="streamer-link"
            >
              <img
                src={ images[stream.streamerName] }
                alt={ `${streamer} head-logo` }
              />
            </a>
          </div>
        </Tooltip>
      )}
    </div>
  );
}

export default SideCard;
