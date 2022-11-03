import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import getCourseDuration from './../../helpers/getCourseDuration';

function CourseInfo() {
	const params = useParams();

	function getCourseInfo() {
		let course = mockedCoursesList.find((x) => x.id === params.courseId);
		return (
			<>
				<h4 className='text-center pb-4 pt-3'>{course.title}</h4>
				<div className='d-flex'>
					<section className='course-info pe-3 w-60'>
						<span>{course.description}</span>
					</section>
					<aside className='course-details text-center ps-2 w-40'>
						<label className='d-block bold text-start pb-2 text-truncate'>
							ID: <span className='regular'>{params.courseId}</span>
						</label>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Duration:{' '}
							<span className='regular'>
								{getCourseDuration(course.duration).hr}:
								{getCourseDuration(course.duration).min}{' '}
								{getCourseDuration(course.duration).hrLabel}
							</span>
						</label>
						<label className='d-block bold text-start pb-2 text-truncate'>
							Created: <span className='regular'>{course.creationDate}</span>
						</label>
						<label className='d-block bold text-start pb-1 text-truncate'>
							Authors:{' '}
							<span className='regular d-block text-break-spaces'>
								{[...mockedAuthorsList]
									.filter((e) => course.authors.includes(e.id))
									.map((e) => e.name)
									.join('\n')}
							</span>
						</label>
					</aside>
				</div>
			</>
		);
	}

	return (
		<>
			<Link className='black text-decoration-none' to='/courses'>
				&lt; Back to courses
			</Link>
			{getCourseInfo()}
		</>
	);
}

export default CourseInfo;
