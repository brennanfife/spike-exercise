import React, { Component } from 'react';

class CommentForm extends Component {
	state = {
		comment: '',
	};

	handleChange = e => {
		this.setState({
			comment: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.submitComment(this.state.comment);
	};

	render() {
		return (
			<div className='container'>
				<form
					onSubmit={this.handleSubmit}
					className='white'
					id='comment-form'
				>
					<h5>Add Comment</h5>
					<div className='input-field'>
						<label htmlFor='text'>Comment</label>
						<textarea
							className='materialize-textarea'
							type='text'
							id='comment'
							rows='10'
							cols='30'
							onChange={this.handleChange}
						/>
					</div>
					<div className='input-field'>
						<button className='btn red lighten-1'>
							Comment
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentForm;