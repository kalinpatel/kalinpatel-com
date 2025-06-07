import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Pages",
  description: "Read my posts.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Pages</h1>
      <BlogPosts />
    </section>
  );
}
