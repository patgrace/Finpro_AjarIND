import React, { useEffect, useState } from 'react';

interface Topic {
    id: number;
    name: string;
    description: string;
}

function Discussion() {
    const [mathTopics, setMathTopics] = useState<Topic[]>([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/9c22b9c4-3844-42b6-96ce-ed7653a7e388')
            .then(response => response.json())
            .then(data => {
                const mathSubject = data.subjects.find((subject: { name: string; topics: Topic[] }) => subject.name === 'Mathematics');
                if (mathSubject) {
                    setMathTopics(mathSubject.topics);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mathematics Topics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mathTopics.map(topic => (
                    <div key={topic.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{topic.name}</h2>
                        <p className="text-gray-600">{topic.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Discussion;