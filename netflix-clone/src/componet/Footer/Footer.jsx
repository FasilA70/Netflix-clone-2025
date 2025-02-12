import React from 'react'
import "facebookoutLinedIcon";
import "InstagramIcon";
import "YoutubeIcons";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <facebookoutLinedIcon/>
          <InstagramIcon/>
          <YoutubeIcon/>
          </div>

          <div className="footer_data">
            <div>
              <ul>
                <Li>Audio Description </Li>
                <Li>Investor Relations </Li>
                <Li>Legal Notice</Li>
                </ul>
                </div>
                <div>
                  <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie preferences</li>
                    </ul>
                    </div>

                    <div>
                      <ul>
                        <li>Gift Cards</li>
                        <li>Terms of User</li>
                        <li>Corporate  Information</li>
                        </ul>
                        </div>
                        <div>
                          <ul>
                           <li>Media Center</li>
                           <li>Privacy</li>
                           <li>Countact</li>
                          </ul>
                        </div>
                        <div className="service-code">
                          <p>Service Code</p>
                          </div>
                          <div>
                            <div className="foter-copyright"> & copy: 1997-2024 Netflix, Inc.</div>
                          </div>
  );
};

export default Footer; 