import PropTypes from "prop-types";

const AddrrProps = {
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired
}

export default AddrrProps;