import PropTypes from 'prop-types';


 const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
     
    </li>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default ContactItem;