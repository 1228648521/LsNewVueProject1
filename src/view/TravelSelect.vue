<template>
  <div class="div">
    <el-select v-model="selectedOption1" placeholder="请选择" @change="handleChange(selectedOption1)">
      <el-option
        v-for="option in options1"
        :key="option.value"
        :label="option.label"
        :value="option.value">
        <div class="option-wrapper">
          <div class="option-label">{{ option.label }}</div>
          <div class="option-details">
            <div>人流量：{{ option.traffic }}</div>
            <div>是否好走：{{ option.easyToGo ? '是' : '否' }}</div>
            <div>是否会错过：{{ option.missable ? '是' : '否' }}</div>
          </div>
        </div>
      </el-option>
    </el-select>

    <el-select v-model="selectedOption2" placeholder="请选择" @change="handleChange(selectedOption2)">
      <el-option
        v-for="option in options2"
        :key="option.value"
        :label="option.label"
        :value="option.value">
        <div class="option-wrapper">
          <div class="option-label">{{ option.label }}</div>
          <div class="option-details">
            <div>人流量：{{ option.traffic }}</div>
            <div>是否好走：{{ option.easyToGo ? '是' : '否' }}</div>
            <div>是否会错过：{{ option.missable ? '是' : '否' }}</div>
          </div>
        </div>
      </el-option>
    </el-select>

    <el-select v-model="selectedOption3" placeholder="请选择" @change="handleChange(selectedOption3)">
      <el-option
        v-for="option in options3"
        :key="option.value"
        :label="option.label"
        :value="option.value">
        <div class="option-wrapper">
          <div class="option-label">{{ option.label }}</div>
          <div class="option-details">
            <div>人流量：{{ option.traffic }}</div>
            <div>是否好走：{{ option.easyToGo ? '是' : '否' }}</div>
            <div>是否会错过：{{ option.missable ? '是' : '否' }}</div>
          </div>
        </div>
      </el-option>
    </el-select>

    <div class="result" v-if="result">
      提交的结果为：{{ result }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedOption1: '',
      selectedOption2: '',
      selectedOption3: '',
      options1: [
        { label: '选项一', value: 'option1', traffic: 100, easyToGo: true, missable: false },
        { label: '选项二', value: 'option2', traffic: 50, easyToGo: false, missable: true },
        { label: '选项三', value: 'option3', traffic: 200, easyToGo: true, missable: true },
        { label: '选项四', value: 'option4', traffic: 30, easyToGo: false, missable: false }
      ],
      options2: [
        { label: '选项一', value: 'option1', traffic: 150, easyToGo: false, missable: true },
        { label: '选项二', value: 'option2', traffic: 80, easyToGo: true, missable: false },
        { label: '选项三', value: 'option3', traffic: 120, easyToGo: false, missable: true },
        { label: '选项四', value: 'option4', traffic: 50, easyToGo: true, missable: false }
      ],
      options3: [
        { label: '选项一', value: 'option1', traffic: 70, easyToGo: true, missable: false },
        { label: '选项二', value: 'option2', traffic: 40, easyToGo: false, missable: false },
        { label: '选项三', value: 'option3', traffic: 90, easyToGo: true, missable: true },
        { label: '选项四', value: 'option4', traffic: 120, easyToGo: false, missable: true }
      ],
      result: ''
    }
  },
  methods: {
    handleChange (value) {
      if (value === 'option1') {
        this.result = '您选择的是选项一'
      } else if (value === 'option2') {
        this.result = '您选择的是选项二'
      } else if (value === 'option3') {
        this.result = '您选择的是选项三'
      } else if (value === 'option4') {
        this.result = '您选择的是选项四'
      }
    }
  }
}
</script>

<style scoped>
.option-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.option-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.result {
  margin-top: 20px;
}

.div {
  display: inline-block;

}
</style>
