import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import screenshot from '../images/iphonex.png';
import playStoreLogo from '../images/google-play-badge.png';
import appStoreLogo from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg">
		<div className="container center hero-body">
			<div>
				<div>
					<div>
						<h1 className="is-size-1 has-text-white">
							Pace Calculator
					     </h1>
					</div>
					<div className="subtitle">
						<span className="subtitle has-text-white is-size-4">
							Reach your personal best, Pace Calculator will help you get there!
						</span>
					</div>
				</div>
				<div className="imageContainer">
					<div>
						<a href="https://play.google.com/store/apps/details?id=au.com.polymorphsolutions.pacecalcnext"><img className="storeIcon" src={playStoreLogo} /></a>
					</div>
					<div>
						<a href="https://itunes.apple.com/au/app/pace-calculator/id502814541?mt=8"><img className="iosStoreIcon" src={appStoreLogo} /></a>
					</div>
				</div>
			</div>
			<div>
				<img src={screenshot} />
			</div>
		</div>
	</section >
);

export default Header;
