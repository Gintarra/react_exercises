import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>New Year around the world</h1>
            <div className="d-flex wrap justify-center">
                <img className="imgG" src="https://c.tadst.com/gfx/750w/newyearindia2010.jpg" alt=""/>
                <img className="imgG"
                     src="https://media.istockphoto.com/photos/sydney-new-years-eve-picture-id1057761554?k=20&m=1057761554&s=612x612&w=0&h=gvtrV0C77NVQq52Pf5WSnhv5MVQN7Qz0HjFbYzFkDoE="
                     alt=""/>
                <img className="imgG"
                     src="https://www.visitlithuania.net/images/M_images/2014.01.01_0003_vilnius_cathedral_new_year_fireworks_crop_2000.jpg"
                     alt=""/>
                <img className="imgG"
                     src="https://vamospanish.com/wp-content/uploads/new-year-celebration-buenos-aires.jpg" alt=""/>
            </div>
        </div>
    );
};

export default GalleryPage;