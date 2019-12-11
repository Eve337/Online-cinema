import React from 'react';
import ReactDOM from 'react-dom';


function Card (){
    return (
        <div className="card">
        <img src="https://www.kinopoisk.ru/images/film_big/1234848.jpg" className="card-img-top"></img>
        <div className="card-body">
        <h5 className="card-title">Текст</h5>
        <p className="card-text">Главный герой — 27-летний Илья Горюнов, семь лет отсидевший в тюрьме по ложному обвинению в распространении наркотиков. Когда Илья выходит на свободу, он понимает, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней он больше не сможет. Хотя он не собирался мстить человеку, который отправил его в тюрьму, другого выхода теперь нет. Встретившись лицом к лицу со своим обидчиком, Илья совершает необдуманный поступок, после которого главный герой получает доступ к смартфону Петра, а с ним и к жизни молодого человека — его фотографиям и видео, перепискам с родителями и девушкой Ниной, к странным, полным недомолвок и угроз переговорам с коллегами. На время Илья становится для всех Петром — через текст на экране телефона.</p>
        <a className="btn btn-success" href="BuyPage.html">Buy ticket</a>
        <a className="btn btn-warning" href="BuyPage.html">Book a ticket</a>
        </div>
        <div className="card-footer">
        <small className="text-muted">Last ticket was sold 05.11</small>
        </div>
        </div>
    );}

export default Card;
