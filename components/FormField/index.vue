<template>
  <div class="mt-2">
    <textarea
      v-if="textArea"
      class="bg-movie-blue shadow mt-2 h-32 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      v-model="value"
      :type="props.type"
      placeholder="Type your message here..."
      :name="props.name"
      @blur="handleBlur"
    ></textarea>
    <section v-else>
      <label class="text-sm">{{ props.label }}</label>
      <input
        class="bg-movie-blue shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="value"
        :type="props.type"
        :name="props.name"
        @blur="handleBlur"
      />
    </section>
    <div v-if="errorMessage" class="text-red-500 text-sm">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { StringSchema } from "yup";

interface Props {
  label?: string | null;
  type: "text" | "email" | "message";
  name: string;
  textArea?: boolean;
  validator?: StringSchema<string> | undefined;
  placeholder?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  validator: undefined,
  placeholder: null,
  textArea: false,
});

const { value, errorMessage, validate } = useField(
  props.name,
  props.validator,
  {
    validateOnValueUpdate: false,
  },
);

const handleBlur = async () => {
  await validate();
};
</script>
