import GenericForm from "../components/generics/GenericForm";

const ContactScreen = () => {

  return (
    <>
      <h1>ContactScreen</h1>
      <GenericForm method="post" endpoint="http://localhost:5000/contact" submitButtonText="Envoyer">
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
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
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
      </GenericForm>
    </>
  );
};

export default ContactScreen;
