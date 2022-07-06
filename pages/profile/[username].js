import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h2>Hello {username}!</h2>
    </div>
  );
};

export default Profile;
