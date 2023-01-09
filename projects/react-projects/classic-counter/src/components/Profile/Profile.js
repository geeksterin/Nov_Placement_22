import { Avatar, Space } from "antd";
import { useSelector } from "react-redux";

const Profile = () => {
  const { name, email, phone, address, avatar } = useSelector(
    (store) => store.user
  );
  return (
    <Space direction="vertical" >
      <Avatar src={avatar} size={100} />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <address>
        {address?.city + ", " + address?.state + ", " + address?.country}
      </address>
    </Space>
  );
};

export default Profile;
