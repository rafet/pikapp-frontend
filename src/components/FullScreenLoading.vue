<template>
  <div class="full-screen-loading">
    <a-row
      type="flex"
      justify="center"
      align="middle"
      style="color:white;height:100%"
    >
      <a-col>
        <center>
          <a-spin>
            <font-awesome-icon
              slot="indicator"
              type="loading"
              icon="compact-disc"
              style="color:white;font-size:64px"
              spin
            />
          </a-spin>
          <div style="margin-top:14px">Yeni Şarkı Yükleniyor</div>
        </center>
      </a-col>
    </a-row>
  </div>
</template>

<style>
.full-screen-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999999;
  background: #000000dd;
}
</style>
