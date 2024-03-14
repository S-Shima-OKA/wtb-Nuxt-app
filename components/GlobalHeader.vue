<template lang="pug">
.l-header
 header.l-header-wrapper
  h1.c-header-logo <NuxtLink to="/">WTB</NuxtLink>
  <FeedToggle></FeedToggle>
</template>
<style lang="scss">
.l-header{
    &-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        .c-header-logo{
            font-family: 'Noto Sans JP';
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
}
</style>