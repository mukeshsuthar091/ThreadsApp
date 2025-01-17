import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads."/>
      <UserPost likes={451} replies={136} postImg="/post2.png" postTitle="Nice tutorial"/>
      <UserPost likes={321} replies={624} postImg="/post3.png" postTitle="I love this guy."/>
      <UserPost likes={212} replies={56} postTitle="This is my first thread."/>
    </>
  )
}

export default UserPage;