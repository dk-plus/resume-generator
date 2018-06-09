const avater = require('../../statics/images/avater.jpg');
const Config = {

  /**
   * show *{boolean} 是否显示这一窗口
   * title *{string} 窗口的标题
   */
  person: {
    show: true,
    title: '个人简介',
    data: {
      avater: avater,
      p: [
        /**
         * 按以下格式填写
         * '邓康'
         */
        '邓康',
        '前端实习生',
      ]
    }
  },

  personInfo: {
    show: true,
    title: '个人信息',
    data: {
      infos: [
        /**
         * 可以按照这个格式随意增删
        {
          key: '博客',
          value: 'www.cnblog.cn/dkplus'
        },
         */
        {
          key: '手机',
          value: '123-4567-8910'
        },
        {
          key: '邮箱',
          value: 'dkplus.js@gmail.com'
        },
        {
          key: '地址',
          value: '天河区龙洞广东金融学院'
        },
        {
          key: 'github',
          value: 'github.com/dk-plus'
        },
        {
          key: '博客',
          value: 'www.cnblog.cn/dkplus'
        },
      ]
    }
  },

  skill: {
    show: true,
    title: '个人技能',
    data: {
      skills: [
        /**
         * 可以按照这个格式随意增删
        {
          key: 'html',
          value: '90%'
        },
         */
        {
          key: 'html',
          value: '90%'
        },
        {
          key: 'css',
          value: '80%'
        },
        {
          key: 'js',
          value: '70%'
        },
        {
          key: 'node.js',
          value: '50%'
        },
      ]
    }
  },

  tag: {
    show: true,
    title: '个人标签',
    data: {
      tags: [
        /**
         * 可以按照这个格式随意增删
         * '哈哈哈哈'
         */
        'bug达人',
        '足球爱好者',
        '程序猿',
        '喜欢看蜡笔小新',
        '前端',
        '绘画爱好者',
      ]
    }
  },
  
  expTech: {
    show: true,
    title: '教育经历',
    data: {
      exps: [
      /**
       * 按一下格式填写
       * name、time、p、ol、ul可以根据实际需要填写
       * 后面的经历同理
      {
        name: '广东金融学院 电子商务 本科',
        time: '2015.09至今',
        p: [
          '主修电子商务的课程',
          '业余敲代码'
        ],
        ol: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
        ul: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
      },
       */
      {
        name: '广东金融学院-电子商务-本科',
        time: '2015.09至今',
        p: [
          '主修电子商务的课程',
          '业余敲代码'
        ],
        ol: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
        ul: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
      }]
    }
  },

  expProject: {
    show: true,
    title: '项目经历',
    data: {
      exps: [{
        name: 'pp助手-世界杯',
        time: '2018.05.21-05.31',
        p: [
          '这是项目经历',
          '看世界杯咯'
        ],
        ol: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
        ul: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
      }]
    }
  },

  expCompany: {
    show: true,
    title: '实习经历',
    data: {
      exps: [{
        name: '阿里巴巴-pp助手&豌豆荚',
        time: '2018.01至今',
        p: [
          '这是实习经历',
          'uc饭堂'
        ],
        ol: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
        ul: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
      }]
    }
  },

  self: {
    show: true,
    title: '自我评价',
    data: {
      exps: [{
        name: '一个前端爱好者',
        time: '2017.05至今',
        p: [
          '这是自我评价',
          '我只是路过的前端'
        ],
        ol: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
        ul: [
          '这是第一点',
          '这是第二点',
          '这是第三点',
        ],
      }]
    }
  }
}

module.exports = Config;