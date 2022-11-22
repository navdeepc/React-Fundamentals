import { AUTHORS, hostURL } from './../../constants';
import { getAuthorsAction } from './actions';

export const GetAllAuthors = () => async (dispatch) => {
	const response = await fetch(`${hostURL}${AUTHORS}`);
	const data = await response.json();
	dispatch(getAuthorsAction(data.result));
};
