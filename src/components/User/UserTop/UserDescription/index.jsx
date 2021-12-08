import PropTypes from 'prop-types';

const UserDescription = ({ description }) =>
  description && (
    <div className='user-profile__desc-wrapper'>
      <h2 className='user-profile__desc'>{description}</h2>
    </div>
  );

UserDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default UserDescription;
