import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Mate.scss';

const TeamMate = ({
  id,
  description,
  image,
  link,
  name,
  position,
}) => (
  <div className={styles.Root}>
    <div className={styles.Left}>
      <img
        alt={name}
        className={styles.Image}
        src={image}
      />
    </div>

    <div className={styles.Right}>
      <div className={styles.Name}>
        <FormattedMessage
          id={`team.${id}.name`}
          defaultMessage="Name"
        />

        <a
          className={styles.Link}
          href={link}
          target="_blank"
        />
      </div>

      <div className={styles.Position}>
        <FormattedMessage
          id={`team.${id}.position`}
          defaultMessage="Position"
        />
      </div>

      <div className={styles.Description}>
        <FormattedMessage
          id={`team.${id}.description`}
          defaultMessage="Description"
        />
      </div>
    </div>
  </div>
)

export default TeamMate;
