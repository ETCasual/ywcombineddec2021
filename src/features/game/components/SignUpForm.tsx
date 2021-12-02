import { Formik, Form, Field } from 'formik';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Loader from 'react-loader-spinner';
import * as Yup from 'yup';

import { useGame } from '@/hooks/useGame';

export const SignUpForm: React.FC = () => {
  const { setInfo } = useGame();

  return (
    <Formik<{
      name: string;
      cg: string;
    }>
      validationSchema={Yup.object({
        name: Yup.string()
          .min(5, 'At least 5 characters')
          .max(30, 'Only up to 30 characters allowed')
          .required('Required'),
        cg: Yup.string()
          .min(4, 'At least 4 characters')
          .max(10, 'Only up to 10 characters allowed')
          .required('Required'),
      })}
      initialValues={{ name: '', cg: '' }}
      onSubmit={async (values) => {
        console.log(values);
        setInfo(values.name, values.cg);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="absolute self-center w-full z-3">
          <div className="mx-auto bg-grey-shade1 rounded-t-xl w-300px relative p-3 flex items-center">
            <button
              type="submit"
              className="w-8 h-8 text-green-300 absolute right-5 focus-within:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader type="TailSpin" height="32px" width="32px" color="#30ffff" />
              ) : (
                <BsArrowRight className="w-8 h-8" />
              )}
            </button>

            <p className="text text-white text-xl  italic">YW - We Are Back!</p>
          </div>
          <div className="mx-auto bg-grey-border w-300px p-3">
            <Field
              type="text"
              id="name"
              name="name"
              className="focus-within:outline-none w-full bg-grey-border placeholder-placeholder my-1 text-white"
              placeholder="Your Name..."
            />
            {errors.name ? <p className="text-sm text-red-600">{errors.name}</p> : null}
          </div>
          <div className="mx-auto bg-grey-border rounded-b-xl w-300px p-3">
            <Field
              type="text"
              id="cg"
              name="cg"
              className="focus-within:outline-none w-full bg-grey-border placeholder-placeholder text-white"
              placeholder="Your CG..."
            />
            {errors.cg ? <p className="text-sm text-red-600">{errors.cg}</p> : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};
