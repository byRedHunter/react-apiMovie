import React, { Component } from 'react'

import './Loader.css'

export default class Loader extends Component {
	render() {
		return (
			<div className='content-loader'>
				<div className='lds-spinner'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}
}
