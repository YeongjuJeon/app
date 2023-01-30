import PropTypes from 'prop-types';
import React, { Component } from 'react'

// const MyComponent = (props)=>{
//     const {name, children, favoriteNumber} = props;
//     return ( 
//         <div>
//             짜잔 나는 지금 {name}를 공부하고이따<br/>
//             children값은 {children}입니다요 <br/>
//             내가 조아하는 숫자는 {favoriteNumber}임니다
//         </div>
// )};

class MyComponent extends Component {
    static defaultProps ={
        name:'기본이름'
    }
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }

    render() {
        const {name, children, favoriteNumber} = this.props;
        return (
                <div>
                    짜잔 나는 지금 {name}를 공부하고이따<br/>
                    children값은 {children}입니다요 <br/>
                    내가 조아하는 숫자는 {favoriteNumber}임니다
                </div>
            )
        }
}


MyComponent.defaultProps = {
    name: '몰라몰라'
};

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;