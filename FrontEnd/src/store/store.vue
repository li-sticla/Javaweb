<template>
  <div>
    <ainput @input="handleInput" :value="inputValue"/>
    <p>{{ inputValue }}</p>
  </div>
</template>
<script>
import Ainput from "@/components/Ainput.vue";

export default {
  name: "store",
  data() {
    return {
      inputValue: "aaaaa"
    };
  },
  components: {
    Ainput
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>
