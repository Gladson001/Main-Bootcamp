import { useParams, useHistory } from "react-router-dom";

function Profile({ userList }) {
  const { id } = useParams();
  const history = useHistory();

  const fdUser = userList.filter((obj) => {
    return obj.id === id;
  });

  return (
    <div className="text-center">
      <h2>Profile:({id})</h2>
      <img
        src={fdUser[0].pic}
        style={{ width: "250px", height: "250px" }}
        alt=""
      />
      <h3>{fdUser[0].name}</h3>
      <p>{fdUser[0].email}</p>
      <nav className="profile-btns">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            history.push("/");
          }}
        >
          Go Home
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            history.push("/editprofile/" + id);
          }}
        >
          Edit Profile
        </button>
      </nav>
    </div>
  );
}

export default Profile;
