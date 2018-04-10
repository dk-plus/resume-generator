const $ = require('jquery');
const input = (() => {

  // info
  function getHeader() {
    info.name = $('[data-type = name]').val();
    info.detail = $('[data-type = detail]').val();
  }
  function getPersonal() {
    let arr = [];
    $('[data-type = personal]').children().each((index, item) => {
      let newArr = [];
      $(item).children().each((index, item) => {
        newArr.push($(item).val());
      });
      arr.push(newArr);
    });
    info.personal = arr;
  }
  function getSkills() {
    let arr = [];
    $('[data-type = skills]').children().each((index, item) => {
      let newArr = [];
      $(item).children().each((index, item) => {
        newArr.push($(item).val());
      });
      arr.push(newArr);
    });
    info.skills = arr;
  }

  // exp
  function getExp() {
    $('[data-type=exp]').children().each((index, item) => {
      let newExp = {};
      newExp.id = $(item).find("[data-type=id]").val();
      newExp.project = [];
      $(item).find("[data-type=project]").each((index, item) => {
        let newProject = {};
        newProject.detail = [];
        newProject.ul = [];
        newProject.ol = [];
        newProject.name = $(item).find("[data-type=name]").val();
        newProject.time = $(item).find("[data-type=time]").val();
        $(item).find("[data-type=detail]").children().each((index, item) => {
          newProject.detail.push($(item).val());
        });
        $(item).find("[data-type=ul]").children().each((index, item) => {
          newProject.ul.push($(item).val());
        });
        $(item).find("[data-type=ol]").children().each((index, item) => {
          newProject.ol.push($(item).val());
        });
        newExp.project.push(newProject);
      });
      exp.push(newExp);
    });
  }

  let obj = {};
  let info = {};
  let exp = [];
  // $('input').val(1);
  function init() {
    $('#btn').on('click', () => {
      obj = {};
      info = {};
      exp = [];
      getHeader();
      getPersonal();
      getSkills();
      getExp();
      obj.info = info;
      obj.experience = exp;
      console.log(obj);
      console.log(JSON.stringify(obj));
      $.ajax({
        url: '/input',
        method: 'post',
        data: JSON.stringify(obj)
      });
    });
    $('body').on('click', '.add', (e) => {
      let clone = $(e.target).next().next().children().first().clone();
      $(e.target).next().next().append(clone);
    });

    $('body').on('click', '.minus', (e) => {
      $(e.target).next().children().last().remove();
    });
  }
  return {
    init: init
  }
})();

module.exports = input;