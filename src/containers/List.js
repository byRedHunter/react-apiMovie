import React, { Fragment } from 'react'

// components
import Card from '../components/Card/Card'
import Loader from '../components/Loader/Loader'

const API = process.env.API

class List extends React.Component {
	constructor() {
		super()

		this.state = {
			data: [],
			searchTerm: '',
			error: '',
			loading: true,
		}
	}

	async componentDidMount() {
		//const res = await fetch('../../assets/data.json')
		const res = await fetch(`${API}&s=one piece`)
		const resJson = await res.json()

		this.setState({ data: resJson.Search, loading: false })
	}

	async handleSubmit(e) {
		e.preventDefault()

		this.setState({ loading: true })

		if (!this.state.searchTerm) {
			return this.setState({ error: 'Please write a valid text' })
		}

		const res = await fetch(`${API}&s=${this.state.searchTerm}`)
		const data = await res.json()

		if (!data.Search) {
			return this.setState({ error: "There aren't results" })
		}

		this.setState({
			data: data.Search,
			error: '',
			searchTerm: '',
			loading: false,
		})
	}

	render() {
		const { data, loading } = this.state

		/* if (loading) {
			return <Loader />
		} */

		return (
			<Fragment>
				<div className='row'>
					<div className='col-md-4 offset-md-4 p-4'>
						<form onSubmit={(e) => this.handleSubmit(e)}>
							<input
								type='text'
								placeholder='Search'
								className='form-control'
								onChange={(e) => this.setState({ searchTerm: e.target.value })}
								value={this.state.searchTerm}
								autoFocus
							/>
						</form>

						<p className='text-danger h2 text-center mt-4'>
							{this.state.error ? this.state.error : ''}
						</p>
					</div>
				</div>

				{loading && <Loader />}

				<div className='row'>
					<div className='card-columns'>
						{data.map((movie, i) => {
							return <Card key={i} movie={movie} />
						})}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default List
