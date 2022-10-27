function getCourseDuration(mins) {
	let hours = Math.floor(mins / 60);
	hours = hours < 10 ? `0${hours}` : hours;
	let minutes = mins % 60;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	let hrLabel = hours === 1 ? 'hour' : 'hours';
	return {
		hr: hours,
		min: minutes,
		hrLabel: hrLabel,
	};
}

export default getCourseDuration;
