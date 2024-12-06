import React from 'react';
import { Link } from 'react-router-dom';

function BlogNavbar() {
    return (
        <div className="bg-gray-100 pt-10 shadow-md">
            <div className='pl-40'>
                <Link to="/" className="font-semibold text-2xl hover:underline">
                    Portfolio
                </Link>
            </div>
        </div>
    );
}

export default BlogNavbar;
