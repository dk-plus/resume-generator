
  <div class="skill-list">
  {{each data.skills as item index}}
    <div class="item">
      <div class="skill-key">{{item.key}}：</div>
      <div class="skill-bar">
        <div class="skill-val" style="width:{{item.value}}"></div>
      </div>
    </div>
  {{/each}}
  </div>