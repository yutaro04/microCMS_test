import Link from 'next/link';
import { client } from "../libs/client";
import styles from '../styles/Top.module.scss';

export default function Home({blog}) {
  return (
    <div className={styles.main}>
      <div className={styles.header}><h1>テストブログ！！</h1></div>
      <div  className={styles.contents}>
        {blog.map(blog => (
          <ul key={blog.id}>
            <li className={styles.list}>
              <Link href={`blog/${blog.id}`}>
                <a>
                <img src={`${blog.top_image.url}?w=900`} />
                <span className={styles.title}>{blog.title}</span></a>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

// getStaticProps これが入るとSSG
// ISR組み込んでみると面白いかも。SSR、CSRとかも試そう。
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogss" });

  return {
    props: {
      blog: data.contents,
    },
  };
};