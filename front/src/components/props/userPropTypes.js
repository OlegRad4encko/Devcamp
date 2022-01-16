import PropTypes from "prop-types";
import FileProps from "../props/fileProps"
import AddrrProps from "../props/addrrProps"

const UserPropTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
            file: PropTypes.shape(FileProps).isRequired,
        }),
        files: PropTypes.arrayOf(
            PropTypes.shape(FileProps).isRequired
        ),
        addrr: PropTypes.shape({
            main: PropTypes.shape(AddrrProps).isRequired,
            alt: PropTypes.shape(AddrrProps).isRequired
        }),
        friends: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                age: PropTypes.string.isRequired,
                avatar: PropTypes.shape({
                    file: PropTypes.shape(FileProps).isRequired,
                }),
                files: PropTypes.arrayOf(
                    PropTypes.shape(FileProps).isRequired
                ),
                addrr: PropTypes.shape({
                    main: PropTypes.shape(AddrrProps).isRequired,
                    alt: PropTypes.shape(AddrrProps).isRequired
                }),
            })
        ),
    })
}

export default UserPropTypes;