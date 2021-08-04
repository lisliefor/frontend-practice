<template>
  <div style='text-align: left;'>
    <h1>{{ msg }}</h1>
    <div style='margin-bottom: 10px;'>
      <input ref='readBtn' type='file' id='files' style='display:none' @change='readFile()'/>
      <input type='button' id='import' value='打开文件' @click='openReadDialog' />
    </div>
    <div ref='container' style='height: 360px; width: 100%;text-align: left;'></div>
    <button style='margin-top: 10px;' @click='saveFile()' type='button'>保存文件</button>
    <a style='display: none;' id='download-link'>下载</a>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'SaveFile',
  data () {
    return {
      msg: 'This is my first vue sample.'
    }
  },
  mounted () {
    // 初始化编辑器，确保dom已经渲染，dialog中要写在opened中
    this.monacoEditor = monaco.editor.create(this.$refs.container, {
      value: '内容',
      readOnly: false,
      language: 'javascript',
      theme: 'vs-dark',
      selectOnLineNumbers: true,
      roundedSelection: false,
      cursorStyle: 'line',
      automaticLayout: false,
      glyphMargin: true,
      useTabStops: false,
      fontSize: 14,
      autoIndent: true,
      quickSuggestionsDelay: 500
    })
  },
  methods: {
    changeEditor (result) {
      this.monacoEditor.setValue(result.data)
      this.monacoEditor.getAction('editor.action.formatDocument')._run()
    },
    destroyEditor () {
      this.monacoEditor.dispose()
    },
    saveFile: function () {
      const content = this.monacoEditor.getValue()
      const downlink = document.getElementById('download-link')
      const blob = new Blob([content], { type: 'application/octet-stream' })
      const fileName = 'a.txt'

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName)
      } else {
        downlink.href = window.URL.createObjectURL(blob)
        downlink.download = fileName
        downlink.click()
      }
    },
    openReadDialog: function () {
      this.$refs.readBtn.click()
    },
    readFile: function () {
      const selectedFile = document.getElementById('files').files[0]
      var reader = new FileReader()
      reader.readAsText(selectedFile)
      const editor = this.monacoEditor

      reader.onload = function (evt) {
        editor.setValue(evt.currentTarget.result)
      }
    }
  }
}
</script>
