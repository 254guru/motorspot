 
const Inputfield = () => {
	const containerStyle = {
	  width: "350px",
	  height: "40px",
	  overflow: "hidden",
	};
  
	const inputStyle = {
	  width: "100%",
	  height: "100%",
	  padding: "10px",
	  fontSize: "16px",
	  outline: "none",
	  background: "white",
	  
	};
  
	return (
	  <div style={containerStyle}>
		<input
		  type="text"
		  placeholder="search"
		  style={inputStyle}
		/>
		
		{/* Styling for the placeholder color */}
		<style>
		  {`
			input::placeholder {
			  color: crimson;
			}
		  `}
		</style>
		
	  </div>
	);
  };
  
  export default Inputfield;
  

