import styles from './ToolTip.module.css';

function ToolTipComponet() {
  return (
    <div className={ styles.toolTipContainer }>
      <div className={ styles.streamerContainer }>
        <p>Stream name</p>
        <span> - </span>
        <p>stream game</p>
      </div>
      <div className={ styles.titleContainer }>
        <p>
          stream title
        </p>
      </div>
      <div className={ styles.infoContainer }>
        <p>status |</p>
        <img src="src/assets/user-solid.svg" alt="user-solid-fontawesome" />
        <p>viewers</p>
      </div>
    </div>
  );
}

export default ToolTipComponet;
