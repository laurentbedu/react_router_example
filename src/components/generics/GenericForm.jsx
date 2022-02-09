const GenericForm = (props) => {

    const handleSubmit = (evt) => {
      evt.preventDefault();
      const form = evt.currentTarget;//.closest('form');
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      fetch(props.endpoint, {
        method: props.method,
        headers: {
          "content-type":"application/json"
        },
        body
      })
      .then(resp => resp.text())
      .then(console.log)
      .catch(console.log);
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          {props.children}
          <button type="submit" className="btn btn-primary">
            {props.submitButtonText}
          </button>
        </form>
      </>
    );
  };
  
  export default GenericForm;
  