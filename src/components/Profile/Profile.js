import PropTypes from 'prop-types';
import { List, Box, ListItem, Title, SubTitle } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats:{followers, views, likes},
}) => (
<div className="profile">
  <Box>
    <img src={avatar} alt="User avatar" className="avatar" width="200"/>
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
    </Box>

  <List>
    <ListItem>
      <Title>Followers</Title>
      <SubTitle>{followers}</SubTitle>
    </ListItem>
    <ListItem>
      <Title>Views</Title>
      <SubTitle>{views}</SubTitle>
    </ListItem>
    <ListItem>
      <Title>Likes</Title>
      <SubTitle>{likes}</SubTitle>
    </ListItem>
  </List>
</div>);

Profile.propTypes ={
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
};