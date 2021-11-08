import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// idの一覧を取得する関数
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}
// 特定のidを使ってビルド時にDBからデータを取得する関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  // 以下の書き方なら、オブジェクトの形で返ってくるので
  // [id].jsのgetStaticPropsを const { post: post } = await getPostData(params.id); にしないとだめ。
  // return {
  //   post,
  // };
  return post;
}
