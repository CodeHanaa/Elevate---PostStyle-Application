import Content from "./Content";
import Header from "./Header";

import type { Post } from "../Types/post"; 

const Home = ({ posts }: { posts: Post[] }) => {
    return ( 
        <>
            <Header />
            {/* لازم امرر الـ posts هنا عشان تظهر في صفحة البوستات */}
            <Content posts={posts} />
        </>
     );
}

export default Home;
