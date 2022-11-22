import Button from '../../../../common/Button/Button';
// import Input from '../../../../common/Input/Input';
// import React, { useState } from 'react';

function AuthorItem({ authorList, updateAuthorList, title, buttonTitle }) {
	function authors() {
		if (authorList.length > 0) {
			return authorList.map((x) => {
				return (
					<div
						key={x.id}
						className='d-flex justify-content-between align-items-center pb-2'
					>
						<span className='text-capitalize'>{x.name}</span>
						<Button
							name={buttonTitle}
							class='btn btn-info bg-transparent create-course-btn'
							click={() => updateAuthorList(x)}
						></Button>
					</div>
				);
			});
		} else {
			return <h6 className='text-center'>Author List is empty.</h6>;
		}
	}

	return (
		<div className='author-list'>
			<h4 className='pb-2 text-center'>{title}</h4>
			<div className='listScroll'>{authors()}</div>
		</div>
	);
}

export default AuthorItem;
