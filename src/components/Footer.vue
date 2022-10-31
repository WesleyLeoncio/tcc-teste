<template>
  <div id="footer">
    <p>TCC IFES &copy; 2022</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
#footer {
  height: 100px;
  background-color: $templateColor;
  border-top: 4px solid #111;
  color: $templateColorFont;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
}
</style>