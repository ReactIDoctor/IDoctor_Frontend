import React from 'react';
import './index.scss';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">
                <h1> Ваши личные данные</h1>
            </div>
            <div className="profile-body">
                <table className="profile-body__item">
                    <tr>
                        <th><label className="profile-body__item__label">ИМЯ: </label></th>
                        <th><input className="profile-body__item__input" type="text"/></th>
                    </tr>
                    <tr>
                        <th><label className="profile-body__item__label">ФАМИЛИ: </label></th>
                        <th><input className="profile-body__item__input" type="text"/></th>
                    </tr>
                    <tr>
                        <th><label className="profile-body__item__label">ОТЧЕСТВО: </label></th>
                        <th><input className="profile-body__item__input" type="text"/></th>
                    </tr>
                    <tr>
                        <th><label className="profile-body__item__label">E-MAIL: </label></th>
                        <th><input className="profile-body__item__input" type="text"/></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th><button className="profile-btn">СОХРАНИТЬ</button></th>
                    </tr>
                </table>
                <table className="profile-body__item">
                    <tr>
                        <tr>
                            <th><label className="profile-body__item__label">МОБИЛЬНЫЙ ТЕЛЕФОН (НЕ ОТОБРАЖАЕТСЯ): </label></th>
                            <th><input className="profile-body__item__input profile-body__item__input--phone" type="text"/></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th><button className="profile-btn profile-btn--phone">СОХРАНИТЬ</button></th>
                        </tr>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Profile;