import { NavLink } from 'react-router-dom';
import FriendItem from './Friend/Friend';
import style from './Friends.module.css';

const FriendsBlock = (props) => {
  let friend = props.stateFriends.map ( (name) => <FriendItem name={name.name} />);

  return (
    <div className={style.friends}>
        <div className={style.title}>
          Friends
        </div>
        <div className={style.items}>
        {friend}
        </div>
    </div>
  );
};


export default FriendsBlock;
