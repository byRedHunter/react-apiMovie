import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ movie }) => {
	return (
		<div className='card'>
			<img
				className='card-img-top'
				src={movie.Poster}
				alt={movie.Title}
				width='100'
			/>
			<div className='card-body'>
				<h4>
					{movie.Title} {movie.Year}
				</h4>
				<p>{movie.Type}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string,
		Year: PropTypes.string,
		Poster: PropTypes.string,
		Type: PropTypes.string,
	}).isRequired,
}

export default Card
