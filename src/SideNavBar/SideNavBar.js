import React, { useState } from "react";
import "./SideNavBar.css";
import Footer from "./footer";
const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Matching Markers",
			icon: "icons/circle.svg",
            icon:"icons/circle.svg",
            icon:"icons/circle.svg",
            icon:"icons/circle.svg",
		},
		{
			text: "Missing Markers",
			icon: "icons/user.svg",
		},
		{
			text: "Modified Markers",
			icon: "icons/message.svg",
		},
		{
			text: "Background",
			icon: "icons/pie-chart.svg",
		},
		
	];
	return (
        <div className="bck">
        
		<div className="side-nav-container">
			<div className="nav-upper">
				<div className="nav-heading">
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h3>DUST Analysis</h3>
						</div>
					<button
						className="hamburger"
					>
						
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
                        <div className="menu-it">
						<img className="menu-it-icon" src={icon} alt="" srcset="" />
						<p className="text-item">{text} </p>
                        <a
							className="menu-item"
							href="#"
						>
							
                            <img className="menu-item-icon" src={icon} alt="" srcset=""/>
                            
						</a>
                        <a
							className="menu-item"
							href="#"
						>
                            <img className="menu-item-icon" src={icon} alt="" srcset=""/>
                            
						</a>
                        <a
							className="menu-item"
							href="#"
						>
                            <img className="menu-item-icon" src={icon} alt="" srcset=""/>
                            
						</a>
                        </div>
					))}
                    
                    
				</div>
                <p>User Confirmation</p> 
                <div>
                    <select className="text-dp" disabled="true">
                        <option value="0">Select Observed Results</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>

                    <textarea className="text-ar" placeholder="Comments" disabled="true"></textarea>
                    
                    
					<div className="nav-details">
						<div className="nav-footer-info">
                        <button className="greybtn">Cancel</button> 
                        <button className="blueBtn">Save Analysis</button>
                        </div>
						
					</div>
			        
                </div>
                
			</div>
			
		</div>
        <div className="nav-footer-in">
			<Footer/>
		</div>
    </div>
	);
};

export default SideNavBar;