const ContactScreen = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;//.closest('form');
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const body = JSON.stringify(jsonData);
    fetch("http://localhost:5000/contact", {
      method:"post",
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
      <h1>ContactScreen</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adresse mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Nom / Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea style={{resize:"none"}}
            className="form-control"
            id="message"
            name="message"
            rows="5"
            
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </>
  );
};

export default ContactScreen;
