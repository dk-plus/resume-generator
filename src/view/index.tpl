{{set info = data.info}}
{{set exp = data.experience}}
<div class="info">
  <div class="header">
    <div class="avater">
      <img src={{info.avater}} alt="">
    </div>
    <div class="name">{{info.name}}</div>
    <div class="detail">{{info.detail}}</div>
  </div>
  <div class="personal-info">
    <h3 class="title">个人信息</h3>
    {{each info.personal as per}}
    <div>
      <label for={{per[0]}}>博客：</label><div id={{per[0]}}>{{per[1]}}</div>
    </div>
    {{/each}}
  </div>
  <div class="skills">
    <h3 class="title">个人技能</h3>
    <ul>
      {{each info.skills as skill}}
      <li class="skill">
        <label class="name" for={{skill[0]}}>{{skill[0]}}</label>
        <div class="bar" id={{skill[0]}}>
          <div class="full">
            <div class="val" data-val={{skill[1]}}></div>
          </div>
        </div>
      </li>
      {{/each}}
    </ul>
  </div>
</div>
<div class="experience">
  {{each exp as exp}}
  <div id={{exp.id}} class="exp">
    <h3 class="title">{{exp.id}}</h3>
    <div class="sub-title">
      <div class="name">{{exp.name}}</div>
      <div class="time">{{exp.time}}</div>
    </div>
    {{each exp.detail as detail}}
    <div class="detail">
    {{detail}}
    </div>
    {{/each}}
    <div class="list">
      <ul>
        {{each exp.ul as ul}}
        <li class="item">{{ul}}</li>
        {{/each}}
      </ul>
      <ol>
        {{each exp.ul as ol}}
        <li class="item">{{ol}}</li>
        {{/each}}
      </ol>
    </div>
  </div>
  {{/each}}
</div>