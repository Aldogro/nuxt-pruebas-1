<template>
<div>
  <div class="sidebar-main">
    <div class="sidebar-header">
      <img class="logo" src="https://cdn4.iconfinder.com/data/icons/thin-touch-gestures-1/24/thin-1615_gesture_fuck_you_middle_finger-128.png" alt="">
    </div>
    <div>
      <div>item del sidebar</div>
    </div>
    <div>footer del sidebar</div>
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<style scoped>
.sidebar-main {
  display: inline-block;
  position: absolute;
  margin: 10px;
  width: 200px;
  height: 100vh;
  border-radius: 8px;
  background-color: rgb(104, 175, 175);
}
.logo {
  height: 100%;
}
.sidebar-header {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.content {
  display: inline-block;
  margin-left: 300px;
}
</style>