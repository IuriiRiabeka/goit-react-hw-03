import "./Feedback.module.css"




const Feedback = ({ feedback,total, positive}) => {	const { good, neutral, bad } = feedback;

	
	return (
		<div
			className="feedback"
			id="myList">
			 
				<ul>
					<li>Good: {good}</li>
					<li>Neutral: {neutral}</li>
					<li>Bad: {bad}</li>
					<li>Total: {total}</li>
					<li>Positive: {positive}%</li>
				</ul>
			
		</div>
	);
  
  

};
export default Feedback;