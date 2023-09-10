import React, { useEffect, useState } from 'react';

const PostTable = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const containerStyle = {
        textAlign: 'center',
        margin: '0 auto',
        width: '80%', 
        padding: '20px',
    };

    const headingStyle = {
        fontSize: '24px',
        marginBottom: '20px',
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        margin: '0 auto', 
    };

    const cellStyle = {
        border: '1px solid #ddd', 
        padding: '8px',
        textAlign: 'left',
    };

    const headerCellStyle = {
        backgroundColor: '#f2f2f2',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Posts from Public API</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>Title</th>
                        <th style={headerCellStyle}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td style={cellStyle}>{post.title}</td>
                            <td style={cellStyle}>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostTable;
