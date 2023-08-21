import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transaction from "data/transactions.json"

export const App = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <Profile user={user} />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={ transaction} />
    </div>
  );
};
