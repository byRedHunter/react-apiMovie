import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// components
import List from './containers/List'

import 'bootswatch/dist/pulse/bootstrap.min.css'

const App = () => {
	return (
		<Fragment>
			<nav className='navbar navbar-dark bg-primary border-bottom border-white'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						MoieAPP
					</a>
				</div>
			</nav>

			<main className='bg-dark'>
				<div className='container'>
					<List />
				</div>
			</main>
		</Fragment>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
