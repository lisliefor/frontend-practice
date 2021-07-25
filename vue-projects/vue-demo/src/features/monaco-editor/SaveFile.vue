<template>
  <div>
    <h1>{{ msg }}</h1>
    <div ref="container" style="height: 360px; width: 100%;text-align: left;"></div>
    <button @click="saveFile()" type="button">保存文件</button>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'SaveFile',
  data () {
    return {
      msg: 'Welcome to Your first widget'
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
    saveFile: function (evt) {
      console.log(evt)
    }
  }
}
</script>
