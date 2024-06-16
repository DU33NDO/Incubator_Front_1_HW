// app/page.js
import HomePage from "../components/layout/HomePage";

export const metadata = {
  title: "My Blog | Home",
  description: "Welcome to My Blog. Explore our latest posts and updates.",
  keywords: "blog, articles, posts, updates",
};

export default function Home() {
  return <HomePage />;
}
