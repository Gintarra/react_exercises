import React from 'react';

const ContactsPage = () => {
    return (

        <div>
            <h1 style={{textAlign: "center"}}>Contact Us </h1>
            <div className="d-flex column" style={{margin: "30px"}}>
            <h3>Mail:</h3>

            <h3> FactCheck.org
                Annenberg Public Policy Center
                202 S. 36th St.
                Philadelphia, PA 19104-3806</h3>

            <h3> E-Mail:
                Editor@FactCheck.org</h3>

            <h3> Telephone:</h3>

            <h3> Annenberg Public Policy Center: (215) 898-9400</h3>

            <h3> FactCheck.org News Desk: (215) 573-7070</h3>

            <h3> To Report Technical Problems With This Site:
                Webmaster@FactCheck.org</h3>
        </div>
        </div>
    );
};

export default ContactsPage;