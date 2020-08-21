import React from 'react';
import styled from 'styled-components';
import './Footer.css';

function Footer() {
    return (
        <>
        <div className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                   {/* Column 1 */}
                   <div className="col-md-3 col-sm-15">
                       <h4>Postal address</h4>
                       <ul className="list-unstyled">
                           <li>Faculty of Applied Sciences</li>
                           <li>Sabaragamuwa University of<br/> Sri Lanka</li> 
                            <li>  P.O. Box 02, Belihuloya - 70140</li> 
                            <li>    SRI LANKA</li>
                            <br/>
                               Inquiries
                            <br/>   
                            Tel:/Fax: +94-45-2280014
                           
                       </ul>
                   </div>
                   {/* Column 2 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Departments</h4>
                       <ul className="list-unstyled">
                           <li><a href="/">Computing and Information Systems</a></li>
                           <li><a href="/">Food Science and Technology</a></li>
                           <li><a href="/">Natural Resources</a></li>
                           <li><a href="/">Physical Science and Technology</a></li>
                           <li><a href="/">Sports Sciences and Physical Education</a></li>
                       </ul>
                   </div>
                   {/* Column 3 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Usefull Links</h4>
                       <ul className="list-unstyled">
                           <li><a href="/">Home</a></li>
                           <li><a href="/">News</a></li>
                           <li><a href="/">ContactUs</a></li>
                           <li><a href="/">4</a></li>
                       </ul>
                   </div>
                   {/* Column 4 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>About Us</h4>
                       <ul className="list-unstyled">
                           <li><a href="/"></a></li>
                           <li><a href="/"></a></li>
                           <li><a href="/"></a></li>
                           <li><a href="/"></a></li>
                       </ul>
                   </div>
            {/* Column end */}
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                  <p className="text-xs-center">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &copy;{new Date().getFullYear()} Sabaragamuwa University of Sri Lanka- 
                      All Rights Reserved
                  </p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Footer;

