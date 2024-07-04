import React from 'react';
import './Menu.css';

const Menu: React.FC<{ menuName:string }> = (prop) => {
    return(
        <>
        <section className='container'>
            <button className='buttons'>
                {prop.menuName}
            </button>
        </section>
        </>
    );
}
export default Menu;