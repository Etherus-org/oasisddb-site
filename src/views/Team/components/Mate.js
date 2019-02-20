import React from 'react';

import styles from './Mate.scss';

const TeamMate = ({
  description,
  image,
  linkedin,
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
        {name}

        <a
          className={styles.Link}
          href={linkedin}
          target="_blank"
        />
      </div>

      <div className={styles.Position}>
        {position}
      </div>

      <div className={styles.Description}>
        {description}
      </div>
    </div>
  </div>
)

export default TeamMate;
