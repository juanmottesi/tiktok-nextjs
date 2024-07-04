'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

import { follow } from "@/service/Api";

import { useUser } from "@/hooks/UserContext";

import { SimplePostType } from "@/types/backendTypes";

const Post = ({ id, title, description, user, video }: SimplePostType) => {
  const { user: loggedUser, token, updateUser } = useUser();
  const router = useRouter();

  const handleFollow = () => {
    if (token) {
      follow(token, user.id).then((newUser) => {
        updateUser(newUser);
      })
    } else {
      router.push(`/login?redirect=/post/${id}`);
    }
  }

  return (
    <div>
      <div>
        <img src={user.image} />
        <div>
          <Link href={`/profile/${user.id}`}>{user.username}</Link>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button onClick={handleFollow}>
          {loggedUser.following.find((us) => us.id === user.id) ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div>
        {/* <video src={video}  controls /> */}
        <div>
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Post;
