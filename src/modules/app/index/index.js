const $ = require('jquery');
const artT = require('art-template');

const Panel = require('../../components/panel/panel.js');
const Exp = require('../../components/exp/exp.js');

const Person = require('../../components/person/person.js');
const PersonInfo = require('../../components/person_info/person_info.js');
const Skill = require('../../components/skill/skill.js');
const Tag = require('../../components/tag/tag.js');
const ExpTech = require('../../components/exp_tech/exp_tech.js');
const ExpProject = require('../../components/exp_project/exp_project.js');
const ExpCompany = require('../../components/exp_company/exp_company.js');
const Self = require('../../components/self/self.js');

require('./index.less');

!(() => {
  console.log('%cresume-generator', `
    background: #cacaca;
    padding: 0 5px;
    border-radius: 5px 5px 0 0;
    font-size: 14px;
  `);
  console.log('%c-release-2.0-pro', `
    background: #16c716;
    padding: 0 5px;
    border-radius: 0 0 5px 5px;
    font-size: 14px;
  `);

  let data = {
    title: 'resume-generator'
  };

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  function init() {
    render();
    Person.init();
    PersonInfo.init();
    Skill.init();
    Tag.init();
    ExpTech.init();
    ExpProject.init();
    ExpCompany.init();
    Self.init();
  }

  init();
})();