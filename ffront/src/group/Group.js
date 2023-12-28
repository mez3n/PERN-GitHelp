import "./css/group.css";
import { Link } from "react-router-dom";
export default function Group({user}) {
  return (
    <Link className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.photo} alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </Link>
  );
}
