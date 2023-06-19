import PropTypes from 'prop-types';
import { ListItem, Img, Dot } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul className="#">
      {friends.map(friend => {
        return (
          <ListItem key={friend.id}>
            <Dot isActive={friend.isOnline ? 'true' : 'false'}></Dot>
            <Img src={friend.avatar} alt={friend.name} />
            <p>{friend.name}</p>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={name}>
      <span className={name}
      style={{
        backgroundColor: isOnline ? 'green' : 'red',
      }} ></span>
      <img className={avatar} src={avatar} alt="User avatar" width="48"/>
      <p className={name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

// eslint-disable-next-line no-undef
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};