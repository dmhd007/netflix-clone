import React, { Component } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

class Options extends Component {

    render() { 
        return (
            <div className='content2'>
            <Link to={"Drama"} className='nun'><label className="flabel">Drama</label></Link>
            <Link to={"Romantic"} className='nun'><label className="flabel">Romantic</label></Link>
            <Link to={"Kids"} className='nun'><label className="flabel">Kids</label></Link>
            <Link to={"Action"} className='nun'><label className="flabel">Action</label></Link>
            </div> 
        );
    }
}
 
export default Options;