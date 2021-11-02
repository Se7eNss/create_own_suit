import React from 'react'
import Header from './header/Header';
import Filter from './filter/Filter';
import Suits from './suits/Suits';
import Footer from './footer/Footer';
import suits from '../../../data/suits.json'
import { useDispatch, useSelector } from "react-redux";
import { TStore } from '../../../store';

const Galery = () => {
        var suit = suits;
        const dispatch = useDispatch()
        const {category} = useSelector((state:TStore)=>state.jacketReducer)
        console.log(suit)
    return (
        <div className="col-lg-7 p-4 ">
            <div className="row">
                <Header/>
                <Filter/>
                <Suits/>
                <Footer/>
            </div>
        </div>
    )
}

export default Galery
