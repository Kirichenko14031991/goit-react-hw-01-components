import { FriendsListItem } from "./FriendListItem";
import PropTypes from 'prop-types';
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({ friends }) => {

   return  <FriendsList>
        {friends.map(friend  => 
            <FriendsListItem key={friend.id} name={friend.name} isOnline={friend.isOnline} avatar={ friend.avatar}/> 
        )}
    </FriendsList>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
}).isRequired).isRequired
  }
