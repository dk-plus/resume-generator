<div class="info">
  <div class="header">
    <div class="avater">
    </div>
    <div class="name">{{data.info.name}}</div>
    <div class="detail">{{data.info.detail}}</div>
  </div>
  <div class="personal-info">
    <h3 class="title">个人信息</h3>
    {{each data.info.personal as per}}
    <div>
      <label for={{per[0]}}>{{per[0]}}：</label><div id={{per[0]}}>{{per[1]}}</div>
    </div>
    {{/each}}
  </div>
  <div class="skills">
    <h3 class="title">个人技能</h3>
    <ul>
      {{each data.info.skills as skill}}
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
  {{each data.experience as exp}}
  <div id={{exp.id}} class="exp">
    <h3 class="title">{{exp.id}}</h3>
    {{each exp.project as pro}}
      <div class="sub-title">
        <div class="name">{{pro.name}}</div>
        <div class="time">{{pro.time}}</div>
      </div>
      {{each pro.detail as detail}}
      <div class="detail">
      {{detail}}
      </div>
      {{/each}}
      <div class="list">
        <ul>
          {{each pro.ul as ul}}
          <li class="item">{{ul}}</li>
          {{/each}}
        </ul>
        <ol>
          {{each pro.ol as ol}}
          <li class="item">{{ol}}</li>
          {{/each}}
        </ol>
      </div>
    {{/each}}
  </div>
  {{/each}}
</div>