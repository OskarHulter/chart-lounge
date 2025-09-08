import React from 'react';
import { Field } from '@base-ui-components/react/field';
import { Form } from '@base-ui-components/react/form';
import { z } from 'zod';
import styles from './index.module.css';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number().positive('Age must be a positive number'),
});

async function submitForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const result = schema.safeParse(Object.fromEntries(formData as any));

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    errors: {},
  };
}

export function AssetForm() {
  const [errors, setErrors] = React.useState({});

  return (
    <Form
      className={styles.Form}
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        const response = await submitForm(event);
        setErrors(response.errors);
      }}
    >
      <Field.Root name="name" className={styles.Field}>
        <Field.Label className={styles.Label}>Name</Field.Label>
        <Field.Control placeholder="Enter name" className={styles.Input} />
        <Field.Error className={styles.Error} />
      </Field.Root>
      <Field.Root name="age" className={styles.Field}>
        <Field.Label className={styles.Label}>Age</Field.Label>
        <Field.Control placeholder="Enter age" className={styles.Input} />
        <Field.Error className={styles.Error} />
      </Field.Root>
      <button type="submit" className={styles.Button}>
        Submit
      </button>
    </Form>
  );
}

// async function submitForm(value: string) {
//   // Mimic a server response
//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });

//   try {
//     const url = new URL(value);

//     if (url.hostname.endsWith('example.com')) {
//       return { error: 'The example domain is not allowed' };
//     }
//   } catch {
//     return { error: 'This is not a valid URL' };
//   }

//   return { success: true };
// }
