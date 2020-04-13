<template>
  <div class="splash-screen">
    <a-row
      type="flex"
      justify="center"
      align="middle"
      style="color:white;height:100%"
    >
      <a-col>
        <center>
          <div class="pikapp-symbol">
            <span style="font-size:100px">p</span>
          </div>
          <div>pikapp</div>
        </center>
      </a-col>
    </a-row>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");
.splash-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999999991;
  background: #000000;
  font-family: Comfortaa;
}
.pikapp-symbol {
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: black;
  /* padding: 20px; */
  border-radius: 20px;
  /* padding: 10px 24px 10px 24px; */
  width: 150px;
}
</style>
