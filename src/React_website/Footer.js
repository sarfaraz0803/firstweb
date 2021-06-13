import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <>
            <div className="container-fluid footer_main p-5">
                <div className='upper_footer'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-10 mx-sm-auto mb-sm-3'>
                            <div className='m-4 text-center'>
                                <h2>GO Learn</h2>
                                <p>Easy Learn</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4 '>
                            <div className='footer_list'>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Ruby</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4 '>
                            <div className='footer_list'>
                                <ul>
                                    <li>Perl</li>
                                    <li>Css</li>
                                    <li>Html</li>
                                    <li>Django</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-4 '>
                            <div className='footer_list'>
                                <ul>
                                    <li>PHP</li>
                                    <li>.Net</li>
                                    <li>Laravel</li>
                                    <li>SpringBoot</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
                <div className='lower_footer'>
                    <div className='social_icons'>
                        <div className='icon'><FacebookIcon/></div>
                        <div className='icon'><TwitterIcon/></div>
                        <div className='icon'><GitHubIcon/></div>
                        <div className='icon'><InstagramIcon/></div>
                    </div>
                    <div className='footer_div text-center'>
                        <h6>&copy; All Right Reserved 2021</h6>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer;
