import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums', 'todos', 'users'];
function Content() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('posts');
    const [posts, setPosts] = useState([]);

    const [ShowGotoTop, setShowGotoTop] = useState('false');
    //1. useEffect(callback, [deps])
    // - gọi callback mỗi khi re-render
    //2. useEffect(callback, [])
    // - Chỉ gọi một lấn sau khi component được mount
    //3. useEffect(callback, [deps])
    // - Call back sẽ được gọi lại mỗi khi deps thay đổi
    // 1.CallBack luôn luôn được gọi sau khi component mount
    // 2.Clean up funtion luôn được gọi trước khi component unmount
    // 3.CleanUp funtion luôn được gọi trược khi callback được gọi () 
    useEffect(() => {
        console.log("Change type ");
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            setShowGotoTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
            console.log("Components unmount");
        }
    }, [])
    return (

        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: "#333",
                    } : {}}

                >
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id} >{post.title || post.name}</li>
                ))}
            </ul>
            {ShowGotoTop && (
                <button style={
                    {
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }
                }>
                    Go to Top
                </button>
            )}
        </div>

    )
}

export default Content;