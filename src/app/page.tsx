import { getLatestPost } from "@/service/Api";

import Post from "./components/Post";

import styles from "./page.module.css";

const Home = async () => {
  const latestPost = await getLatestPost();

  return (
    <main className={styles.main}>
      {
        latestPost.map((post) => (<Post key={post.id} {...post} />))
      }
    </main>
  );
}


export default Home