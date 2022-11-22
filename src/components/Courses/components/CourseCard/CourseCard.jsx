import Card from 'react-bootstrap/Card';
import Button from '../../../../common/Button/Button';
import '../../../../App.css';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';
import useFetch from './../../../../helpers/useFetch';
import { COURSEDELETE } from './../../../../constants';
import { GetAllCourses } from '../../../../store/courses/thunk';
import { useDispatch } from 'react-redux';

function CourseCard(prop) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { request, data, error } = useFetch();

	function showCourse(courseId) {
		navigate(`/courses/${courseId}`);
	}

	function deleteCourse(courseId) {
		let body,
			token = localStorage.getItem('token');
		request
			.delete(`${COURSEDELETE}/${courseId}`, body, token)
			.then((res) => {
				dispatch(GetAllCourses());
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<Card className='mb-2'>
			<Card.Body>
				<div className='d-flex'>
					<section className='course-info pe-3'>
						<Card.Title>{prop.course.title}</Card.Title>
						<Card.Text>{prop.course.description}</Card.Text>
					</section>
					<aside className='course-details text-center ps-2'>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Authors:{' '}
							<span className='regular'>{prop.authors.join(', ')}</span>
						</label>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Duration:{' '}
							<span className='regular'>
								{getCourseDuration(prop.course.duration).hr}:
								{getCourseDuration(prop.course.duration).min}{' '}
								{getCourseDuration(prop.course.duration).hrLabel}
							</span>
						</label>
						<label className='d-block bold text-start pb-2 text-truncate'>
							Created:{' '}
							<span className='regular'>{prop.course.creationDate}</span>
						</label>
						<Button
							name='Show Course'
							class='btn btn-info bg-transparent'
							click={() => showCourse(prop.course.id)}
						></Button>
						<Button
							name='Delete'
							class='btn btn-info bg-danger ms-2 border-0'
							click={() => deleteCourse(prop.course.id)}
						></Button>
					</aside>
				</div>
			</Card.Body>
		</Card>
	);
}

export default CourseCard;
