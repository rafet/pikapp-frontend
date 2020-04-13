<template>
  <a-row
    type="flex"
    justify="center"
    align="middle"
    style="height:100vh;text-align:center"
  >
    <a-col>
      <i class="fas fa-qrcode qr"></i>
      <br />
      <a-button
        shape="round"
        ghost
        class="btn"
        :loading="loading"
        @click="
          () => {
            loading = true;
            setTimeout(() => {
              loading = false;
            }, 2000);
          }
        "
      >
        Qr Kod Okut
      </a-button>
    </a-col>
  </a-row>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style scoped>
.qr {
  font-size: 206px;
  color: white;
}
p {
  color: white;
}
.btn {
  margin-top: 20px;
}
</style>
