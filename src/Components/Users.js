function AppendUsers(props) {
    const maleBorder = 'solid 2px blue';
    const femaleBorder = 'solid 2px red';

    return (
        <div className='box' style={{border: props.data.gender === 'male' ? maleBorder : femaleBorder}}>
            <h2>Name: {props.data.name} {props.data.username}</h2>
            <h2>Email: {props.data.email}</h2>
            <h2>Address: {props.data.address.street} {props.data.address.suite} {props.data.address.city}</h2>
            <h4>Coordinates: {props.data.address.geo.lat} {props.data.address.geo.lng}</h4>
            <h4>Phone: {props.data.phone} </h4>
            <h3>Website: {props.data.website}</h3>
            <h3>Company: {props.data.company.name}</h3>
            <h3> {props.data.company.catchPhrase}</h3>
            <h3> {props.data.company.bs}</h3>
        </div>

    )
}


export default AppendUsers;