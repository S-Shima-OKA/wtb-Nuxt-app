<script setup>
const SwitchRef = ref(null);
const test1 = () =>{
    document.body.classList.toggle('Qiita')
    console.log()
}
const test2 = () =>{
    console.log(document.body.classList.toggle('Zenn'))
}
</script>
<template lang="pug">
.c-toggle-switch
 label(for="js-toggle-Qiita") Qiita
 label(for="js-toggle-Zenn") Zenn
 input.u-input-hidden(
    type="radio"
    id="js-toggle-Qiita"
    name="lb-toggle"
    checked
    @click="test1"
    )
 input.u-input-hidden(
    type="radio"
    id="js-toggle-Zenn"
    name="lb-toggle"
    @click="test2"
    )
 .c-toggle-body(aria-hidden="true")
</template>
<style lang="scss">
.c-toggle-switch{
    width: 135px;
    display: flex;
    justify-content: space-between;
    position: relative;
    label{
        width: 50%;
        background-color: transparent;
        position: relative;
        z-index: 3;
        cursor: pointer;
        &:not(:first-child){
            text-align: right;
        }
    }
    .c-toggle-body{
        width: 51px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        &::before,
        &::after{
            content: '';
            display: block;
            position: absolute;
            transition: all .3s;
        }
        &::before{
            width: 100%;
            height: 100%;
            background-color: #55C500;
            border-radius: 20px;
        }
        &::after{
            width: 19px;
            height: 19px;
            background-color: #fff;
            border-radius: 10px;
            top: 0;
            bottom: 0;
            margin: auto;
            transform: translateX(4px);
        }
    }
    input#js-toggle-Zenn{
        &:checked{
            & ~ {
                .c-toggle-body{
                    &::before{
                        background-color: #3EA8FF;
                    }
                    &::after{
                        transform: translateX(150%);
                    }
                }
            }
        }
    }
}
</style>