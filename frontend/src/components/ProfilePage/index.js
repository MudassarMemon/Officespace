import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, fetchUser } from "../../store/users";
import { getPosts, receivePosts } from "../../store/posts";
import UserFeed from "./UserFeed";
import "./ProfilePage.css";

function ProfilePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(getUser(id));
  const userPosts = useSelector(getPosts);

  useEffect(() => {
    dispatch(fetchUser(id)).then((res) => dispatch(receivePosts(res)));
  }, [id, dispatch]);

  return (
    <>
      <header className="profile-header">
        <div className="cover-photo-container">
          <img
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/308942412_10162574519155620_7785633294695839881_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=52f669&_nc_ohc=U3OEYWyDCNYAX9fjaf0&_nc_ht=scontent-iad3-1.xx&oh=00_AfCpFbPZYpfAr9J63DjUeicAWdftnund5LTXlSfHv1OwMg&oe=651005BD"
            alt="cover"
          />
        </div>
        <div className="profile-details-container">
          <div className="left-profile-details">
            <div className="profile-photo-container">
              <img
                alt="userLogo"
                src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
              ></img>
            </div>
            <div className="profile-name-container">
              <h1>{user && user.firstName + " " + user.lastName}</h1>
              <h6>69 friends</h6>
            </div>
          </div>
          <div className="right-profile-details">
            <div className="edit-profile-container">Edit Profile</div>
          </div>
        </div>
        <div className="profile-links">
          <NavLink exact to={`/users/${user.id}`}>
            Posts
          </NavLink>
          <NavLink to={`/users/${user.id}/about`}>About</NavLink>
          <NavLink to={`/users/${user.id}/friends`}>Friends</NavLink>
          <NavLink to={`/users/${user.id}/photos`}>Photos</NavLink>
        </div>
      </header>
      <div className="profile-main-container">
        <ul>
          <UserFeed posts={userPosts} />
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;
