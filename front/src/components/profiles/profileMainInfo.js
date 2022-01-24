import React from "react";
import PropTypes from "prop-types";

const ProfileInfo = ({ name, surname, patronymic, phone, email }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Фамилия</td>
                    <td>{surname}</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Отчество</td>
                    <td>{patronymic}</td>
                </tr>
                <tr>
                    <td>Тел.</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Университет</td>
                    <td><font className="hidden">Скрыто</font></td>
                </tr>
            </tbody>
        </table>
    );
}

ProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default ProfileInfo;
