import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function SearchBar(prop) {
	const [courseName, setCourseName, setValue] = Input({
		class: 'form-control',
		placeholder: 'Enter Course Name..',
		name: 'coursename',
	});
	return (
		<div className='d-flex justify-content-between align-items-center'>
			<div className='input-sec d-inline-flex align-items-center'>
				{/* <Input
					class='form-control'
					placeholder='Enter Course Name..'
					name='coursename'
				/> */}
				{setCourseName}
				<Button
					name='Search'
					class='btn btn-light ms-3'
					click={() => prop.filterList(courseName)}
				></Button>
			</div>
			<Button
				name='Add New Course'
				class='btn btn-info bg-transparent'
				click={prop.click}
			></Button>
		</div>
	);
}

export default SearchBar;
