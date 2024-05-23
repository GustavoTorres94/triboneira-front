import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';
import StreamerCard from '../../components/StreamerCard';
import infoData from '../../utils/infoData';
import styles from './GenericAbout.module.css';

function GenericAbout() {
  const { data } = useSelector((state: any) => state.userStreams);
  const { streamName } = useParams<{ streamName: string }>();

  const filteredData = data
    .filter((streamer: any) => streamer.display_name !== streamName);

  const [{ display_name }] = data
    .filter((streamer: any) => streamer.display_name === streamName);

  const restOfCardInfo = infoData.map((info) => info[display_name]);
  const { name,
    birthDate,
    facebook,
    instagram,
    twitch,
    twitter,
    youtube,
    tiktok,
    profileImg,
  } = restOfCardInfo[0];

  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.cardContainer }>
        <StreamerCard streamer={ filteredData } />
      </div>
      <div className={ styles.infoContainer }>
        <InfoCard
          img={ profileImg }
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
      </div>
    </div>
  );
}

export default GenericAbout;
