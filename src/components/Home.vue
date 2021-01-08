<template>
  <div class="Home">
    <h2 class="head">{{userInfo.name}}</h2>
    <div class="img">
      <img src="img/girl.png" alt="Girl with Orange" />
    </div>
    <div class="socials">
      <a :href="userInfo.social_media.instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a :href="userInfo.social_media.twitter">
        <i class="fab fa-twitter-square"></i>
      </a>
      <a :href="userInfo.social_media.snapchat">
        <i class="fab fa-snapchat"></i>
      </a>
      <a :href="'mailto:' + userInfo.social_media.email">
        <i class="fas fa-envelope-square"></i>
      </a>
    </div>

    <div class="links">
      <a href="#" class="link">home</a>
      <a href="#" class="link">about</a>
      <a href="#" class="link im"><img src="img/model-hair.png" alt=""/></a>
      <a href="#" class="link">gallery</a>
      <a href="#" class="link">contact</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created() {
    this.$store.dispatch('GetUserInfo')
  }
}
</script>

<style lang="scss">
@import '@/styles/home.scss';
</style>
