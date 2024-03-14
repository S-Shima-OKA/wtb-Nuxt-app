<template lang="pug">
.l-wrapper
 article.l-contents
  <GlobalHeader></GlobalHeader>
   .l-contents-inner
    <slot />
  <GlobalFooter></GlobalFooter>
</template>
<style lang="scss">
.l-wrapper{
    width: 100%;
    height: 100%;
    background-color: #55C500;
    .l-contents{
        background-color: #fff;
        max-width: 430px;
        height: 100%;
        margin: auto;
        border-left: 1px solid #55C500;
        border-right: 1px solid #55C500;
        &-inner{
            padding: 0 16px;
        }
        display: flex;
        flex-direction: column;
    }
}
</style>