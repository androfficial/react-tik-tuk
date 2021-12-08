import PropTypes from 'prop-types';

const UserBioLinks = ({ bioLink }) =>
  bioLink && (
    <div className='user-profile__share'>
      <a
        href={bioLink}
        className='user-profile__bio-link'
        target='_blank'
        rel='noreferrer'
      >
        {bioLink}
      </a>
    </div>
  );

UserBioLinks.propTypes = {
  bioLink: PropTypes.string.isRequired,
};

export default UserBioLinks;
