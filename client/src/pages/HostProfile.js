import React from "react";
import { Redirect, useParams } from 'react-router-dom';

// import UpdateHost from '../components/UpdateHost';

import { useQuery, useMutation } from '@apollo/client';
import { GET_HOST, GET_MEHOST } from '../utils/queries';
import { ADD_HOST } from '../utils/mutations';
import Auth from '../utils/auth';

const HostProfile = (props) => {
  const { username: userParam } = useParams();

  const [addHost] = useMutation(ADD_HOST);
  const { loading, data } = useQuery(userParam ? GET_HOST : GET_MEHOST, {
    variables: { username: userParam },
  });

  const host = data?.me || data?.host || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!host?.username) {
    return (
      <h4>
        You must be logged in to see this.
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addHost({
        variables: { id: host._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${host.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Host
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 col-lg-3 mb-3">
          <HostList
            username={host.username}
            hostCount={host.hostCount}
            hosts={host.hosts}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <UpdateHost />}</div>
    </div>
  );
};

export default HostProfile;
