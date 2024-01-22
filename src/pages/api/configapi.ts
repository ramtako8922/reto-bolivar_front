const accessToken="BQBsl8U3Ngpb6szdzYWXjZP3UmOxchYk9cWxH9zNPla_Qp6N5pXY2EEP5JaZj5hWe8O44m5KJO1UO0m1UO-Nvc18fDWuLJRNGgBQz5ZIMlu2SRIYTR0"

export const options = {

	
	method: 'GET',
	headers: {
		'Authorization': `Bearer ${accessToken}`,
		'Content-Type': 'application/json',
	}
};