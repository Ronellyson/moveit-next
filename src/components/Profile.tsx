import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQFQLiAEA4X6yA/profile-displayphoto-shrink_100_100/0/1593640853229?e=1619654400&v=beta&t=Gua-sCSskrZCMqxCYPD55pgxkvgMlwS_Jrfvp8uLZBs" alt="Ronellyson Júlio"/>
      <div>
        <strong>Ronellyson Júlio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}