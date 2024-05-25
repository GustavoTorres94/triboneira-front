/* eslint-disable @typescript-eslint/naming-convention */
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getLocalStorage } from '../../utils/localStorage';
import { getAllUsersStreams } from '../../redux/actions';
import {
  UserStreamType,
  AppDispatch,
  InfoCardProps,
  CustonUserStreamerTypes,
} from '../../types';
import InfoCard from '../../components/InfoCard';
import StreamerCard from '../../components/StreamerCard';
import infoData from '../../utils/infoData';
import styles from './GenericAbout.module.css';

function GenericAbout() {
  const { data } = useSelector((state: any) => state.userStreams);
  const dispatch = useDispatch<AppDispatch>();
  const { streamName } = useParams<{ streamName: string }>();
  const [backup, setBackup] = useState<UserStreamType[]>(
    getLocalStorage('userStreams') || [],
  );

  useEffect(() => {
    if (data.length === 0) {
      const localData = getLocalStorage('userStreams');
      if (localData && localData.length > 0) {
        setBackup(localData);
      } else {
        dispatch(getAllUsersStreams());
      }
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      setBackup(data);
    }
  }, [data]);

  const filteredData = data.length > 0
    ? data
      .filter((streamer: CustonUserStreamerTypes) => streamer.display_name !== streamName)
    : backup
      .filter((streamer: UserStreamType) => streamer.display_name !== streamName);

  const streamerBackup = data
    .find((streamer: CustonUserStreamerTypes) => streamer.display_name === streamName)
    || backup.find((streamer: UserStreamType) => streamer.display_name === streamName);

  if (!streamerBackup) {
    return <div>Loading...</div>;
  }
  const { display_name, description } = streamerBackup;

  const restOfCardInfo: InfoCardProps[] = infoData
    .map((info) => info[display_name] || {});
  const { name,
    birthDate,
    facebook,
    instagram,
    twitch,
    twitter,
    youtube,
    tiktok,
    profileImg,
    history,
  } = restOfCardInfo[0];

  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.cardContainer }>
        <StreamerCard
          streamer={ filteredData }
        />
      </div>
      <div className={ styles.infoContainer }>
        <InfoCard
          profileImg={ profileImg }
          name={ name }
          nickname={ display_name }
          birthDate={ birthDate }
          facebook={ facebook }
          instagram={ instagram }
          twitch={ twitch }
          twitter={ twitter }
          youtube={ youtube }
          tiktok={ tiktok }
        />
        <div className={ styles.textContainer }>
          <div className={ styles.intro }>
            <p>{description}</p>
          </div>
          <div className={ styles.aboutStreamer }>
            <p>{history}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenericAbout;
