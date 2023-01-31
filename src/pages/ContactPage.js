import React from "react";
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div>
            <form>
                <h3>Feel free to contact us!</h3> 
                <textarea type="text" placeholder="Write your message..." />
                <button>Send</button>
            </form>
    
        </div>
    );
}

export default ContactPage;