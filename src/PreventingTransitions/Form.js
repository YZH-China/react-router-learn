import React, { Component } from 'react';
import {
	Prompt
} from 'react-router-dom';

class Form extends Component {
	constructor(props) {
		super(props);
		this.displayName="Form";
		this.state = {
			isBlocking: false
		}
	}

	render() {
		const { isBlocking } = this.state;

		return (
			<form
				onSubmit={(event) => {
					event.preventDefault();
					event.target.reset();
					this.setState({
						isBlocking: false
					})
				}}
			>
				<Prompt
					when={isBlocking}
					message={location => (
						`确定要链接到${location.pathname}吗？`
					)}
				></Prompt>
				<p>
					Blocking ? { isBlocking ? '是的，点击一个链接或回退按钮' : '不是' }
				</p>
				<p>
					<input
						size="50"
						placeholder="输入文字以阻止转换"
						onChange={(event) => {
							this.setState({
								isBlocking: event.target.value.length > 0
							})
						}}
					/>
				</p>
				<p>
					<button>Submit to stop blocking</button>
				</p>
			</form>
		);
	}
}

export default Form;