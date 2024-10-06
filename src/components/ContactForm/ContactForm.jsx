import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const validationRules = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationRules}
    >
      <Form className={s.contactForm}>
        <div>
          <label className={s.fieldTitle} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={s.formField}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div>
          <label className={s.fieldTitle} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={s.formField}
            type="text"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage name="phone" component="div" className={s.error} />
        </div>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
