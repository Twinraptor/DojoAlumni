import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLikeSingle, unLikeSingle } from "../../actions/post";
const PostTop = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLikeSingle,
  unLikeSingle,
}) => {
  console.log(likes.length);
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${user}`}>
            <img className='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
          {/* <button
            onClick={(e) => addLikeSingle(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up'></i>{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={(e) => unLikeSingle(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down'></i>
          </button> */}
        </div>
      </div>
    </Fragment>
  );
};

PostTop.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLikeSingle: PropTypes.func.isRequired,
  unLikeSingle: PropTypes.func.isRequired,
};

const mapStatesToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatesToProps, { addLikeSingle, unLikeSingle })(
  PostTop
);
