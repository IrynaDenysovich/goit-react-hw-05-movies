import { Link } from 'react-router-dom';
import { BackButton } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <BackButton>{children}</BackButton>
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackLink;
