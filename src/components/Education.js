import React from 'react'
import styled from 'styled-components'
import { device } from '../device';


const EducationDetails = styled.div`
	text-align: left;
	width: 90%;
	margin: auto;
	margin-bottom: 1rem;
	border-top: 1px solid lightgray;
    padding-top: 1rem;
    display: flex;
	@media only screen and ${device.mobileL} {
		flex-direction: column;
	}
	h2 {
		font-size: 1rem;
		margin-bottom: 0px;
		margin-top: 0px;
	}
	p {
		font-size: .8rem;
		margin-top: .125rem;
		margin-bottom: 0px;
		&.year {
			// font-size: .7rem;
		}
	}
	ul {
		font-size: .8rem;
		margin-bottom: 0px;
		@media only screen and ${device.mobileL} {
			padding-left: 1rem;
		}
	}
	.left {
		flex: 2;
		text-align: left;
		font-size: 1000px;
	}
	.right {
		flex: 1;
		text-align: right;
		@media only screen and ${device.mobileL} {
			text-align: left;
		}
	}
`

export default function Education(props) {
	let school = props.school
	return (
		<EducationDetails>
				<div className="left">
					<h2 style={{fontSize: '20px'}}className="school">{ school.school }</h2>
					<p  className="program">{ school.program }</p>
				</div>
				<div className="right">
					<p className="year">{ school.graduationYear }</p>
					<p className="location">{ school.location }</p>
				</div>
		</EducationDetails>
	)
}