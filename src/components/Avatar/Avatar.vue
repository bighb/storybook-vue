<template>
  <div>我是新组件2</div>
</template>

<script>
  export default {
    name: 'ElCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>