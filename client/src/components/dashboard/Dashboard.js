import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import DashboardActions from "./DashboardActions";

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {auth.user && auth.user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions></DashboardActions>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Your profile has not been set up yet. Please out your profile.{" "}
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </p>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
