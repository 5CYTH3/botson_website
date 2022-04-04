import React from 'react';
import ReactDOM from 'react-dom';

export class PageNotFoundError extends React.Component {
    render() {
        return (
            <div className='color'>
                <h1>404</h1>
                <p>Page non trouvée</p>
            </div>
        )
    }
}

export default PageNotFoundError