<template>
  <div class="file-upload" @click="triggerUpload">
    <div class="upload-area"></div>
    <button v-if="fileStatus === 'loading'">正在上传</button>
    <button v-else-if="fileStatus === 'success'">上传成功</button>
    <button v-else-if="fileStatus === 'error'">上传失败</button>
    <button v-else>点击上传</button>
    <input
      ref="fileInput"
      type="file"
      name="file"
      style="display: none"
      @change="handleFile "
      :disabled="disabled"
    />
  </div>
  <slot name="tip"></slot>
  <!--展示fileList-->
  <ul>
    <li
      v-for="file in filesList"
      :key="file.uid"
      :class="`uploaded-file upload-${file.status}`"
    >
      <span class="filename">
        {{ file.name }}
      </span>
      <button class="delete-icon" @click="removeFile(file.uid)" style="margin-left: 10px;">Del</button>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
type obj = {}
// 定义上传文件对象接口类
interface UploadFile {
  uid: string // 文件唯一id
  size: number // 文件大小
  name: string // 文件名称
  status: UploadStatus // 上传状态
  raw: File // 文件
  progress?: string // 文件上传进度
  resp?: any // 服务端返回数据
  url?: string // 对应展示的url
}

interface Props {
  actions: string
  headers?: obj
  name?: string
  data?: obj
  disabled?: boolean,
  list?:boolean
}
const props = withDefaults(defineProps<Props>(), {
  actions: '',
  name: 'file',
  disabled: false,
  list:false
})

// input实例对象
const fileInput = ref<null | HTMLInputElement>(null)
let fileStatus = ref<UploadStatus>('ready')
//文件上传列表
const filesList = ref<UploadFile[]>([])
//判断是否处于上传中
const isUploading = computed(() => {
  return filesList.value.some((file) => file.status === 'loading')
})
//获取文件最后一项
const lastFileData = computed(() => {
  const lastFile = filesList.value[filesList.value.length - 1]
  if (!lastFile) return false
  return {
    loaded: lastFile?.status === 'success',
    data: lastFile?.resp
  }
})

// 1.div点击事件
const triggerUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
// 通过div来触发input的change事件 不展示文件列表
const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files) {
    const uploadedFile = files[0]
    const formData = new FormData()
    formData.append(props.name, uploadedFile)
    fileStatus.value = 'loading' // 上传之前将状态设置为loading
    console.log('fromData-->', formData.get(props.name))
    axios
      .post(props.actions, formData.get('file'), {
        headers: props.headers,
        data: props.data
      })
      .then((resp) => {
        console.log('resp', resp)
        fileStatus.value = 'success' // 上传成功将状态设置为success
      })
      .catch((error) => {
        console.log('error', error)
        fileStatus.value = 'error' // // 上传失败将状态设置为error
      })
  }
}
//展示文件列表
const handleFilesListChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files) {
    const uploadedFile = files[0]
    const formData = new FormData()
    formData.append(props.name, uploadedFile)
    // 设置响应式对象，存储到filesList中，以便在页面中展示
    const fileObj = reactive<UploadFile>({
      uid: uuidv4(), // 文件唯一id
      size: uploadedFile.size,
      name: uploadedFile.name,
      status: 'loading',
      raw: uploadedFile
    })
    if (isUploading.value )  fileStatus.value = 'loading'
    filesList.value.push(fileObj)

    axios
      .post(props.actions, formData.get(props.name), {
        headers: props.headers,
        data: props.data,
        // 处理上传进度
        onUploadProgress: (progressEvent) => {
          const complete =
            (((progressEvent.loaded / progressEvent.total!) * 100) | 0) + '%'
          fileObj.progress = complete
        }
      })
      .then((resp) => {
        console.log('resp', resp)
        fileObj.status = 'success'
        if(lastFileData.value) fileStatus.value ='success'
      })
      .catch((error) => {
        fileObj.status = 'error'
         fileStatus.value = 'error'
      })
      .finally(() => {
        // 一张图片重复上传时无法继续上传bug
        if (fileInput.value) {
          fileInput.value.value = ''
        }
      })
  }
}
// 通过list判断调用哪个函数
const handleFile=(e:Event)=>{
  props.list? handleFilesListChange(e): handleFileChange(e)
}
const removeFile = (uid: string) => {
  filesList.value = filesList.value.filter((file) => file.uid !== uid)
}
</script>

<style lang="less" scoped>
// 这里使用button组件
button {
  border: 1px solid #58e218;
  background-color: skyblue;
  text-align: center;
  font-size: 12px;
  color: white;
}
li {
  list-style: none;
}
</style>
