import React from 'react'

function Footer(props) {


    // variables to keep return statement cleaner

    let contact = "Contact Me"
    let myInfo = 'My info'

    // checks language and changes content accordingly

    if (props.language === 'FR') {
        contact = 'Contactez-moi';
        myInfo = 'Mes coordonnées'
    }

    if (props.language === 'IT') {
        contact = 'Contattami';
        myInfo = 'I miei recapiti'
    }


    return (
        <div id='footerContainer'>
            <div id='leftSide'>
                <p id='myInfo' className='footerInfo'>{myInfo}</p>
                <p id='email' className='footerInfo'>anismemon096@gmail.com</p>
                <p id='phone' className='footerInfo'>+1 802.355.6227</p>
            </div>
            <div id='rightSide'>
                <p id='contactMe'onClick={props.modalOpen} style={{ 'cursor': 'pointer' }}>{contact}</p>
            </div>
        </div>
    )
}

export default Footer

// let myInfo = 'My info'

// class Footer extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // contact: {
//                 content: 'Contact Me',
//                 color: 'red'
//             // }
//         }

//     }
//     // variables to keep return statement cleaner

//     // let contact = "Contact Me"


//     // checks language and changes content accordingly

//     // myInfo = 'My info'

// //     if(this.props.language === 'FR') {
// //     this.setState({
// //         contact: { content: 'Contactez-moi' }
// //     })

// //     myInfo = 'Mes coordonnées'
// // }

// // if (this.props.language === 'IT') {
// //     this.setState({
// //         contact: { content: 'Contattarmi' }
// //     });

// //     myInfo = 'I miei recapiti'
// // }


// changeColor = () => {
//     let prevState = this.state.color

//     if (prevState === 'black') {
//         this.setState({
//             color: 'white' 
//         })
//     }

//     if (prevState === 'white') {
//         this.setState({
//            color: 'black' 
//         })
//     }

//     // this.setState({
//     //     contact: { color: prevState }
//     // })
// }


// render() {


//     return (
//         <div id='footerContainer'>
//             <div id='leftSide'>
//                 <p id='myInfo' className='footerInfo'>{myInfo}</p>
//                 <p id='email' className='footerInfo'>anismemon096@gmail.com</p>
//                 <p id='phone' className='footerInfo'>+1 802.355.6227</p>
//             </div>
//             <div id='rightSide'>
//                 <p id='contactMe' onClick={this.props.modalOpen} onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>{this.state.content}</p>
//             </div>
//         </div>
//     )
// }
// }

// export default Footer
