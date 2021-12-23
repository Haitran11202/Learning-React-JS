import { useState, useEffect } from 'react';
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì ? Tại sao nên học Reactjs',
    },
    {
        id: 2,
        name: 'SPA/NPA là gì?',
    },
    {
        id: 3,
        name: 'Arrow funtion'
    }
]
export default function Message() {
    const [LessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        
        window.addEventListener(`lesson-${LessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${LessonId}`, handleComment);
        }
    }, [LessonId])

    return (
        <div>
            <ul>
                {lessons.map((lesson => (
                    <li

                        onClick={() => setLessonId(lesson.id)}
                        style={{
                            cursor: 'pointer',
                            color: LessonId === lesson.id ? 'red' : 'black'
                        }}
                        key={lesson.id}>{lesson.name}</li>
                )))}
            </ul>
        </div >
    )
}