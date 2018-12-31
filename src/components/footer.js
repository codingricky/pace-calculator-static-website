import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<footer className="footer center has-background-light">
		<div className="content has-text-centered">
			<p className="is-size-5">
				<a href="http://www.polymorphsolutions.com.au">Developed by Polymorph Solutions</a>
			</p>
		</div>
	</footer>
);

export default Footer;
