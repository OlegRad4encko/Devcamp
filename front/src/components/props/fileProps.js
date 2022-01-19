import PropTypes from "prop-types";

const FileProps = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default FileProps;