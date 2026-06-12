import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

const DisplayErrors = () => {
	const errorsDsiplay = useSelector((state) => state.ErrorsReducer);

	return (
		<div className='custom-alert-container'>
			{errorsDsiplay.map((el, i) => (
				<Alert key={i} className='custom-alert'>
					<span className='alert-icon'>⚠️</span>
					{el.msg}
				</Alert>
			))}
		</div>
	);
};

export default DisplayErrors;
