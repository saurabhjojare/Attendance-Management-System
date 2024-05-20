import React from 'react';

const Navbar = () => {
    return (
        <header className="pb-3 mb-4 border-bottom d-flex justify-content-between align-items-center">
            <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-highlighter" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z" />
                </svg>
                <span className="mx-1 fs-4">SmartAttend</span>
            </a>
            <a href="/logout" className="btn btn-outline-secondary d-inline-flex align-items-center me-3">Log Out</a>
        </header>
    );
};

export default Navbar;
