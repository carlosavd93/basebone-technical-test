<template>
  <div class="bg-movie-gray py-6 flex flex-col sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-movie-black shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="text-center pb-6">
          <h1 class="text-3xl">Contact Us!</h1>
          <p>Fill up the form below to send us a message.</p>
        </div>
        <Form @submit="onSubmit" :validation-schema="schema">
          <FormField
            label="Name"
            type="text"
            name="name"
            :validator="yup.string().required('Name is required')"
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            :validator="
              yup
                .string()
                .required('Email is required')
                .email('Email is invalid')
            "
          />
          <FormField
            label="Subject"
            type="text"
            name="subject"
            :validator="yup.string().required('Subject is required')"
          />
          <FormField
            type="text"
            name="message"
            :validator="
              yup
                .string()
                .required('Message is required')
                .min(10, 'Minimum character is 10')
            "
            textArea
          />
          <div class="flex mt-4">
            <input
              class="shadow bg-movie-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
              type="submit"
              value="Send"
            />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  subject: yup.string().required(),
  message: yup.string().required().min(10),
});

const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2));
};
</script>
