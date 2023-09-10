import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import PostTable from './Tasks/Task9/PostTable.jsx';
import TodoList from './Tasks/Task1/todo-list.jsx';
import CountdownTimer from './Tasks/Task2/TimerTask.jsx';
import SearchList from './Tasks/Task3/SearchTask.jsx';
import Pagination from './Tasks/Task4/PaginationTask.jsx';
import QuizApp from './Tasks/Task5/QuizTask.jsx';
import FormValidationApp from './Tasks/Task6/FormTask.jsx';
import Calculator from './Tasks/Task7/Calculator.jsx';
import UserProfile from './Tasks/Task8/UserProfile.jsx';

function Home() {
    // Define inline styles for the navbar
    const navbarStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
    };

    const tableStyle = {
        width: '100%',
    };

    const cellStyle = {
        padding: '5px',
        textAlign: 'center',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <Router>
            <div className="App">
                <nav style={navbarStyle}>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <td style={cellStyle}><Link to="/" style={linkStyle}>Posts</Link></td>
                                <td style={cellStyle}><Link to="/todo" style={linkStyle}>Todo List</Link></td>
                                <td style={cellStyle}><Link to="/timer" style={linkStyle}>Countdown Timer</Link></td>
                                <td style={cellStyle}><Link to="/search" style={linkStyle}>Search List</Link></td>
                                <td style={cellStyle}><Link to="/pagination" style={linkStyle}>Pagination</Link></td>
                                <td style={cellStyle}><Link to="/quiz" style={linkStyle}>Quiz App</Link></td>
                                <td style={cellStyle}><Link to="/form-validation" style={linkStyle}>Form Validation</Link></td>
                                <td style={cellStyle}><Link to="/calculator" style={linkStyle}>Calculator</Link></td>
                                <td style={cellStyle}><Link to="/user-profile" style={linkStyle}>User Profile</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </nav>

                <Routes>
                    <Route path="/" element={<PostTable />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/timer" element={<CountdownTimer />} />
                    <Route path="/search" element={<SearchList />} />
                    <Route path="/pagination" element={<Pagination />} />
                    <Route path="/quiz" element={<QuizApp />} />
                    <Route path="/form-validation" element={<FormValidationApp />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Home;
