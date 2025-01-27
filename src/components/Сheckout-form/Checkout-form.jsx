import styles from "./checkoutForm.module.css";
import cartStyles from "../Cart/cart.module.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

export const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleThankYouPage = () => navigate("/thankyou");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    phoneNumber: Yup.string()
      .required("required")
      .matches(/^\d{11}$/, "Phone Number must be 11 digits"),
    address: Yup.string().required("required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phoneNumber: "", address: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form data", values);
        handleThankYouPage();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.checkoutForm}>
          <div className={styles.checkoutForm__label}>
            <label htmlFor="name" className={styles.checkoutForm__name}>Name</label>
            <Field name="name" type="text" className={classNames(styles.checkoutForm__input, errors.name && touched.name ? styles.checkoutForm__input_error : '')}/>
            <ErrorMessage name="name" component="div" className={styles.checkoutForm__error}/>
          </div>

          <div className={styles.checkoutForm__label}>
            <label htmlFor="phoneNumber" className={styles.checkoutForm__name}>Phone Number</label>
            <Field name="phoneNumber" type="text" className={classNames(styles.checkoutForm__input, errors.phoneNumber && touched.phoneNumber ? styles.checkoutForm__input_error : '')}/>
            <ErrorMessage name="phoneNumber" component="div" className={styles.checkoutForm__error}/>
          </div>

          <div className={styles.checkoutForm__label}>
            <label htmlFor="address" className={styles.checkoutForm__name}>Address</label>
            <Field name="address" type="text" className={classNames(styles.checkoutForm__input, errors.address && touched.address ? styles.checkoutForm__input_error : '')}/>
            <ErrorMessage name="address" component="div" className={styles.checkoutForm__error}/>
          </div>

          <Button
            text={"CHECKOUT"}
            type={"submit"}
            className={cartStyles.cart__button}
          />
        </Form>
      )}
    </Formik>
  );
};
