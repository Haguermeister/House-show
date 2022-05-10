import React from 'react';
import { Link } from 'react-router-dom';

const VenueList = ({ venues, title }) => {
  if (!venues.length) {
    return <h3>No Venues Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {venues &&
        venues.map(venue => (
          <div key={venue._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/account/${venue.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {venue.username}
              </Link>{' '}
              venue on {venue.createdAt}
            </p>
          </div>
        ))}
    </div>
  );
};

export default VenueList;
