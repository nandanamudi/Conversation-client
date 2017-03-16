import React from 'react';

class CustomComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        console.log(this.props.data.data);
        this.props.data.data.map(images => rows.push(
                <a><div classname="box"> <img className = "clipped" src={images}/> </div> </a>
            ));
        return (
            <div className="container">
                <div className="header"></div>
                    <div className="img-div">
                        {rows}
                    </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default CustomComponent;