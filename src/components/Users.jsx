import React from "react";

export const Users = ()=> {
    return <div className="row">
        <div className="col-2">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Имя Фамилия</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Виктор Иванов</td>
                    <td>ivanov@mail.com</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Иван Иванов</td>
                    <td>ivanov@mail.ru</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Виктор Сергеев</td>
                    <td>sergeev@mail.com</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}