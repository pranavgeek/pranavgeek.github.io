import React, { Component } from 'react';
import Header from './HeaderComponent';
import '../App';
import ContactMainContainer from './ContactMainComponent';
import FooterContainer from './FooterComponent';

class ContactContainer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Header/>
            <ContactMainContainer/>
            <FooterContainer/>
            </>
        );
    }
}
 
export default ContactContainer;