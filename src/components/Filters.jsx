import React from 'react';

import Link from './Link';

const Filters = () => {
    return (
        <div>
            <Link filter="SHOW_ALL">Show all</Link>
            {' '}
            <Link filter="COMPLETED">Completed</Link>
            {' '}
            <Link filter="IN_PROGRESS">In progress</Link>
        </div>
    );
};

export default Filters;