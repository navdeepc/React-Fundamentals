import Card from 'react-bootstrap/Card';
import Button from '../../../../common/Button/Button';
import '../../../../App.css';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';

function CourseCard(prop) {
	const navigate = useNavigate();

	function showCourse(courseId) {
		navigate(`/courses/${courseId}`);
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
					</aside>
				</div>
			</Card.Body>
		</Card>
	);
}

export default CourseCard;
