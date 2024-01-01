<template>
   <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 10 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
   >

   <a-form-item
      label="原域名"
      name="old_host"
      :rules="[{ required: true, message: '请输入原域名' }]"
   >
      <a-input v-model:value="formState.old_host" />
   </a-form-item>
   <a-form-item
      label="新域名"
      name="new_host"
      :rules="[{ required: true, message: '请输入新域名' }]"
   >
      <a-input v-model:value="formState.new_host" />
   </a-form-item>

   <a-form-item
      label="原OCR域名"
      name="old_ocr_host"
      :rules="[{ required: false, message: '请输入原OCR域名' }]"
   >
      <a-input v-model:value="formState.old_ocr_host" />
   </a-form-item>

   <a-form-item
      label="新OCR域名"
      name="new_ocr_host"
      :rules="[{ required: false, message: '请输入新OCR域名' }]"
   >
      <a-input v-model:value="formState.new_ocr_host" />
   </a-form-item>

   <a-form-item :wrapper-col="{offset:8, span: 10}">
      <a-button type="primary" html-type="submit" @click="handleSubmit">  
         提交
      </a-button>
   </a-form-item>
   </a-form>
</template>


<script setup>
   import {reactive} from 'vue'
   import axios from '@/request'
   const formState = reactive({
      old_host: '',
      new_host: '',
      old_ocr_host: '',
      new_ocr_host: '',
   })
   const handleSubmit = () => {
      console.log('start Success:', formState);
      axios.post('https://09a19c55-a648-413c-9777-e416682e054c.mock.pstmn.io/api/replace', formState)
      .then((response) => {
         if(response.data.success) {
            this.$message.success('操作成功');
         } else {
            this.$message.error('操作失败');
         }
      })
      .catch((error) => {
         console.log(error);
         this.$message.error('操作失败');
      });
      console.log('end Success:', formState);
   }
   const onFinish = () => {

      console.log('Success:', formState);
   };
   const onFinishFailed = () => {
      console.log('Failed:', formState);
   };
</script>

<style scoped>
</style>
