
  <div class="info-list">
  {{each data.infos as item index}}
    <div class="item">
      <div class="info-key">{{item.key}}：</div>
      <div class="info-val">{{item.value}}</div>
    </div>
  {{/each}}
  </div>