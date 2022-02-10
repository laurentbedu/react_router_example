import GenericForm from "../components/generics/forms/GenericForm";
import GenericInput from "../components/generics/forms/GenericInput";

const ContactScreen = () => {
  
  const handleSubmit = async (response) => {
    console.log(await response.text());
  };

  return (
    <>
      <h1>ContactScreen</h1>
      <GenericForm
        endpoint="http://localhost:5000/contact"
        submitButtonText="Envoyer"
        callback={handleSubmit}
        validation={true}
        id="myForm"
        className="bg-secondary"
      >
        <GenericInput
          className="mb-3"
          name="email"
          type="email"
          labelText="Adresse mail"
          required={true}
          pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
          invalidText="Saisr un email valide"
        />
        <GenericInput
          className="mb-3"
          name="fullname"
          labelText="Nom"
          required={true}
          invalidText="Saisr un nom"
        />
        <GenericInput
          className="mb-3"
          name="firstname"
          labelText="Prénom"
          required={true}
          invalidText="Saisr un prénom"
        />
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea required
            style={{ resize: "none" }}
            className="form-control"
            id="message"
            name="message"
            rows="5"
          ></textarea>
          <div className="invalid-feedback">Saisir un message</div>
        </div>
      </GenericForm>
    </>
  );
};

export default ContactScreen;
