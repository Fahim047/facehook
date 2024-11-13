import React from 'react';

const Field = ({ label, htmlFor, children, error }) => {
	const id = htmlFor || getChildId(children);
	return (
		<div className="form-control">
			{label && (
				<label className="auth-label" htmlFor={id}>
					{label}
				</label>
			)}
			{children}
			{error && <p>{error.message}</p>}
		</div>
	);
};
const getChildId = (children) => {
	const child = React.Children.only(children);
	if ('id' in child?.props) {
		return child.props.id;
	}
};

export default Field;
